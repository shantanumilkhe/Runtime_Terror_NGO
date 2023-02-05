import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Admin_User = () => {
  const [students,setStudents] = useState(null);
  useEffect(() => {
    async function getdetails(){
      await axios.get('http://localhost:5000/admin/getallstudents').then((res)=>{setStudents(res.data);console.log(res.data)}).catch(err=>console.log(err));
    }
    getdetails();
  }, [])
  
  return (
    <div>
      <p class="text-4xl font-black text-gray-900 dark:text-white">Students</p>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                UID
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
              <th scope="col" class="px-6 py-3">
                Course
              </th>
            </tr>
          </thead>
          <tbody>
            {students?students.map((student)=><tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {student.uid}
              </th>
              <td class="px-6 py-4">
                {student.name}
              </td>
              <td class="px-6 py-4">
              {student.location}
              </td>
              <td class="px-6 py-4">{student.course}</td>
              
            </tr>):null}


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin_User