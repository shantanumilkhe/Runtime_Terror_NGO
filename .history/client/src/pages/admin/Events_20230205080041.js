import React, { useState, useEffect } from "react";
import axios from "axios";
const Events = () => {
  const [eventList, setEventList] = useState(null);
  // const token = localStorage.getItem("token");
  // console.log(token);

  const handleClick = async (id) => {
    console.log(id);
    const token = localStorage.getItem("token");
    await fetch("http://localhost:5000/vol/participate/" + id, {
      method: "POST",
      headers: { Authorization: token },
    })
      .then((res) => {
        if (res.status === 200) console.log("participated");
      })
      .catch((err) => {
        console.log(err);
      });
    //   axios.post('http://localhost:5000/vol/participate/'+id,{headers:{'Authorization':token}}).then((res)=>{
    //     console.log('participated')
    //   }).catch((err)=>{
    // console.log(err)
    //   })
  };
  useEffect(() => {
    async function fetchEvents() {
      const token = localStorage.getItem("token");
      await axios("http://localhost:5000/event/getallevents", {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          console.log(res.data);
          setEventList(res.data);
        })
        .catch((err) => console.log(err));
    }
    fetchEvents();
  }, []);
  return (
    <div className="mr-5 ml-5 mt-10">
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
                Volunteer Required
              </th>
              <th scope="col" class="px-6 py-3">
                description
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {eventList
              ? eventList.map((event, idx) => (
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {event.name}
                    </th>
                    <td class="px-6 py-4">{event.expireAt}</td>
                    <td class="px-6 py-4">{event.timeRequired}</td>
                    <td class="px-6 py-4">{event.venue}</td>
                    <td class="px-6 py-4">
                      {event.volunteersRequired -
                        event.volunteersAssigned.length}
                    </td>
                    <td class="px-6 py-4">{event.description}</td>
                    <td class="px-6 py-4">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          handleClick(event._id);
                        }}
                      >
                        Participate
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
