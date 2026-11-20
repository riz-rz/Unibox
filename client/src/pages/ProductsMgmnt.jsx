
import React, { useMemo, useState } from "react";
import {
  Search,
  Package,
  Boxes,
  AlertTriangle,
  Star,
  Plus,
  Eye,
  Pencil,
  MoreHorizontal,
  ChevronDown,
  CheckCircle,
  Ban,
  X,
  IndianRupee,
} from "lucide-react";
import { useEffect } from "react";


const emptyProduct = {
  productName: "",
  description: "",
  price: "",
  discountPrice: "",
  category: "",
  brand: "",
  images: "",
  stock: "",
  sizes: "",
  colors: "",
  isFeatured: false,
  isActive: true,
};

function ProductsMgmnt () {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);


  const fetchProducts =  async ()=>{
    const res = await fetch("http://localhost:5000/products");
    const data =await res.json()

    console.log(data);
    
    if(data.success){
        setProducts(data.prods)
    }

  }

  useEffect(()=>{
    fetchProducts()
  },[])

  // Product statistics
  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.isActive).length;
  const lowStockProducts = products.filter(
    (p) => p.stock > 0 && p.stock <= 5
  ).length;
  const outOfStockProducts = products.filter((p) => p.stock === 0).length;

  // Unique categories from products
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  // Search and filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        product.productName.toLowerCase().includes(searchValue) ||
        product.brand.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue);

      const matchesCategory =
        categoryFilter === "All" ||
        product.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All" ||
        (statusFilter === "Active" && product.isActive) ||
        (statusFilter === "Inactive" && !product.isActive) ||
        (statusFilter === "Featured" && product.isFeatured);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, search, categoryFilter, statusFilter]);

  // Add or update product locally
  const saveProduct = (productData) => {
    if (editingProduct) {
      setProducts((previous) =>
        previous.map((product) =>
          product._id === editingProduct._id
            ? { ...product, ...productData }
            : product
        )
      );
    } else {
      setProducts((previous) => [
        {
          ...productData,
          _id: Date.now().toString(),
          ratings: 0,
          numReviews: 0,
        },
        ...previous,
      ]);
    }

    setShowForm(false);
    setEditingProduct(null);
  };

  const openEditForm = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  // Toggle product visibility
  const toggleActive = (id) => {
    setProducts((previous) =>
      previous.map((product) =>
        product._id === id
          ? { ...product, isActive: !product.isActive }
          : product
      )
    );
  };

  // Toggle featured status
  const toggleFeatured = (id) => {
    setProducts((previous) =>
      previous.map((product) =>
        product._id === id
          ? { ...product, isFeatured: !product.isFeatured }
          : product
      )
    );
  };

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-black tracking-tight md:text-3xl">
            Product Management
          </h1>

          <p className="mt-1 text-sm font-medium text-gray-500">
            Manage your store inventory and product listings.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
          className="flex items-center justify-center gap-2 rounded-lg border-2 border-black bg-[#FFD400] px-4 py-3 text-sm font-black shadow-[3px_3px_0px_#121212] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <Plus size={18} />
          Add Product
        </button>
      </section>

      {/* STAT CARDS */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <ProductStat
          title="Total Products"
          value={totalProducts}
          icon={Package}
          color="bg-yellow-300"
        />

        <ProductStat
          title="Active Products"
          value={activeProducts}
          icon={CheckCircle}
          color="bg-green-300"
        />

        <ProductStat
          title="Low Stock"
          value={lowStockProducts}
          icon={AlertTriangle}
          color="bg-orange-300"
        />

        <ProductStat
          title="Out of Stock"
          value={outOfStockProducts}
          icon={Boxes}
          color="bg-red-300"
        />
      </section>

      {/* PRODUCTS TABLE */}
      <section className="overflow-hidden rounded-xl border-[2.5px] border-black bg-white shadow-[4px_4px_0px_#121212]">

        {/* TABLE HEADER */}
        <div className="border-b-2 border-black p-5">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

            <div>
              <h2 className="text-lg font-black uppercase">
                All Products
              </h2>

              <p className="text-xs text-gray-500">
                View, edit and manage your product catalogue.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              {/* SEARCH */}
              <div className="flex items-center gap-2 rounded-lg border-2 border-black bg-[#FCF9F0] px-3 py-2">
                <Search size={17} />

                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-xs font-medium outline-none sm:w-44"
                />
              </div>

              {/* CATEGORY FILTER */}
              <div className="relative">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full appearance-none rounded-lg border-2 border-black bg-white py-2 pl-3 pr-9 text-xs font-bold outline-none sm:w-40"
                >
                  <option value="All">All Categories</option>

                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
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
                  <option value="Inactive">Inactive</option>
                  <option value="Featured">Featured</option>
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
          <table className="w-full min-w-[950px]">

            <thead className="bg-[#FFF7D9]">
              <tr className="border-b-2 border-black text-left">
                {[
                  "Product",
                  "Category / Brand",
                  "Price",
                  "Stock",
                  "Rating",
                  "Featured",
                  "Status",
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
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr
                    key={product._id}
                    className="border-b border-gray-200 transition-colors hover:bg-yellow-50"
                  >

                    {/* PRODUCT */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <ProductImage product={product} />

                        <div>
                          <p className="text-xs font-black">
                            {product.productName}
                          </p>

                          <p className="text-[10px] text-gray-500">
                            ID: {product._id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CATEGORY / BRAND */}
                    <td className="px-4 py-4">
                      <p className="text-xs font-bold">
                        {product.category}
                      </p>

                      <p className="mt-1 text-[10px] text-gray-500">
                        {product.brand}
                      </p>
                    </td>

                    {/* PRICE */}
                    <td className="px-4 py-4">
                      {product.discountPrice != null ? (
                        <>
                          <p className="text-xs font-black">
                            ₹{product.discountPrice.toLocaleString("en-IN")}
                          </p>

                          <p className="text-[10px] text-gray-400 line-through">
                            ₹{product.price.toLocaleString("en-IN")}
                          </p>
                        </>
                      ) : (
                        <p className="text-xs font-black">
                          ₹{product.price.toLocaleString("en-IN")}
                        </p>
                      )}
                    </td>

                    {/* STOCK */}
                    <td className="px-4 py-4">
                      <span
                        className={`rounded border border-black px-2 py-1 text-[10px] font-black ${
                          product.stock === 0
                            ? "bg-red-300"
                            : product.stock <= 5
                              ? "bg-orange-200"
                              : "bg-green-200"
                        }`}
                      >
                        {product.stock} 
                      </span>
                    </td>

                    {/* RATING */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1 text-xs font-black">
                        <Star size={13} fill="#FFD400" />
                        {product.ratings.toFixed(1)}
                      </div>

                      <p className="mt-1 text-[10px] text-gray-500">
                        {product.numReviews} reviews
                      </p>
                    </td>

                    {/* FEATURED */}
                    <td className="px-4 py-4">
                      <button
                        onClick={() => toggleFeatured(product._id)}
                        className={`rounded border-2 border-black px-2 py-1 text-[9px] font-black uppercase ${
                          product.isFeatured
                            ? "bg-yellow-300"
                            : "bg-gray-100"
                        }`}
                      >
                        {product.isFeatured ? "Featured" : "No"}
                      </button>
                    </td>

                    {/* STATUS */}
                    <td className="px-4 py-4">
                      <StatusBadge active={product.isActive} />
                    </td>

                    {/* ACTIONS */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">

                        <button
                          onClick={() => setSelectedProduct(product)}
                          title="View product"
                          className="rounded border-2 border-black bg-blue-200 p-2 hover:bg-blue-300"
                        >
                          <Eye size={15} />
                        </button>

                        <button
                          onClick={() => openEditForm(product)}
                          title="Edit product"
                          className="rounded border-2 border-black bg-yellow-300 p-2 hover:bg-yellow-400"
                        >
                          <Pencil size={15} />
                        </button>

                        <button
                          onClick={() => toggleActive(product._id)}
                          title={product.isActive ? "Deactivate" : "Activate"}
                          className={`rounded border-2 border-black p-2 ${
                            product.isActive
                              ? "bg-red-200 hover:bg-red-300"
                              : "bg-green-200 hover:bg-green-300"
                          }`}
                        >
                          {product.isActive ? (
                            <Ban size={15} />
                          ) : (
                            <CheckCircle size={15} />
                          )}
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="px-4 py-12 text-center text-sm font-bold text-gray-500"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col justify-between gap-2 border-t-2 border-black bg-[#FFF7D9] px-5 py-4 sm:flex-row sm:items-center">
          <p className="text-xs font-bold text-gray-600">
            Showing {filteredProducts.length} of {totalProducts} products
          </p>
        </div>

      </section>

      {/* ADD / EDIT MODAL */}
      {showForm && (
        <ProductFormModal
          product={editingProduct}
          onClose={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
          onSave={saveProduct}
        />
      )}

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}

// STAT CARD
function ProductStat({ title, value, icon: Icon, color }) {
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

// PRODUCT IMAGE
function ProductImage({ product }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-yellow-100">
      {product.images?.[0] ? (
        <img
          src={product.images[0]}
          alt={product.productName}
          className="h-full w-full object-cover"
        />
      ) : (
        <Package size={22} />
      )}
    </div>
  );
}

// STATUS BADGE
function StatusBadge({ active }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded border border-black px-2 py-1 text-[9px] font-black uppercase ${
        active ? "bg-green-200" : "bg-red-200"
      }`}
    >
      {active ? <CheckCircle size={11} /> : <Ban size={11} />}
      {active ? "Active" : "Inactive"}
    </span>
  );
}

// ADD / EDIT PRODUCT MODAL
function ProductFormModal({ product, onClose, onSave }) {
  const [form, setForm] = useState(() => ({
    ...emptyProduct,
    ...(product || {}),
    discountPrice: product?.discountPrice ?? "",
    images: product?.images?.join(", ") || "",
    sizes: product?.sizes?.join(", ") || "",
    colors: product?.colors?.join(", ") || "",
  }));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      productName: form.productName.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      discountPrice:
        form.discountPrice === "" ? null : Number(form.discountPrice),
      category: form.category.trim(),
      brand: form.brand.trim(),
      images: form.images
        .split(",")
        .map((image) => image.trim())
        .filter(Boolean),
      stock: Number(form.stock),
      sizes: form.sizes
        .split(",")
        .map((size) => size.trim())
        .filter(Boolean),
      colors: form.colors
        .split(",")
        .map((color) => color.trim())
        .filter(Boolean),
      isFeatured: form.isFeatured,
      isActive: form.isActive,
    };

    if (
      !productData.productName ||
      !productData.description ||
      !productData.category ||
      !productData.brand ||
      productData.images.length === 0 ||
      form.price === "" ||
      form.stock === "" ||
      productData.price < 0 ||
      productData.stock < 0 ||
      (productData.discountPrice !== null &&
        productData.discountPrice < 0)
    ) {
      alert("Please fill in all required fields with valid values.");
      return;
    }

    onSave(productData);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="my-auto w-full max-w-2xl rounded-xl border-[3px] border-black bg-[#FCF9F0] p-5 shadow-[6px_6px_0px_#121212] sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black uppercase">
              {product ? "Edit Product" : "Add New Product"}
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Enter the product information below.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded border-2 border-black bg-white p-2"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              label="Product Name *"
              name="productName"
              value={form.productName}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />

            <FormField
              label="Brand *"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              placeholder="Enter brand"
              required
            />

            <FormField
              label="Category *"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Enter category"
              required
            />

            <FormField
              label="Price (₹) *"
              name="price"
              type="number"
              min="0"
              value={form.price}
              onChange={handleChange}
              placeholder="0"
              required
            />

            <FormField
              label="Discount Price (₹)"
              name="discountPrice"
              type="number"
              min="0"
              value={form.discountPrice}
              onChange={handleChange}
              placeholder="Optional"
            />

            <FormField
              label="Stock *"
              name="stock"
              type="number"
              min="0"
              value={form.stock}
              onChange={handleChange}
              placeholder="0"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-black uppercase">
              Description *
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the product..."
              required
              rows={3}
              className="w-full rounded-lg border-2 border-black bg-white p-3 text-sm outline-none focus:bg-yellow-50"
            />
          </div>

          <FormField
            label="Image URLs * (comma separated)"
            name="images"
            value={form.images}
            onChange={handleChange}
            placeholder="https://image1.jpg, https://image2.jpg"
            required
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              label="Sizes (comma separated)"
              name="sizes"
              value={form.sizes}
              onChange={handleChange}
              placeholder="S, M, L, XL"
            />

            <FormField
              label="Colors (comma separated)"
              name="colors"
              value={form.colors}
              onChange={handleChange}
              placeholder="Black, White, Blue"
            />
          </div>

          <div className="flex flex-wrap gap-5 rounded-lg border-2 border-black bg-white p-4">
            <label className="flex items-center gap-2 text-xs font-bold">
              <input
                type="checkbox"
                name="isFeatured"
                checked={form.isFeatured}
                onChange={handleChange}
                className="h-4 w-4 accent-yellow-400"
              />
              Featured Product
            </label>

            <label className="flex items-center gap-2 text-xs font-bold">
              <input
                type="checkbox"
                name="isActive"
                checked={form.isActive}
                onChange={handleChange}
                className="h-4 w-4 accent-yellow-400"
              />
              Active Product
            </label>
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border-2 border-black bg-white px-5 py-3 text-xs font-black"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg border-2 border-black bg-[#FFD400] px-5 py-3 text-xs font-black shadow-[3px_3px_0px_#121212]"
            >
              {product ? "Save Changes" : "Add Product"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

// FORM FIELD
function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  min,
  required = false,
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-black uppercase">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        required={required}
        className="w-full rounded-lg border-2 border-black bg-white px-3 py-2.5 text-sm outline-none focus:bg-yellow-50"
      />
    </div>
  );
}

// PRODUCT DETAILS MODAL
function ProductDetailsModal({ product, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="my-auto w-full max-w-lg rounded-xl border-[3px] border-black bg-[#FCF9F0] p-6 shadow-[6px_6px_0px_#121212]"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black uppercase">
            Product Details
          </h2>

          <button
            onClick={onClose}
            className="rounded border-2 border-black bg-white p-2"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <ProductImage product={product} />

          <div>
            <h3 className="text-lg font-black">
              {product.productName}
            </h3>

            <p className="text-xs text-gray-500">
              {product.brand} · {product.category}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-gray-600">
          {product.description}
        </p>

        <div className="mt-5 space-y-3 rounded-lg border-2 border-black bg-white p-4">
          <DetailRow
            label="Price"
            value={`₹${product.price.toLocaleString("en-IN")}`}
          />

          <DetailRow
            label="Discount Price"
            value={
              product.discountPrice != null
                ? `₹${product.discountPrice.toLocaleString("en-IN")}`
                : "No discount"
            }
          />

          <DetailRow label="Stock" value={`${product.stock} units`} />

          <DetailRow
            label="Rating"
            value={`${product.ratings} / 5 (${product.numReviews} reviews)`}
          />

          <DetailRow
            label="Featured"
            value={product.isFeatured ? "Yes" : "No"}
          />

          <DetailRow
            label="Status"
            value={product.isActive ? "Active" : "Inactive"}
          />

          <DetailRow
            label="Sizes"
            value={product.sizes?.join(", ") || "Not applicable"}
          />

          <DetailRow
            label="Colors"
            value={product.colors?.join(", ") || "Not specified"}
          />
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
      <span className="text-right font-black">{value}</span>
    </div>
  );
}

export default ProductsMgmnt;
