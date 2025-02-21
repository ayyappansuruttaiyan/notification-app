import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(name);
  return (
    <div className="flex w-full min-h-screen  justify-center items-center">
      {user ? (
        <div className="flex flex-col justify-center items-center bg-teal-500 min-h-100vh border-1 border-teal-600">
          <Navbar />
          <Card />
          <span className="absolute top-15 right-15 text-teal-500 capitalize">
            {user}
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-5 text-3xl ">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="border-2 py-3 px-3 border-teal-200 focus-teal-500 rounded-lg"
          />
          <button
            onClick={() => setUser(username)}
            className=" rounded-lg bg-teal-600 cursor-pointer border-2 py-3 px-3 border-none text-white transition-all duration-200 hover:bg-teal-500"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
