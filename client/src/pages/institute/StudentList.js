import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
const StudentList = () => {
    const token=localStorage.getItem('token')
    console.log(token)
    const {id}=useParams();
    const [studentList,setStudentList]=useState(null);
    const fetchStudentList=async()=>{
        
        axios.get('http://localhost:5000/insti/getstudentsassigned/'+id).then((res)=>{
            console.log(res.data)
            setStudentList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div >
        <p class="text-4xl font-black text-gray-900 dark:text-gray-900">Students</p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Student UID 
              </th>
              <th scope="col" class="px-6 py-3">
               Student Name
              </th>
              <th scope="col" class="px-6 py-3">
                Student Course
              </th>
              <th scope="col" class="px-6 py-3">
              Grade
              </th>
              <th scope="col" class="px-6 py-3">
              Class
              </th>
              <th scope="col" class="px-6 py-3">
              Phone numebr
              </th>
            </tr>
          </thead>
          <tbody>
            {studentList?studentList.map((student,idx)=>
              
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {student.uid}
              </th>
              <td class="px-6 py-4">
                {student.name}
              </td>
              <td class="px-6 py-4">
              {student.course}
              </td>
              <td class="px-6 py-4">
              {student.boardGrade}
              </td>
              <td class="px-6 py-4">
              {student.currentClass}
              </td>
              <td class="px-6 py-4">
              {student.phone}
              </td>
            </tr>
            ):null}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentList