
import { Routes, Route } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Shoplayout from "./layouts/Shoplayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import CreateProduct from "./pages/CreateProduct";

//

import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import AdminRoute from "./components/AdminRoute";

// NEW AUTH PAGES
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Orders from "./pages/Order";

// PROTECTED ROUTE
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* MAIN LAYOUT → Navbar + Footer */}
      <Route element={<Mainlayout />}>

        {/* PAGES WITH SIDEBAR */}
        <Route element={<Shoplayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>

        {/* PUBLIC PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />



        {/* admin */}

        <Route
          path="/freshco-admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/freshco-admin/add-product"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />

        <Route
          path="/freshco-admin/edit-product/:id"
          element={
            <AdminRoute>
              <EditProduct />
            </AdminRoute>
          }
        />




        {/* AUTH PAGES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-product" element={<CreateProduct />} />

        {/* PROTECTED PAGES */}

        {/* Checkout → Only logged in users */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* Orders Page → Like Task Manager Dashboard */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

      </Route>

    </Routes>
  );
}

export default App;
