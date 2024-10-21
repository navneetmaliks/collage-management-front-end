import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CourseDetail = () => {
    const params=useParams();
  const [course,setCourse]=useState({});
  const navigate=useNavigate();
  useEffect(()=>{
    getCourseDetail()
  },[]);

  const getCourseDetail=()=>{
    axios.get('http://localhost:4000/api/v1/course/'+params.id,{
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
        
      }
    })
    .then(result=>{
      setCourse(result.data.course.course)
    })
    .catch(err=>{
        toast.error(err.response.message)
      console.log(err);
    })
  }
  return (
    <div>
        {
        course && <div className='course-detail-wraper'>
            <div>
            <img className='image-thumbnail' src={course.imageurl} alt={course.imageid}/>
            </div>
            <div>
            <h1 className='course-title'>{course.courseName}</h1>
            <p className='course-price'>Price :- {course.price}</p>
            <p className='course-price'>Start Date :- {course.startdate}</p>
            <p className='course-price'>End Date :- {course.endDate}</p>
            
            </div>
            <div>
                <h1 className='description-title'>Course Description</h1>
                <p className='course-price'>{course.description}</p>
                </div>
            <div className='action-btn'>
                <button className='edit-btn' onClick={()=>{navigate('/dashboard/course-edit/'+course._id)}}>Edit</button>
                <button className='delete-btn'>Delete</button>
            </div>
            

        </div>
}
    </div>
  )
}

export default CourseDetail