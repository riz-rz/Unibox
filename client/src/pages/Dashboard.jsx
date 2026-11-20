
import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  Search,
  Bell,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingBag,
  IndianRupee,
  Menu,
  X,
  Plus,
  AlertTriangle,
  Eye,
  MoreHorizontal,
  Box,
  CheckCircle,
  Clock,
  Truck,
  Ban,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "₹1,28,450",
    change: "+14.2%",
    positive: true,
    icon: IndianRupee,
    color: "bg-yellow-300",
  },
  {
    title: "Total Orders",
    value: "1,429",
    change: "+8.6%",
    positive: true,
    icon: ShoppingBag,
    color: "bg-blue-300",
  },
  {
    title: "Total Products",
    value: "356",
    change: "+12 new",
    positive: true,
    icon: Package,
    color: "bg-purple-300",
  },
  {
    title: "Total Users",
    value: "8,920",
    change: "+19.4%",
    positive: true,
    icon: Users,
    color: "bg-green-300",
  },
];

const orders = [
  {
    id: "#ORD-1024",
    customer: "Rahul Sharma",
    item: "Wireless Headphones",
    amount: "₹2,499",
    status: "Delivered",
  },
  {
    id: "#ORD-1023",
    customer: "Ananya Das",
    item: "Smart Watch",
    amount: "₹4,999",
    status: "Processing",
  },
  {
    id: "#ORD-1022",
    customer: "Arjun Menon",
    item: "Mechanical Keyboard",
    amount: "₹3,200",
    status: "Shipped",
  },
  {
    id: "#ORD-1021",
    customer: "Sara Khan",
    item: "Bluetooth Speaker",
    amount: "₹1,899",
    status: "Pending",
  },
];

const lowStockProducts = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    stock: 4,
    price: "₹2,499",
  },
  {
    name: "Smart Watch Pro",
    category: "Accessories",
    stock: 7,
    price: "₹4,999",
  },
  {
    name: "Mechanical Keyboard",
    category: "Electronics",
    stock: 3,
    price: "₹3,200",
  },
];

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "User Management",
    icon: Users,
  },
  {
    name: "Product Management",
    icon: Package,
  },
];

function AdminDashboard() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCF9F0] text-[#121212] font-sans">

      {/* MOBILE SIDEBAR OVERLAY */}
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

            <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-[#FFD400] shadow-[3px_3px_0px_#121212]">
              <ShoppingBag size={21} strokeWidth={2.5} />
            </div>

            <div>
              <h1 className="text-lg font-black tracking-tight">
                UNIBOX
              </h1>

              <span className="border border-black bg-black px-1 text-[9px] font-bold text-white">
                ADMIN
              </span>
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
              const active = activePage === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActivePage(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`
                    flex w-full items-center gap-3
                    rounded-lg border-2 border-black
                    px-4 py-3 text-sm font-bold
                    transition-all
                    ${
                      active
                        ? "bg-[#FFD400] shadow-[3px_3px_0px_#121212]"
                        : "border-transparent bg-transparent hover:border-black hover:bg-white"
                    }
                  `}
                >
                  <Icon size={19} strokeWidth={2.5} />
                  {item.name}
                </button>
              );
            })}

          </nav>

          <div className="mt-10">

            <p className="mb-4 px-2 text-[10px] font-black uppercase tracking-[2px] text-gray-500">
              Other
            </p>

            <button
              onClick={() => setActivePage("Settings")}
              className={`
                flex w-full items-center gap-3 rounded-lg
                border-2 border-transparent px-4 py-3
                text-sm font-bold hover:border-black hover:bg-white
                ${
                  activePage === "Settings"
                    ? "border-black bg-[#FFD400]"
                    : ""
                }
              `}
            >
              <Settings size={19} />
              Settings
            </button>

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

      {/* MAIN CONTENT */}
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

            <button className="relative flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black bg-white shadow-[3px_3px_0px_#121212] hover:translate-y-[2px] hover:shadow-none">
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

        {/* PAGE */}
        <div className="space-y-6 p-4 md:p-8">

          {activePage === "Dashboard" ? (
            <DashboardContent />
          ) : (
            <PlaceholderPage page={activePage} />
          )}

        </div>

      </main>

    </div>
  );
}

// DASHBOARD CONTENT

function DashboardContent() {
  return (
    <>

      {/* WELCOME */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-2xl font-black tracking-tight md:text-3xl">
            Welcome back, Admin!
          </h1>

          <p className="mt-1 text-sm font-medium text-gray-500">
            Here's what's happening with your store today.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_#121212]">
            <Clock size={16} />
            Last 30 days
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-2 rounded-lg border-2 border-black bg-[#FFD400] px-4 py-2 text-sm font-black shadow-[3px_3px_0px_#121212] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            <Plus size={17} />
            Quick Action
          </button>

        </div>

      </section>

      {/* STAT CARDS */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}

      </section>

      {/* ANALYTICS */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* SALES CHART */}
        <div className="rounded-xl border-[2.5px] border-black bg-white p-5 shadow-[4px_4px_0px_#121212] xl:col-span-2">

          <div className="flex flex-wrap items-start justify-between gap-4">

            <div>
              <h2 className="text-lg font-black uppercase">
                Revenue Overview
              </h2>

              <p className="text-xs font-medium text-gray-500">
                Track your store's sales performance
              </p>
            </div>

            <div className="flex border-2 border-black bg-gray-100 p-1">

              {["Daily", "Weekly", "Monthly"].map((period, index) => (
                <button
                  key={period}
                  className={`px-3 py-1 text-xs font-black ${
                    index === 1
                      ? "border border-black bg-[#FFD400]"
                      : "hover:bg-white"
                  }`}
                >
                  {period}
                </button>
              ))}

            </div>

          </div>

          {/* CHART */}
          <div className="mt-6 h-[250px] w-full">

            <svg
              viewBox="0 0 700 250"
              className="h-full w-full"
              preserveAspectRatio="none"
            >

              {/* GRID */}
              {[40, 90, 140, 190].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="700"
                  y2={y}
                  stroke="#E5E5E5"
                  strokeDasharray="4 5"
                />
              ))}

              {/* AREA */}
              <path
                d="M0 190
                   C60 175 100 160 150 150
                   S220 180 280 125
                   S350 80 400 105
                   S460 210 510 155
                   S590 70 630 85
                   S670 115 700 65
                   L700 220 L0 220 Z"
                fill="#FFD400"
                opacity="0.22"
              />

              {/* LINE */}
              <path
                d="M0 190
                   C60 175 100 160 150 150
                   S220 180 280 125
                   S350 80 400 105
                   S460 210 510 155
                   S590 70 630 85
                   S670 115 700 65"
                fill="none"
                stroke="#121212"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* SECOND LINE */}
              <path
                d="M0 210
                   C70 200 120 190 170 185
                   S240 190 300 170
                   S360 130 410 150
                   S470 220 520 190
                   S600 130 650 140
                   S680 155 700 120"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
                strokeDasharray="4 5"
              />

              {/* POINTS */}
              {[
                [150, 150],
                [280, 125],
                [400, 105],
                [510, 155],
                [630, 85],
              ].map(([x, y]) => (
                <circle
                  key={x}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#FFD400"
                  stroke="#121212"
                  strokeWidth="2"
                />
              ))}

            </svg>

          </div>

          {/* CHART LABELS */}
          <div className="mt-2 flex justify-between text-[10px] font-bold text-gray-500">
            <span>Nov 01</span>
            <span>Nov 07</span>
            <span>Nov 14</span>
            <span>Nov 21</span>
            <span>Nov 30</span>
          </div>

          {/* CHART SUMMARY */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

            <div className="rounded-lg border-2 border-black bg-gray-50 p-3">
              <p className="text-[10px] font-bold uppercase text-gray-500">
                Gross Revenue
              </p>
              <p className="text-lg font-black">₹1,28,450</p>
            </div>

            <div className="rounded-lg border-2 border-black bg-blue-100 p-3">
              <p className="text-[10px] font-bold uppercase text-gray-500">
                Online Sales
              </p>
              <p className="text-lg font-black">₹84,200</p>
            </div>

            <div className="rounded-lg border-2 border-black bg-yellow-100 p-3">
              <p className="text-[10px] font-bold uppercase text-gray-500">
                Direct Sales
              </p>
              <p className="text-lg font-black">₹44,250</p>
            </div>

          </div>

        </div>

        {/* ORDER FULFILLMENT */}
        <div className="rounded-xl border-[2.5px] border-black bg-white p-5 shadow-[4px_4px_0px_#121212]">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-black uppercase">
                Order Status
              </h2>

              <p className="text-xs text-gray-500">
                Order fulfillment overview
              </p>
            </div>

            <button className="rounded border-2 border-black p-1 hover:bg-gray-100">
              <MoreHorizontal size={18} />
            </button>

          </div>

          {/* DONUT */}
          <div className="relative mx-auto my-6 flex h-48 w-48 items-center justify-center">

            <div
              className="h-full w-full rounded-full"
              style={{
                background:
                  "conic-gradient(#10B981 0% 68%, #FACC15 68% 86%, #3B82F6 86% 96%, #EF4444 96% 100%)",
              }}
            />

            <div className="absolute flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-black bg-white">
              <p className="text-2xl font-black">1,429</p>
              <p className="text-[9px] font-bold uppercase tracking-wider">
                Total Orders
              </p>
            </div>

          </div>

          {/* STATUS */}
          <div className="space-y-3">

            <StatusRow
              label="Delivered"
              count="972"
              percentage="68%"
              color="bg-green-400"
            />

            <StatusRow
              label="Processing"
              count="257"
              percentage="18%"
              color="bg-yellow-300"
            />

            <StatusRow
              label="Shipped"
              count="143"
              percentage="10%"
              color="bg-blue-400"
            />

            <StatusRow
              label="Cancelled"
              count="57"
              percentage="4%"
              color="bg-red-400"
            />

          </div>

        </div>

      </section>

      {/* RECENT ORDERS + LOW STOCK */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* RECENT ORDERS */}
        <div className="overflow-hidden rounded-xl border-[2.5px] border-black bg-white shadow-[4px_4px_0px_#121212] xl:col-span-2">

          <div className="flex items-center justify-between border-b-2 border-black p-5">

            <div>
              <h2 className="text-lg font-black uppercase">
                Recent Orders
              </h2>

              <p className="text-xs text-gray-500">
                Latest orders from your customers
              </p>
            </div>

            <button className="flex items-center gap-1 text-xs font-black hover:underline">
              View All
              <ArrowUpRight size={15} />
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[600px]">

              <thead className="bg-[#FFF7D9]">

                <tr className="border-b-2 border-black text-left">

                  {["Order ID", "Customer", "Product", "Amount", "Status"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="px-4 py-3 text-[10px] font-black uppercase tracking-wider"
                      >
                        {heading}
                      </th>
                    )
                  )}

                </tr>

              </thead>

              <tbody>

                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-200 transition-colors hover:bg-yellow-50"
                  >

                    <td className="px-4 py-4 text-xs font-black">
                      {order.id}
                    </td>

                    <td className="px-4 py-4 text-xs font-bold">
                      {order.customer}
                    </td>

                    <td className="px-4 py-4 text-xs">
                      {order.item}
                    </td>

                    <td className="px-4 py-4 text-xs font-black">
                      {order.amount}
                    </td>

                    <td className="px-4 py-4">
                      <OrderBadge status={order.status} />
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* LOW STOCK */}
        <div className="rounded-xl border-[2.5px] border-black bg-white p-5 shadow-[4px_4px_0px_#121212]">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <h2 className="text-lg font-black uppercase">
                Low Stock Radar
              </h2>

              <p className="text-xs text-gray-500">
                Products that need attention
              </p>
            </div>

            <span className="rounded border-2 border-black bg-red-300 px-2 py-1 text-[9px] font-black uppercase">
              Critical
            </span>

          </div>

          <div className="space-y-4">

            {lowStockProducts.map((product) => (
              <div
                key={product.name}
                className="rounded-lg border-2 border-black p-3 shadow-[2px_2px_0px_#121212]"
              >

                <div className="flex items-start justify-between gap-2">

                  <div className="flex gap-3">

                    <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-yellow-200">
                      <Box size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-black">
                        {product.name}
                      </p>

                      <p className="text-[10px] text-gray-500">
                        {product.category}
                      </p>

                      <p className="mt-1 text-xs font-bold">
                        {product.price}
                      </p>
                    </div>

                  </div>

                  <button className="rounded border-2 border-black bg-[#FFD400] px-2 py-1 text-[9px] font-black hover:bg-yellow-300">
                    Restock
                  </button>

                </div>

                <div className="mt-3">

                  <div className="mb-1 flex justify-between text-[10px] font-bold">

                    <span>Stock remaining</span>

                    <span className="text-red-600">
                      {product.stock} units
                    </span>

                  </div>

                  <div className="h-2 border border-black bg-gray-100">

                    <div
                      className="h-full bg-red-400"
                      style={{
                        width: `${product.stock * 10}%`,
                      }}
                    />

                  </div>

                </div>

              </div>
            ))}

          </div>

          <button className="mt-4 w-full rounded-lg border-2 border-black bg-[#FFD400] py-2 text-xs font-black shadow-[3px_3px_0px_#121212] hover:translate-y-[2px] hover:shadow-none">
            View All Products
          </button>

        </div>

      </section>

    </>
  );
}

