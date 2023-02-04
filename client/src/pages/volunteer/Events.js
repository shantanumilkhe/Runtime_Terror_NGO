import React,{useState} from 'react'
const Events = () => {
const [eventList,setEventList]=useState(null)
  return (
    <div className='mr-5 ml-5 mt-10'>
        <p class="text-4xl font-black text-white  mb-5">Events</p>
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
            {eventList?eventList.map((event,idx)=>
              
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {event.uid}
              </th>
              <td class="px-6 py-4">
                {event.name}
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