import React, { useState } from "react";

const DragnDrop=()=> {
  const [pdf,setPDF] = useState(null);
  const handleFile = async (e) => {
    const file = e.target.files[0];
    let url = URL.createObjectURL(file);
    setPDF(file);
  };
  const handleSubmit = async (e) => {
    let token = localStorage.getItem('token');
        e.preventDefault()
    var FormData = require('form-data');
    var formData = new FormData();

    formData.append("xlsx", pdf);

    await fetch("http://localhost:5000/vol/uploadxlsx", {
      method: 'POST',
      body: formData,
      headers:{Authorization:token}
    })
    .then((res) => console.log('done'))
    .catch((err) => console.log(err.message));

  }
  return (
    <div>
       <h4 className="text-center mt-4 mb-2">Excel sheet should adhere to this format</h4>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
               uid
              </th>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                phone
              </th>
              <th scope="col" class="px-6 py-3">
                location
              </th>
              <th scope="col" class="px-6 py-3">
                currentClass
              </th>
              <th scope="col" class="px-6 py-3">
                boardGrade
              </th>
              <th scope="col" class="px-6 py-3">
               course
              </th>
            </tr>
          </thead>
          <tbody>
         
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                unique number
              </th>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                String
              </td>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             number
              </td>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              String
              </td>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              number
              </td>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              number
              </td>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              String
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="text-center mt-4">Upload the excel sheet here</h1>
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              class="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              XLSX 
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" onChange={(e) => handleFile(e)}/>
        </label>
      </div>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit}>Upload</button> 
    </div>
  );
}

export default DragnDrop;
