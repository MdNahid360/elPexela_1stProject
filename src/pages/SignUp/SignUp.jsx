import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="lg:max-w-screen-xl lg:w-auto w-[90%] m-auto py-12">
      <div className="bg-white text-gray-500 h-[620px] shadow-xl md:p-14 p-8 md:w-[700px] w-full rounded-2xl shadow-[#bdbdbd76] mx-auto md:mt-[10%] mt-[28%]">
        <h2 className="text-3xl text-black font-semibold mb-4">
          Registration Form
        </h2>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your name"
              className="bg-gray-100 w-full text-black border mt-2 border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none py-2 px-3"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="name" className="block text-sm font-medium">
              Photo
            </label>

            <input
              type="file"
              accept="image/*"
              className="bg-gray-100 w-full text-black border mt-2 border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none py-0 px-3"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type your email"
              className="bg-gray-100 w-full text-black border mt-2 border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none py-2 px-3"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="bg-gray-100 w-full text-black border mt-2 border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none py-2 px-3"
            />
          </div>
          <div className="flex justify-end gap-2 items-center text-gray-500 mt-4">
            already create an account
            <Link to="/login" className="text-sm  text-[#5252ff]">
              Login
            </Link>
          </div>
          <div className="text-center mt-8 pb-8">
            <button
              type="submit"
              className="bg-blue-500 float-right text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
};

export default SignUp;
