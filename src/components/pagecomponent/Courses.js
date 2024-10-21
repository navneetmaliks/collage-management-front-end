import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate=useNavigate();
  const [courseList,setCourseList]=useState([]);
  useEffect(()=>{
    getAllCourse();
  },[])
  const getAllCourse=()=>{
    axios.get('http://localhost:4000/api/v1/course',{
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
        
      }
    })
    .then(result=>{
      console.log(result.data.data.course);
      setCourseList(result.data.data.course)
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  return (
    <div className='course-wraper'>
      {
        courseList.map((course)=>(
          <div className='course-box' key={course._id} onClick={()=>{navigate('/dashboard/course-detail/'+course._id)}}>
            <img className='course-thumbnail' src={course.imageurl} alt={course.imageid}/>
            <h2 className='course-title'>{course.courseName}</h2>
            <p className='course-price'>Rs. {course.price} Only</p>
            

          </div>
        )
          
        )
      }

    </div>
  )
}

export default Courses