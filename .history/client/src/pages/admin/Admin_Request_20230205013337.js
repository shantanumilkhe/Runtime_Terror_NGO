import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Admin_Request = () => {
  const [institute,setInstitute] = useState(null);
  useEffect(() => {
    async function getDetails(){
      await axios.get('http://localhost:5000/admin/getallinstitutes').then(res=>{setInstitute(res.data)}).catch(err=>console.log(err));
    }
    getDetails();
  }, [])
  

  return (
    <div>
        <p class="text-4xl font-black text-gray-900 dark:text-white">Institutes & Courses</p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Institute Name
              </th>
              <th scope="col" class="px-6 py-3">
                Institute Location
              </th>
              <th scope="col" class="px-6 py-3">
                Institute Course
              </th>
              <th scope="col" class="px-6 py-3">
                Available Seats
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {institute?institute.map((insti,idx)=>
              
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {insti.name}
              </th>
              <td class="px-6 py-4">
                {insti.location}
              </td>
              <td class="px-6 py-4">
              {insti.location}
              </td>
              <td class="px-6 py-4">
              {insti.location}
              </td>
              <td class="px-6 py-4">
              {insti.location}
              </td>
            </tr>
            ):null}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin_Request