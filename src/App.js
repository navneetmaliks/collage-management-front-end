import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/pagecomponent/Home";
import Courses from "./components/pagecomponent/Courses";
import AddCourses from "./components/pagecomponent/AddCourses";
import Students from "./components/pagecomponent/Students";
import AddStudents from "./components/pagecomponent/AddStudents";
import CollectFee from "./components/pagecomponent/CollectFee";
import PaymentHistory from "./components/pagecomponent/PaymentHistory";
import CourseDetail from "./components/CourseDetail";
import EditCourse from "./components/EditCourse";
import StudentDetails from "./components/StudentDetails";

function App() {
  const myRouter=createBrowserRouter([
    {path:'',Component:Login},
    {path:'login',Component:Login},
    {path:'signup',Component:Signup},
    {path:'dashboard',Component:Dashboard,children:[
      {path:'',Component:Home},
      {path:'home',Component:Home},
      {path:'courses',Component:Courses},
      {path:'add-courses',Component:AddCourses},
      {path:'all-students',Component:Students},
      {path:'add-student',Component:AddStudents},
      {path:'collect-fee',Component:CollectFee},
      {path:'payment-history',Component:PaymentHistory},
      {path:'course-detail/:id',Component:CourseDetail},
      {path:'course-edit/:id',Component:EditCourse},
      {path:'student-details/:id',Component:StudentDetails},
    ]},

  ])
  return (
    <>
      <RouterProvider router={myRouter}></RouterProvider>
      <ToastContainer />
      
    </>
  );
}

export default App;
