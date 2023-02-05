import React,{useState} from 'react'
import axios from 'axios'
const Events = () => {
const [eventList,setEventList]=useState(null)
const token = localStorage.getItem("token");
// console.log(token);
const fetchEvents=async()=>{
axios('http://localhost:5000/event/getEvents',{
  headers:{
    Authorization:token}
  }).then((res)=>{
    console.log(res.data)
    setEventList(res.data)

  }).catch((err)=>console.log(err))
      
}
  return (
    <div className='mr-5 ml-5 mt-10'>
        <p class="text-4xl font-black text-white  mb-5">Events</p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Event
              </th>
             
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
            Duration
              </th>
              <th scope="col" class="px-6 py-3">
        venue
              </th>
              <th scope="col" class="px-6 py-3">
           VolunteerRequired
              </th>
              <th scope="col" class="px-6 py-3">
           description
              </th>
            </tr>
          </thead>
          <tbody>
            {eventList?eventList.map((event,idx)=>
              
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {event.name}
              </th>
              <td class="px-6 py-4">
                {event.date}
              </td>
              <td class="px-6 py-4">
                {event.time}
              </td>
              <td class="px-6 py-4">
                {event.venue}
              </td>
              <td class="px-6 py-4">
                {event.volunteersRequired}
              </td>
              <td class="px-6 py-4">
                {event.description}
              </td>
            </tr>
            ):null}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Events