// STAT CARD

function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <div className="rounded-xl border-[2.5px] border-black bg-white p-5 shadow-[4px_4px_0px_#121212] transition-transform hover:-translate-y-1">

      <div className="flex items-center justify-between">

        <p className="text-xs font-black uppercase tracking-wider text-gray-500">
          {stat.title}
        </p>

        <div
          className={`flex h-10 w-10 items-center justify-center border-2 border-black ${stat.color}`}
        >
          <Icon size={20} strokeWidth={2.5} />
        </div>

      </div>

      <h2 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">
        {stat.value}
      </h2>

      <div className="mt-3 flex items-center gap-2">

        <span className="flex items-center gap-1 rounded-full border border-black bg-green-100 px-2 py-1 text-[10px] font-black text-green-800">

          <ArrowUpRight size={12} />

          {stat.change}

        </span>

        <span className="text-[10px] font-medium text-gray-500">
          compared to last month
        </span>

      </div>

    </div>
  );
}

// ORDER STATUS ROW

function StatusRow({ label, count, percentage, color }) {
  return (
    <div className="flex items-center justify-between rounded-lg border-2 border-black px-3 py-2">

      <div className="flex items-center gap-2">

        <span className={`h-3 w-3 rounded-full border border-black ${color}`} />

        <span className="text-xs font-bold">
          {label}
        </span>

      </div>

      <div className="flex items-center gap-3">

        <span className="text-xs font-black">
          {count}
        </span>

        <span className="w-10 rounded border border-black bg-gray-100 px-1 text-center text-[9px] font-bold">
          {percentage}
        </span>

      </div>

    </div>
  );
}

// ORDER BADGE

function OrderBadge({ status }) {
  const styles = {
    Delivered: "bg-green-300",
    Processing: "bg-yellow-300",
    Shipped: "bg-blue-300",
    Pending: "bg-orange-300",
    Cancelled: "bg-red-300",
  };

  return (
    <span
      className={`inline-flex rounded border border-black px-2 py-1 text-[9px] font-black uppercase ${styles[status]}`}
    >
      {status}
    </span>
  );
}

// PLACEHOLDER PAGES

function PlaceholderPage({ page }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-xl border-[3px] border-black bg-white shadow-[5px_5px_0px_#121212]">

      <div className="mb-4 flex h-20 w-20 items-center justify-center border-[3px] border-black bg-[#FFD400] shadow-[4px_4px_0px_#121212]">

        {page === "User Management" ? (
          <Users size={35} />
        ) : page === "Product Management" ? (
          <Package size={35} />
        ) : (
          <Settings size={35} />
        )}

      </div>

      <h1 className="text-2xl font-black">
        {page}
      </h1>

      <p className="mt-2 text-sm font-medium text-gray-500">
        This page will be built next.
      </p>

      <span className="mt-4 border-2 border-black bg-yellow-200 px-4 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_#121212]">
        Coming Soon
      </span>

    </div>
  );
}

export default AdminDashboard;
