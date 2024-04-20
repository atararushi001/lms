
import Home from "./pages/Home";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import MylearningDashboard from "./pages/MylearningDashboard";
import MylearningCourses from "./pages/MylearningCourses";
import Coursesdetails from "./pages/Coursesdetails";
// import About from "./pages/About";
import Login from "./pages/Login";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherCourses from "./pages/TeacherCourses";
import AddCourse from "./pages/AddCourse";
import { UserProvider } from "./Components/UserProvider";
import FacultyLogin from "./pages/Faculty/FacultyLogin";
import FacultyRegister from "./pages/Faculty/FacultyRegister";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// import { useContext } from "react";
// import { UserContext } from "./Context/UserContext"
function App() {
  
  // const { user } = useContext(UserContext);
  
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
      path: "/Coursesdetails/:courseid", // Add a parameter for courseid
      element: <Coursesdetails />,
    }
    // ,{
    //   path: "/About",
    //   element: <About />,
    // }
    ,{
      path: "/Login",
      element: <Login />,
    }
    ,{
      path: "/TeacherDashboard",
      element: <TeacherDashboard />,
    }
    ,{
      path: "/TeacherCourses",
      element: <TeacherCourses />,
    }
    ,{
      path: "/AddCourse",
      element: <AddCourse />,
    }
    ,{
      path: "/facultyLogin",
      element: <FacultyLogin />,
    }
    ,{
      path: "/facultyRegister",
      element: <FacultyRegister />,
    }
    ,{
      path: "/contact",
      element: <FacultyRegister />,
    }
    ,{
      path: "/logout",
      element: <Logout />,
    }
 
  ])

  function Logout() {

    return (
      <div>
        <h1>Logout</h1>
        {/* Add your logout UI here */}
      </div>
    );
  }
  return (
    
    <UserProvider>
      <RouterProvider router={router} /> 
    </UserProvider>
  );
 
}

export default App;