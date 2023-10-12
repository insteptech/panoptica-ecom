import Buyplan from "../pages/Buyplan"
import Currentplan from "../pages/Currentplan"
import Pricing from "../pages/Pricing"
import Signup from "../pages/Signup"
import Login from "../pages/login/login"
import Orderdetails from "../pages/orderdetails"


const routes = [
    { path: "/", element:<Pricing/> },
    {path:"signup",element:<Signup/>},
    {path:"login",element:<Login/>},
    {path:"buyplan",element:<Buyplan/>},
    {path:"orderdetails",element:<Orderdetails/>},
    {path:"currentplan",element:<Currentplan/>}
]

export default routes