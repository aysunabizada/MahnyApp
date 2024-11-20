import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Main from "./component/main/Main"
import AdminLayout from "./admin/AdminLayout";
import Products from "./admin/Products";
import Category from "./admin/Category";
import Subcategory from "./admin/Subcategory";

function App() {
    return (
        <Routes>
            <Route path="/admin" element={<AdminLayout />} >
                <Route path="products" element={<Products />} />
                <Route path="categories" element={<Category />} />
                <Route path="subcategory" element={<Subcategory />} />
            </Route>

            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Main />} />
            </Route>
        </Routes>
    )
}

export default App
