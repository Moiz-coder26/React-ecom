import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Products from "./Pages/Products.jsx";
import Product from "./Pages/Product.jsx";
import Signin from "./Pages/Signin.jsx";
import CateRes from './Pages/CateRes.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home/>} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<Product />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<Signin />} />
      <Route path="categories" element={<CateRes />} />
      <Route path="categories/:category" element={<CateRes />} />

    </Route>
  )
)

function App() {

  return <RouterProvider router={router} />;
}

export default App
