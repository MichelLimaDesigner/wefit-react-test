import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../common/components/template/Template";
const Home = lazy(() => import('../features/home/pages/Home'));

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<p>carregando...</p>}>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Template />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter