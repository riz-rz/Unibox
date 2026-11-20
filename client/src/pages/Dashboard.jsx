
import React from "react";
import {
  ArrowUpRight,
  ShoppingBag,
  IndianRupee,
  Users,
  Package,
  Plus,
  Clock,
  ChevronDown,
  Box,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "₹1,28,450",
    change: "+14.2%",
    icon: IndianRupee,
    color: "bg-yellow-300",
  },
  {
    title: "Total Orders",
    value: "1,429",
    change: "+8.6%",
    icon: ShoppingBag,
    color: "bg-blue-300",
  },
  {
    title: "Total Products",
    value: "356",
    change: "+12 new",
    icon: Package,
    color: "bg-purple-300",
  },
  {
    title: "Total Users",
    value: "8,920",
    change: "+19.4%",
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

function Dashboard() {
  return (
    <div className="space-y-6">

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
                  {[
                    "Order ID",
                    "Customer",
                    "Product",
                    "Amount",
                    "Status",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-4 py-3 text-[10px] font-black uppercase tracking-wider"
                    >
                      {heading}
                    </th>
                  ))}
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
    </div>
  );
}

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
      className={`inline-flex rounded border border-black px-2 py-1 text-[9px] font-black uppercase ${styles[status] || "bg-gray-200"}`}
    >
      {status}
    </span>
  );
}

export default Dashboard;
