import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./layout/Layout"
import Main from "./component/main/Main"
import AdminLayout from "./admin/AdminLayout";
import Products from "./admin/Products";
import Category from "./admin/Category";
import Subcategory from "./admin/Subcategory";
import Login from "./admin/Login";
import Signup from "./admin/Signup";
import ResetPass from "./admin/ResetPass";
import Music from "./component/main/Music";
import { useEffect } from "react";

function App() {
    const { pathname } = useLocation();
    
    useEffect(()=> {
        window.scroll(0, 0);
    }, [pathname])

    return (
        <Routes>
            <Route path="/admin" element={<AdminLayout />} >
                <Route path="products" element={<Products />} />
                <Route path="categories" element={<Category />} />
                <Route path="subcategory" element={<Subcategory />} />
            </Route>

            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Main />} />
                <Route path="/music" element={<Music />} />
            </Route>
            <Route path="/login"  element={<Login />}/>
            <Route path="/signup"  element={<Signup />}/>
            <Route path="/resetPassword"  element={<ResetPass />}/>
        </Routes>
    )
}

export default App
