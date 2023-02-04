import React from 'react'

const StudentList = () => {
    const token=localStorage.getItem('token')
    console.log(token)
    const [studentList,setStudentList]=useState([]);
    const fetchStudentList=async()=>{
        const res=await axios.get('http://localhost:5000/insti/studentlist',{headers:{'Authorization':token}})
        console.log(res.data)
        setStudentList(res.data)
    }
  return (
    <div>StudentList</div>
  )
}

export default StudentList