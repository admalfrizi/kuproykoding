import { Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Project from "../Screens/Project/Project";
import Kategori from "../Screens/Kategori/Kategori";
import Produk from "../Screens/Produk/Produk";
import Contact from "../Screens/Contact/Contact";
import Cart from "../Cart/Cart";

const RoutingScreen = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/categories" element={<Kategori />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    )
}

export default RoutingScreen