import React,{useState} from 'react'
import axios from 'axios'
import './dashboard.css'
const Dashboard = () => {
    const [seat,setSeat] = useState(0)
    const [course,setCourse] = useState("")
    const [toggle,setToggle] = useState(false)
    const handleToggle = (e) => {
        e.preventDefault();
        console.log("clicked")
        setToggle(!toggle);
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log(course)
        console.log(seat)
        // get token from local storage
        const token = localStorage.getItem("token");
        console.log(token)
        axios.post(`http://localhost:5000/insti/addnewseats`,{headers:{Authorization:token}},{
            course:course,
            seat:seat
        }).then((res)=>{
            console.log(res.data)
        }
        ).catch((err)=>{
            console.log(err)
        }
        )

    }
  return (
    <div >
       <div className="add-course">
       <button type="button"  onClick={handleToggle} class=" px-7 py-7  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{(toggle===false) ? "Add New Course" : "Cancel"}</button>
      
       </div>

{toggle && 
<div className='w-1/3 mx-auto my-auto'>
<form  style={{margin:"auto",marginTop:"20px"}}>
    
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-black-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-700 dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
onChange={(e)=>{console.log(e.target.value);
    setCourse(e.target.value)
}}>
<option value=""  >Choose Course</option>
<option value="JEE" >JEE</option>
<option value="NEET" >NEET</option>
<option value="UPSC" >UPSC</option>
<option value="MPSC">MPSC</option>
</select>

<div class="relative z-0 w-full mb-6 group">
   <input type="number" name="floating_password" id="floating_password" value={seat} class="block py-2.5 px-0 w-full text-md text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 
   my-5 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
   onChange={
     (e)=>{
         setSeat(e.target.value)
     }
   }
   />
   <label for="floating_password" class="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No. of Seat</label>
</div>
<button  onClick={handleClick} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> 
</div>

}


    </div>
    
  )
}

export default Dashboard