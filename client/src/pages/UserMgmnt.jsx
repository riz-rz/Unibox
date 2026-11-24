
  import React, { useMemo, useState } from "react";
  import {
    Search,
    Users,
    UserCheck,
    UserX,
    ShieldCheck,
    MoreHorizontal,
    ChevronDown,
    Eye,
    Ban,
    CheckCircle,
    Mail,
    Phone,
    MapPin,
    Shield,
  } from "lucide-react";
  import { useEffect } from "react";



  function UserMgmnt() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedUser, setSelectedUser] = useState(null);
    
    const fetchUsers = async()=>{
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/users`, { credentials: "include" });
        const data = await res.json();
        if (data.success) {
          console.log(data);

          setUsers(data.users)
        }
      } catch (error) {
        console.log(error);
      }
    }


    useEffect(()=>{
      fetchUsers()
    },[])

    // Statistics
    const totalUsers = users.length;
    const verifiedUsers = users.filter((user) => user.isVerified).length;
    const blockedUsers = users.filter((user) => user.isBlocked).length;
    const adminUsers = users.filter((user) => user.role === "admin").length;

    // Search and filter
    const filteredUsers = useMemo(() => {
      return users.filter((user) => {
        const searchValue = search.toLowerCase();

        const matchesSearch =
          user.name.toLowerCase().includes(searchValue) ||
          user.email.toLowerCase().includes(searchValue) ||
          (user.phone || "").includes(searchValue);

        const matchesRole =
          roleFilter === "All" || user.role === roleFilter;

        const matchesStatus =
          statusFilter === "All" ||
          (statusFilter === "Verified" && user.isVerified) ||
          (statusFilter === "Unverified" && !user.isVerified) ||
          (statusFilter === "Blocked" && user.isBlocked) ||
          (statusFilter === "Active" && !user.isBlocked);

        return matchesSearch && matchesRole && matchesStatus;
      });
    }, [users, search, roleFilter, statusFilter]);

    // Temporary block/unblock interaction
    const toggleBlock = (id) => {
      setUsers((previousUsers) =>
        previousUsers.map((user) =>
          user._id === id
            ? { ...user, isBlocked: !user.isBlocked }
            : user
        )
      );
    };

    return (
      <div className="space-y-6">

        {/* PAGE HEADER */}
        <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-black tracking-tight md:text-3xl">
              User Management
            </h1>

            <p className="mt-1 text-sm font-medium text-gray-500">
              Manage your customers and administrator accounts.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 shadow-[3px_3px_0px_#121212]">
            <Users size={17} />
            <span className="text-sm font-black">
              {totalUsers} Total Users
            </span>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <UserStat
            title="Total Users"
            value={totalUsers}
            icon={Users}
            color="bg-yellow-300"
          />

          <UserStat
            title="Verified Users"
            value={verifiedUsers}
            icon={UserCheck}
            color="bg-green-300"
          />

          <UserStat
            title="Blocked Users"
            value={blockedUsers}
            icon={UserX}
            color="bg-red-300"
          />

          <UserStat
            title="Administrators"
            value={adminUsers}
            icon={ShieldCheck}
            color="bg-purple-300"
          />

        </section>

        {/* USER TABLE */}
        <section className="overflow-hidden rounded-xl border-[2.5px] border-black bg-white shadow-[4px_4px_0px_#121212]">

          {/* TABLE HEADER */}
          <div className="border-b-2 border-black p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

              <div>
                <h2 className="text-lg font-black uppercase">
                  All Users
                </h2>

                <p className="text-xs text-gray-500">
                  View and manage registered accounts.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                {/* SEARCH */}
                <div className="flex items-center gap-2 rounded-lg border-2 border-black bg-[#FCF9F0] px-3 py-2">
                  <Search size={17} />

                  <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent text-xs font-medium outline-none sm:w-48"
                  />
                </div>

                {/* ROLE FILTER */}
                <div className="relative">
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="w-full appearance-none rounded-lg border-2 border-black bg-white py-2 pl-3 pr-9 text-xs font-bold outline-none sm:w-36"
                  >
                    <option value="All">All Roles</option>
                    <option value="user">Customers</option>
                    <option value="admin">Admins</option>
                  </select>

                  <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                  />
                </div>

                {/* STATUS FILTER */}
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full appearance-none rounded-lg border-2 border-black bg-white py-2 pl-3 pr-9 text-xs font-bold outline-none sm:w-36"
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                    <option value="Verified">Verified</option>
                    <option value="Unverified">Unverified</option>
                  </select>

                  <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px]">

              <thead className="bg-[#FFF7D9]">
                <tr className="border-b-2 border-black text-left">
                  {[
                    "User",
                    "Contact",
                    "Location",
                    "Role",
                    "Verification",
                    "Account Status",
                    "Actions",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-4 py-4 text-[10px] font-black uppercase tracking-wider"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr
                      key={user._id}
                      className="border-b border-gray-200 transition-colors hover:bg-yellow-50"
                    >

                      {/* USER */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <UserAvatar user={user} />

                          <div>
                            <p className="text-xs font-black">
                              {user.name}
                            </p>

                            <p className="text-[10px] text-gray-500">
                              ID: {user._id}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* CONTACT */}
                      <td className="px-4 py-4">
                        <p className="flex items-center gap-2 text-xs font-bold">
                          <Mail size={13} />
                          {user.email}
                        </p>

                        <p className="mt-1 flex items-center gap-2 text-[10px] text-gray-500">
                          <Phone size={12} />
                          {user.phone || "Not provided"}
                        </p>
                      </td>

                      {/* LOCATION */}
                      <td className="px-4 py-4">
                        <p className="flex items-center gap-1 text-xs font-bold">
                          <MapPin size={13} />
                          {user.address?.city || "Not provided"}
                        </p>

                        <p className="mt-1 text-[10px] text-gray-500">
                          {user.address?.state || ""}
                        </p>
                      </td>

                      {/* ROLE */}
                      <td className="px-4 py-4">
                        <span
                          className={`rounded border border-black px-2 py-1 text-[9px] font-black uppercase ${
                            user.role === "admin"
                              ? "bg-purple-300"
                              : "bg-blue-200"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>

                      {/* VERIFICATION */}
                      <td className="px-4 py-4">
                        <StatusBadge
                          active={user.isVerified}
                          activeText="Verified"
                          inactiveText="Unverified"
                        />
                      </td>

                      {/* ACCOUNT STATUS */}
                      <td className="px-4 py-4">
                        <StatusBadge
                          active={!user.isBlocked}
                          activeText="Active"
                          inactiveText="Blocked"
                        />
                      </td>

                      {/* ACTIONS */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">

                          <button
                            onClick={() => setSelectedUser(user)}
                            title="View user"
                            className="rounded border-2 border-black bg-blue-200 p-2 hover:bg-blue-300"
                          >
                            <Eye size={15} />
                          </button>

                          <button
                            onClick={() => toggleBlock(user._id)}
                            title={user.isBlocked ? "Unblock user" : "Block user"}
                            className={`rounded border-2 border-black p-2 ${
                              user.isBlocked
                                ? "bg-green-300 hover:bg-green-400"
                                : "bg-red-300 hover:bg-red-400"
                            }`}
                          >
                            {user.isBlocked ? (
                              <CheckCircle size={15} />
                            ) : (
                              <Ban size={15} />
                            )}
                          </button>

                          <button
                            title="More options"
                            className="rounded border-2 border-black bg-white p-2 hover:bg-gray-100"
                          >
                            <MoreHorizontal size={15} />
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-4 py-12 text-center text-sm font-bold text-gray-500"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

          {/* FOOTER */}
          <div className="flex flex-col justify-between gap-2 border-t-2 border-black bg-[#FFF7D9] px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-xs font-bold text-gray-600">
              Showing {filteredUsers.length} of {totalUsers} users
            </p>
          </div>

        </section>

        {/* USER DETAILS MODAL */}
        {selectedUser && (
          <UserDetailsModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}

      </div>
    );
  }

  // STAT CARD
  function UserStat({ title, value, icon: Icon, color }) {
    return (
      <div className="rounded-xl border-[2.5px] border-black bg-white p-5 shadow-[4px_4px_0px_#121212]">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-wider text-gray-500">
            {title}
          </p>

          <div className={`flex h-10 w-10 items-center justify-center border-2 border-black ${color}`}>
            <Icon size={20} strokeWidth={2.5} />
          </div>
        </div>

        <h2 className="mt-3 text-3xl font-black">
          {value}
        </h2>
      </div>
    );
  }

  // AVATAR
  function UserAvatar({ user }) {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-yellow-200">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-black">
            {user.name?.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
    );
  }

  // STATUS BADGE
  function StatusBadge({ active, activeText, inactiveText }) {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded border border-black px-2 py-1 text-[9px] font-black uppercase ${
          active ? "bg-green-200" : "bg-red-200"
        }`}
      >
        {active ? (
          <CheckCircle size={11} />
        ) : (
          <Ban size={11} />
        )}

        {active ? activeText : inactiveText}
      </span>
    );
  }

  // USER DETAILS MODAL
  function UserDetailsModal({ user, onClose }) {
    const address = user.address || {};

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <div
          className="w-full max-w-lg rounded-xl border-[3px] border-black bg-[#FCF9F0] p-6 shadow-[6px_6px_0px_#121212]"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black uppercase">
              User Details
            </h2>

            <button
              onClick={onClose}
              className="rounded border-2 border-black bg-white px-3 py-1 font-black"
            >
              ✕
            </button>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-black bg-yellow-200">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-2xl font-black">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-black">{user.name}</h3>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 rounded-lg border-2 border-black bg-white p-4">

            <DetailRow label="Phone" value={user.phone || "Not provided"} />
            <DetailRow label="Role" value={user.role} />
            <DetailRow
              label="Verification"
              value={user.isVerified ? "Verified" : "Not verified"}
            />
            <DetailRow
              label="Account"
              value={user.isBlocked ? "Blocked" : "Active"}
            />

            <div className="border-t border-gray-200 pt-3">
              <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase">
                <MapPin size={14} />
                Address
              </p>

              <p className="text-xs leading-6 text-gray-600">
                {address.fullname || ""}
                <br />
                {address.street || "No street provided"}
                <br />
                {[address.city, address.state, address.pincode]
                  .filter(Boolean)
                  .join(", ")}
                <br />
                {address.country || ""}
              </p>
            </div>

          </div>

          <button
            onClick={onClose}
            className="mt-5 w-full rounded-lg border-2 border-black bg-[#FFD400] py-3 text-sm font-black shadow-[3px_3px_0px_#121212]"
          >
            Close
          </button>

        </div>
      </div>
    );
  }

  function DetailRow({ label, value }) {
    return (
      <div className="flex justify-between gap-4 text-xs">
        <span className="font-bold text-gray-500">{label}</span>
        <span className="font-black capitalize text-right">{value}</span>
      </div>
    );
  }

  export default UserMgmnt;
