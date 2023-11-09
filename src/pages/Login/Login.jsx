import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" lg:max-w-screen-xl lg:w-auto w-[90%] m-auto h-[100vh] py-12 ">
      <div
        className="md:w-[500px] w-full m-auto bg-white px-8 pt-14 pb-20 rounded-xl mt-20 shadow-2xl shadow-[#bdbdbd76]
      "
      >
        <h2 className="text-3xl text-black font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#13132f] text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type your email"
              className="bg-gray-100 w-full text-black border mt-2 border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-black font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Type your password"
              className="bg-gray-100 w-full text-black border mt-2 border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none py-2 px-3"
              required
            />
          </div>
          <div className="flex justify-center mt-8">
            <span
              className="bg-[white] text-black relative after:absolute md:after:right-[-200px] after:right-[-110px] after:h-[1px] after:top-2 after:bg-black md:after:w-[200px] after:w-[100px]
            
            before:absolute before:h-[1px] before:top-2 md:before:left-[-204px] before:left-[-110px]  before:bg-black md:before:w-[200px] before:w-[100px] m-auto flex items-center md:w-[20px] h-[20px] z-50"
            >
              or
            </span>
          </div>
          <div className="mb-4 pt-3">
            <button
              type="button"
              className="w-full bg-[#24232b] text-white py-2 px-4 rounded-md flex gap-2 items-center justify-center"
            >
              <FcGoogle className="text-xl" /> continue with google
            </button>
          </div>
          <div className="flex justify-end">
            <Link to="/signUp" className="text-sm  text-[#4949f8]">
              CREATE ACCOUNT
            </Link>
          </div>
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-500 text-white float-right py-2 px-8 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
