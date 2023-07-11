import Index from "./pages/Index";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

const routes = [
    { path : "/" , element : <Index/>},
    { path : "/cart" , element : <Cart/>},
    { path : "/*" , element : <NotFound/>},
];

export default routes