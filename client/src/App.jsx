
// import {  BrowserRouter as Router } from "react-router-dom";
import CoursesList from "./pages/Courses";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import MylearningDashboard from "./pages/MylearningDashboard";
import MylearningCourses from "./pages/MylearningCourses";
import Coursesdetails from "./pages/Coursesdetails";
import About from "./pages/About";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
 
    {
      path: "/Register",
      element: <Register />,
    },{
      path: "/Courses",
      element: <Courses />,
    }
    ,{
      path: "/MylearningDashboard",
      element: <MylearningDashboard />,
    }
    ,{
      path: "/MylearningCourses",
      element: <MylearningCourses />,
    }
    ,{
      path: "/Coursesdetails",
      element: <Coursesdetails />,
    }
    ,{
      path: "/About",
      element: <About />,
    }
    ,{
      path: "/Login",
      element: <Login />,
    }
  ])
  return (
    <>
    
   <RouterProvider router={router} /> 
    </>
  );
}

export default App;
