import {
 Route,
 createBrowserRouter,
 createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
   <Route path='*' element={<Error404 />} />
  </Route>,
 ),
);

export default router;
