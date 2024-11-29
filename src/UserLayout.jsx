import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/user/Header";
import Home from "./pages/user/Home";
import Products from "./pages/user/Products";
import LogIn from "./pages/user/LogIn";
import SignUp from "./pages/user/SignUp";
import NotFound from "./pages/user/NotFound";
// import BlindingBar from "./components/user/BlindingBar";
import Cart from "./pages/user/Cart";
import Footer from "./components/user/Footer";
import CheckOut from "./pages/user/CheckOut";
import Profile from "./pages/user/Profile";
import { SingleProduct } from "./pages/user/SingleProduct";
import About from "./pages/user/About";
import ContactUs from "./pages/user/ContactUs";
import { useLayoutEffect } from "react";


const UserLayout = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      {/* <BlindingBar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default UserLayout;
