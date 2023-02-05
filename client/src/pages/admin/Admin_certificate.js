import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin_certificate = () => {
    const [institute, setInstitute] = useState(null);
    useEffect(() => {
        async function getDetails() {
            await axios
                .get("http://localhost:5000/request/getpendingcertificates")
                .then((res) => {
                    console.log(res.data);
                    setInstitute(res.data);
                })
                .catch((err) => console.log(err));
        }
        getDetails();
    }, []);
    const decline = async (id) => {
        await axios.post('http://localhost:5000/request/declineCertificate/' + id).then(res => window.location.reload()).catch(err => console.log(err));
    }
    const accept = async (id) => {
        await axios.post('http://localhost:5000/certi/generatecertificate/' + id).then(res => window.location.reload()).catch(err => console.log(err));
    }
    return (
        <div>
            <p class="text-4xl font-black text-gray-900 dark:text-white">
                Certificate Requests
            </p>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Volunteer Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Volunteer Institute
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Hours
                            </th>
                            {/* <th scope="col" class="px-6 py-3">
                Available Seats
              </th> */}
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {institute
                            ? institute.map((insti, idx) => (
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {insti.name}
                                    </th>
                                    <td class="px-6 py-4">{insti.institute}</td>
                                    <td class="px-6 py-4">{insti.hours}</td>
                                    <td class="px-6 py-4">
                                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => { accept(insti._id) }}>Accept</button>
                                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            onClick={() => { decline(insti._id) }}>Reject</button>
                                    </td>
                                </tr>
                            ))
                            : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin_certificate