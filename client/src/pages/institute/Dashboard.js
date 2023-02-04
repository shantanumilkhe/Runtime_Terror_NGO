import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const navigate=useNavigate()
    const [seat,setSeat] = useState(0)
    const [course,setCourse] = useState("")
    const [number,setNumber] = useState(1)
    const [courselist,setCourseList] = useState(null)
    const handleClick = (e) => {
        e.preventDefault();
        console.log(course)
        console.log(seat)
        // get token from local storage
        const token = localStorage.getItem('token');
        console.log(token)
        axios.post('http://localhost:5000/insti/addnewseats',{
            course:course,
            seat:seat
        },{headers:{'Authorization':token}}).then((res)=>{
            console.log(res.data)
        }
        ).catch((err)=>{
            console.log(err)
        }
        )

    }
   const fetchCourseOffered = () => {
         const token = localStorage.getItem('token');
         axios.get('http://localhost:5000/insti/getcourses',{headers:{'Authorization':token}}).then((res)=>{
                console.log(res.data.courses)
                setCourseList(res.data.courses)
         }).catch((err)=>{
            console.log(err)
         })
   }
   useEffect(()=>{
    fetchCourseOffered();
   },[,number])
  return (
    <div >
          <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      ></button>

      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
          <li>
              <div
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() =>{
                    setCourse("")
                    setSeat(0)
                    setNumber(1)
                } }
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Courses Offered</span>
              </div>
            </li>
            <li>
              <div
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() =>{setNumber(2)} }
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Add Course</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
   
<div className="p-4 sm:ml-64">
{number==2 && 
<div className='w-1/3 mx-auto my-auto '>
<form  style={{margin:"auto",marginTop:"20px"}}>
    
    <label for="courses" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select an option</label>
<select id="courses" class="bg-gray-50 border border-gray-300 text-black-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-700 dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
onChange={(e)=>{console.log(e.target.value);
    setCourse(e.target.value)
}}>
<option value=""  >Courses</option>
<option value="JEE" >JEE</option>
<option value="NEET" >NEET</option>
<option value="UPSC" >UPSC</option>
<option value="MPSC">MPSC</option>
</select>

<div class="relative z-0 w-full mb-6 group">
   <input type="number" name="floating_password" id="floating_password" value={seat} class="block py-2.5 px-0 w-full text-md text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 
   my-5 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " required 
   onChange={
     (e)=>{
         setSeat(e.target.value)
     }
   }
   />
   <label for="floating_password" class="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No. of Seat</label>
</div>
<button  onClick={handleClick} class="text-white bg-gray-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800">Submit</button>
</form> 
</div>

}
{number==1 && 

 <div className="ml-50">
    {/* <StudentList/> */}
    <div >
        <p class="text-4xl font-black text-gray-900 dark:text-gray-900">Courses</p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Course 
              </th>
              <th scope="col" class="px-6 py-3">
               Total Seat
              </th>
              <th scope="col" class="px-6 py-3">
                No. of Assigned Students
              </th>
              <th scope="col" class="px-6 py-3">
              Remaining Seats
              </th>
              <th scope="col" class="px-6 py-3">
                Action
             
              </th>
             
            </tr>
          </thead>
          <tbody>
            {courselist?courselist.map((course,idx)=>
              
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {course.courseProvided}
              </th>
              <td class="px-6 py-4">
                {course.seats}
              </td>
              <td class="px-6 py-4">
              {course.assignedStudents.length}
              </td>
              <td class="px-6 py-4">
              {course.seats-course.assignedStudents.length}
              </td>
              <td class="px-6 py-4">
                {course.assignedStudents.length>0 && 
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>{
                    navigate(`institute/dashboard/${course._id}`)
                }} >Show Students</button>
                }
                {
                    course.assignedStudents.length==0 &&
                    <button type="button" class="py-2.5 cursor-not-allowed px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" disabled>show Students</button>
                }
                 
             
              </td>
            
            </tr>
            ):null}
          </tbody>
        </table>
      </div>
    </div>

</div> 
}

</div>

    </div>
    
  )
}

export default Dashboard