import {
 Route,
 createBrowserRouter,
 createRoutesFromElements,
} from "react-router-dom";
import MasterPrice from "../pages/MasterPrice";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/404";

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
   <Route path='' element={<MasterPrice />} />
   <Route path='*' element={<ErrorPage />} />
  </Route>,
 ),
);

export default router;
