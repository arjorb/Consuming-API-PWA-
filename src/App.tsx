
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import NotFound from "./routes/NotFound";
import Recommended from "./routes/Recommended";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/recommended",
    element: <Recommended/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
