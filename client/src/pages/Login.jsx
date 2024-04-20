import { useState, useContext } from "react";
import Headers from "../Components/header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from '../Context/UserContext'; // import UserContext from UserContext.jsx

const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext); // use setUser from UserContext
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log( JSON.stringify(formdata));
    try {
      if (Object.values(formdata).some((value) => value === "")) {
        toast.error("Please fill in all fields");
        return;
      }

      fetch(`${import.meta.env.VITE_API}user/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message === "User logged in successfully") {
            // setUser(data.token);
            setUser({user_id: data.userId, token: data.token });

            toast.success("User logged in successfully");
            console.log(UserContext);
            navigate("/MylearningDashboard");
          } else if (data.message === "Invalid email or password") {
            toast.error("Invalid credentials");
          }

        });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="  bg-gradient-to-r from-[#171137] via-[#001426] via-[#041329] to-[#171137] w-full min-h-screen  ">
        <Headers />
        <div className="  w-2/3 m-auto text-center text-white py-20 ">
          <h1 className="text-4xl font-bold  pb-5 mb-6 text-center underline  underline-offset-8 decoration-[#2B0B84]">
            LOGIN
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
              />
            </div>
            <div>
              <input
                type="Password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#352683] text-1xl rounded-3xl text-white px-8 py-2 rounded-md font-semibold"
            >
              Login
            </button>
          </form>
        </div>
     
      </div>
    </>
  );
};

export default Login;
