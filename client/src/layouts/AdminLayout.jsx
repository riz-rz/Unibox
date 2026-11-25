import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  Search,
  Bell,
  Menu,
  X,
  ShoppingBag,
  MoreHorizontal,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
    end: true,
  },
  {
    name: "User Management",
    path: "/admin/users",
    icon: Users,
  },
  {
    name: "Product Management",
    path: "/admin/products",
    icon: Package,
  },
];

const AdminLayout = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCF9F0] text-[#121212] font-sans">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-[250px] flex-col
          border-r-[3px] border-black
          bg-[#FFF7D9]
          transition-transform duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* LOGO */}
        <div className="flex h-[76px] items-center justify-between border-b-[3px] border-black px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center ">
              <img src={"/assets/unibox-logo.svg"} alt="logo" />
            </div>

            <div>
              <h1 className="text-lg font-black tracking-tight">
                UNIBOX
              </h1>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X />
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 px-4 py-6">
          <p className="mb-4 px-2 text-[10px] font-black uppercase tracking-[2px] text-gray-500">
            Main Menu
          </p>

          <nav className="space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.end}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) => `
                    flex w-full items-center gap-3
                    rounded-lg border-2 border-black
                    px-4 py-3 text-sm font-bold
                    transition-all
                    ${
                      isActive
                        ? "bg-[#FFD400] shadow-[3px_3px_0px_#121212]"
                        : "border-transparent bg-transparent hover:border-black hover:bg-white"
                    }
                  `}
                >
                  <Icon size={19} strokeWidth={2.5} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-10">
            <p className="mb-4 px-2 text-[10px] font-black uppercase tracking-[2px] text-gray-500">
              Other
            </p>

            <NavLink
              to="/admin/settings"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => `
                flex w-full items-center gap-3 rounded-lg
                border-2 px-4 py-3 text-sm font-bold
                ${
                  isActive
                    ? "border-black bg-[#FFD400]"
                    : "border-transparent hover:border-black hover:bg-white"
                }
              `}
            >
              <Settings size={19} />
              Settings
            </NavLink>
          </div>
        </div>

        {/* ADMIN PROFILE */}
        <div className="border-t-[3px] border-black p-4">
          <div className="flex items-center gap-3 border-2 border-black bg-white p-3 shadow-[3px_3px_0px_#121212]">
            <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-purple-300 font-black">
              A
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-black">
                Admin User
              </p>

              <p className="text-[10px] font-bold uppercase text-gray-500">
                Administrator
              </p>
            </div>

            <button className="rounded p-1 hover:bg-gray-100">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="min-h-screen lg:ml-[250px]">

        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b-[3px] border-black bg-[#FCF9F0] px-4 md:px-8">

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu size={24} />
            </button>

            <div className="hidden text-[10px] font-bold uppercase tracking-wider text-gray-500 sm:block">
              UNIBOX ADMIN / OVERVIEW
            </div>
          </div>

          {/* SEARCH */}
          <div className="hidden w-full max-w-[400px] items-center gap-3 rounded-lg border-2 border-black bg-white px-3 py-2 shadow-[3px_3px_0px_#121212] md:flex">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search orders, products, users..."
              className="w-full bg-transparent text-xs font-medium outline-none"
            />

            <span className="rounded border border-gray-300 px-1 text-[10px] text-gray-400">
              /
            </span>
          </div>

          {/* HEADER ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black bg-white shadow-[3px_3px_0px_#121212]">
              <Bell size={18} />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-black bg-red-400 text-[10px] font-black">
                3
              </span>
            </button>

            <button className="hidden h-10 w-10 items-center justify-center rounded-lg border-2 border-black bg-white shadow-[3px_3px_0px_#121212] sm:flex">
              <Settings size={18} />
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black bg-[#FFD400] shadow-[3px_3px_0px_#121212]">
              <span className="text-sm font-black">A</span>
            </button>
          </div>
        </header>

        {/* CHILD ROUTES RENDER HERE */}
        <div className="space-y-6 p-4 md:p-8">
          <Outlet />
        </div>

      </main>
    </div>
  );
}

export default AdminLayout