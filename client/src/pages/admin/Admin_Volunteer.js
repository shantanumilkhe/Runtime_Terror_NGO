import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin_Volunteer = () => {
  const [volunteer, setVolunteer] = useState(null);
  useEffect(() => {
    async function getDetails() {
      await axios
        .get("http://localhost:5000/admin/getallvolunteer")
        .then((res) => {
          console.log(res);
          setVolunteer(res.data);
        })
        .catch((err) => console.log(err));
    }
    getDetails();
  }, []);
  return (
    <div>
<<<<<<< HEAD
      <p class="text-4xl font-black text-gray-900 dark:text-white">
        Volunteers
      </p>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
=======
      {volunteer?<div><p class="text-4xl font-black text-gray-900 dark:text-white">Volunteers</p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
>>>>>>> 26c039d586938e105573e1cc9c6942250e3a7cfa
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Volunteer name
              </th>
              <th scope="col" class="px-6 py-3">
                Volunteer Institute
              </th>
              <th scope="col" class="px-6 py-3">
<<<<<<< HEAD
                Volunteer Students
              </th>
            </tr>
          </thead>
          <tbody>
            {volunteer
              ? volunteer.map((insti, idx) => (
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {insti.name}
                    </th>
                    <td class="px-6 py-4">{insti.institute}</td>
                    {/* <td class="px-6 py-4">{insti.assignedInstitute.length}</td> */}
                    {console.log(insti)}
                    <td class="px-6 py-4">Hi</td>
                  </tr>
                ))
              : null}
=======
                Work Hours
              </th>
    
            </tr>
          </thead>
          <tbody>
            {volunteer?volunteer.map((insti,idx)=>
              
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {insti.name}
              </th>
              <td class="px-6 py-4">
                {insti.institute}
              </td>
              {/* <td class="px-6 py-4">
              {insti.assignedStudents.length}
              </td> */}
              <td class="px-6 py-4">
              {insti.hours}
              </td>
            </tr>
            ):null}

>>>>>>> 26c039d586938e105573e1cc9c6942250e3a7cfa
          </tbody>
        </table>
      </div></div>:null}
        
    </div>
  );
};

export default Admin_Volunteer;
