// import "./App.css";
import TopHeader from "./Components/TopHeader/TopHeader";
import Header2 from "./Components/header2.js/Header2";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Search from "./Components/Search/Search";
import SingleProduct from "./pages/singleProduct";
import SingleBlogPage from "./Components/SingleBlogPage/SingleBlogPage";
import AppContext from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContext>
          <TopHeader />
          <Header2 />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/search" element={<Search />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route path="/singleBlogPage/:id" element={<SingleBlogPage />} />
          </Routes>
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
