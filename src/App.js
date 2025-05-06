import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

// Alternative (old) way of defining routes
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//     <Route path="/products" element={<ProductsPage/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [ // => element acts as wrapper
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetails /> },
    ],
  },
  // {
  //   path: "admin"
  //   children: [...]
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
