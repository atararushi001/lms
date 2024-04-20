import {useState}  from "react";
import Headers from "../../Components/header";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
// import.meta.env.API;

const FacultyRegister = () => {
  // console.log(import.meta.env.VITE_API);
  const navigate = useNavigate();
const [formdata , setFormdata] = useState({
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  confirmpassword: ""
});
 const handleSubmit =(e)=> {
    e.preventDefault();


try {
  if (formdata.password !== formdata.confirmpassword) {
    toast.error("Password and Confirm Password should be same");
    return;
  }

  if (Object.values(formdata).some(value => value === "")) {
    toast.error("Please fill in all fields");
    return;
  }

  fetch(`${import.meta.env.VITE_API}Faculty/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "User registered successfully") {
        toast.success("User registered successfully");
        navigate("/Login");
      } else if (data.message === "Email already exists") {
        toast.error("Email already exists");
      } 
    });

} catch (error) {
  toast.error("Something went wrong");
}
  }
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }
  return (
    <>
        <div className=  "  bg-gradient-to-r from-[#171137] via-[#001426] via-[#041329] to-[#171137] w-full min-h-screen  ">
            <Headers />
            <div className="  w-2/3 m-auto text-center text-white py-20 ">
      <h1 className="text-4xl font-bold pb-5 mb-6 text-center underline  underline-offset-8 decoration-[#2B0B84]">Faculty CREATE ACCOUNT</h1>
      <form onSubmit={handleSubmit}>
      <div className=" space-x-7 flex py-5">
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={formdata.firstname}
        onChange={handleChange}
        className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={formdata.lastname}
        onChange={handleChange}
        className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
      />
      </div>
      <div className=" space-x-7 flex py-5">
      <input
        type="email"
        placeholder="@email"
        name="email"
        value={formdata.email}
        onChange={handleChange}
        className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
      />
       <input
        type="text"
        placeholder="Username"
        name="username"
        value={formdata.username}
        onChange={handleChange}
        className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
      />
    
      </div>
      <div className=" space-x-7 flex py-5">
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formdata.password}
        onChange={handleChange}
        className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
      />
       <input
        type="password"
        placeholder="Confirm Password"
        name="confirmpassword"
        value={formdata.confirmpassword}
        onChange={handleChange}
        className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
      />
    
      </div>
      <button type="submit"
        className="bg-[#352683] text-1xl rounded-3xl text-white px-8 py-2 rounded-md font-semibold"
      >
        REGISTER
      </button>
      <p>Already Register then click <a href="/facultyLogin" className=" text-[#352683]">Here</a></p>
      </form>
    </div>
            {/* <div className="text-center text-white py-20 px-5 w-300">
                <h1 className="font-bold text-3xl ">Create Account</h1>
              
                <form action="">
                    <div className="">
                        <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname"  />
                    </div>
                  
                </form>
             
    </div> */}
        </div>
       
    </>
  );
};

export default FacultyRegister;
