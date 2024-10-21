import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Students = () => {
  const navigate=useNavigate();
  const [studentList,setStudentList]=useState([])
  useEffect(()=>{
    getAllStudent()
  },[])
  const getAllStudent=(e)=>{
   
    axios.get('http://localhost:4000/api/v1/student',{
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      }
    })
    .then(result=>{
      console.log(result);
      setStudentList(result.data.data.students)

    })
    .catch(err=>{
      toast.error('No Student Found')
    })

  }
  return (
    <div className='studentlist-container'>
      { studentList && studentList.length>0 &&
      <table>
        <thead>
          <tr>
            <th>Student Pic</th>
            <th>Student Name</th>
            <th>phoneno</th>
            <th>email</th>
            <th>address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            studentList.map(student=>(
              <tr className='student-row'>
            <td>{student.imageurl && <img src={student.imageurl} alt='student pic' className='image-thumbnail-student' />}</td>
            <td>{student.fullname}</td>
            <td>{student.phoneno}</td>
            <td>{student.email}</td>
            <td>{student.address}</td>
            <td><button className='btn-success' onClick={()=>{navigate('/dashboard/student-details/'+student._id)}}>Detail</button></td>
          </tr>
            ))

          }
          
        </tbody>
      </table>
}

      
    </div>
  )
}

export default Students