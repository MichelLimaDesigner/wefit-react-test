import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../common/components/template/Template";
import Loader from "../common/components/loader/Loader";
const Home = lazy(() => import("../features/home/components/Home"));
const Cart = lazy(() => import("../features/cart/components/Cart"));
const PurchaseMade = lazy(() => import("../features/cart/components/PurchaseMade"));


const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Template />}>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/compra-finalizada" element={<PurchaseMade />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter