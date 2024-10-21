import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCourses = () => {
  const navigate=useNavigate();
  const [courseName,setCourseName]=useState('');
  const [description,setDescription]=useState('');
  const [price,setPrice]=useState(0);
  const [startdate,setStartdate]=useState('');
  const [endDate,setEndDate]=useState('');
  const [image,setImage]=useState(null);
  const [imageUrl,setImageUrl]=useState('');

  const fileHandler=(e)=>{
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]))

  }
  const formSubmitHandler=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('courseName',courseName);
    formData.append('description',description);
    formData.append('price',price);
    formData.append('startdate',startdate);
    formData.append('endDate',endDate);
    formData.append('image',image);
    axios.post('http://localhost:4000/api/v1/course',formData,{
      headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      }
    })
    .then(result=>{
      console.log(result.data);
      toast.success('course Added Successfully')
      navigate('/dashboard/courses')

    })
    .catch(error=>{
      toast.error(error.response.data.message);
      console.log(error);

    })
    console.log(courseName,price,description,startdate,endDate,image,imageUrl);
  }
  return (
    <div>
      <form method='post' className='form' onSubmit={formSubmitHandler}>
        <h1>Add New Course</h1>
        <input type='text' onChange={e=>{setCourseName(e.target.value)}} name='courseName' placeholder='Enter Course Name'/>
        <input type='text' onChange={e=>{setDescription(e.target.value)}} name='description' placeholder='Enter Course description Name'/>
        <input type='text' onChange={e=>{setPrice(e.target.value)}} name='price' placeholder='Enter Course Price'/>
        <input type='text' onChange={e=>{setStartdate(e.target.value)}} name='startdate' placeholder='Enter Course Start Date'/>
        <input type='text' onChange={e=>{setEndDate(e.target.value)}} name='endDate' placeholder='Enter Course End Date'/>
        <input type='file' onChange={fileHandler} name='image' placeholder='Enter Course Name'/>
        { imageUrl && <img src={imageUrl} className='your-logo' alt='your course logo'/>}
        <button type='submit' className='submit-btn'>Submit</button>

      </form>
    </div>
  )
}

export default AddCourses