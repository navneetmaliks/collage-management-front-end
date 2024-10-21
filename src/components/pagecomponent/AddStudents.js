import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddStudents = () => {
  const navigate=useNavigate();

  const [fullname,setFullname]=useState('');
  const [phoneno,setPhoneno]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const [courseID,setCourseID]=useState('');
 
  const [image,setImage]=useState(null);
  const [imageUrl,setImageUrl]=useState('');
  const [courseList,setCourseList]=useState([]);

  useEffect(()=>{
    getCourse();
  },[])
  const getCourse=()=>{
    axios.get('http://localhost:4000/api/v1/course',{
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      }
    })
    .then(result=>{
      setCourseList(result.data.data.course)
    })
    .catch(err=>{
      console.log(err);

    })
  }

  const fileHandler=(e)=>{
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]))

  }
  const formSubmitHandler=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('fullname',fullname);
    formData.append('phoneno',phoneno);
    formData.append('email',email);
    formData.append('address',address);
    formData.append('courseID',courseID);
    formData.append('image',image);
    axios.post('http://localhost:4000/api/v1/student',formData,{
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      }
    })
    .then(result=>{
      console.log(result.data);
      toast.success('Student Added Successfully')
      navigate('/dashboard/add-student')

    })
    .catch(error=>{
      toast.error(error.response.data.message);
      console.log(error);

    })
  }
  return (
    <div>
      <form method='post' className='form' onSubmit={formSubmitHandler}>
        <h1>Add New Students</h1>
        <input type='text' onChange={e=>{setFullname(e.target.value)}} name='fullname' placeholder='Enter Student Full Name' />
        <input type='text' onChange={e=>{setPhoneno(e.target.value)}} name='phoneno' placeholder='Enter Student Phone Number' />
        <input type='text' onChange={e=>{setEmail(e.target.value)}} name='email' placeholder='Enter Student Email' />
        <input type='text' onChange={e=>{setAddress(e.target.value)}} name='address' placeholder='Enter Student Full Address' />
        <select name='courseID' onChange={e=>{setCourseID(e.target.value)}}>
          <option>Select Course</option>
          {
            courseList.map(course=>(
              <option value={course._id}>{course.courseName}</option>
            ))
          }

        </select>
        <input type='file' onChange={fileHandler} name='image' placeholder='Choose Student Pic'/>
        { imageUrl && <img src={imageUrl} className='your-logo' alt='your course logo'/>}
        <button type='submit' className='submit-btn'>Submit</button>

      </form>
    </div>
  )
}

export default AddStudents