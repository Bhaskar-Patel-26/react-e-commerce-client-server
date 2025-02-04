import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../features/auth/authAPI";

const RegisterPage = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [registerUser, { isLoading: loginLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = { username, email, password };
    try {
      await registerUser(data).unwrap();
      alert("User registration successful")
      navigate("/login")
    } catch (error) {
      setMessage('Registration failed')
      console.log(error);
    }
  };
  return (
    <div>
      <section className="h-screen flex items-center justify-center">
        <div className="max-w-sm border shadow bg-white mx-auto p-8">
          <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
          <form
            onSubmit={handleRegister}
            className="space-y-5 max-w-sm mx-auto pt-8"
          >
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username..."
              required
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              required
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            {message && <p className="text-red-500">{message}</p>}
            <button className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md">
              Register
            </button>
          </form>
          <p className="my-5 italic text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login Here
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
