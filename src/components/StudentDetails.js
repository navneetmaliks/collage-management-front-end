import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const StudentDetails = () => {
    const params=useParams()
    const [studentDetails,setStudentDetails]=useState({});
    useEffect(()=>{
        getStudentDetails();
    },[])
    const getStudentDetails=()=>{
        axios.get('http://localhost:4000/api/v1/student/'+params.id,{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token')
            }
        })
        .then(result=>{
            const studentsData=result.data.data.student[0];
            setStudentDetails(studentsData)
            console.log(studentsData);

        })
        .catch(err=>{
            toast.error(err.message)
            console.log(err);
        })
    }
  return (
    <div className='studentdetail-wraper'>
        <div className='studentimage-box'>
            <img className='studentdetail-img' src={studentDetails.imageurl} alt='student pic'/>

        </div>
        <div className='studentdetail-area'>
            <h1 className='course-title'>{studentDetails.fullname}</h1>
            <p className='course-price'>{studentDetails.phoneno}</p>
            <p className='course-price'>{studentDetails.email}</p>
            <p className='course-price'>{studentDetails.address}</p>

        </div>
        <div className='action-btn'>
            <button className='edit-btn'>Edit</button>
            <button className='delete-btn'>Delete</button>

        </div>
        
    </div>
  )
}

export default StudentDetails