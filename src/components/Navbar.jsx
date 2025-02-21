import {
  BiSolidBell,
  BiSolidEnvelope,
  BiLogoFacebookCircle,
} from "react-icons/bi";

function Navbar() {
  return (
    <div className=" h-[50vh] w-[50vw] p-4">
      <div className="flex justify-around">
        <span>lamadev</span>
        <div className="flex  gap-4 text-3xl text-white">
          <div className="relative ">
            <span>
              <BiSolidBell />
            </span>
            <span className=" flex text-sm text-white absolute top-[-5px] right-[-10px] bg-red-500 rounded-full w-5 h-5 items-center justify-center ">
              2
            </span>
          </div>

          <div className="relative">
            <span>
              <BiSolidEnvelope />
            </span>
            <span className=" flex text-sm text-white absolute top-[-5px] right-[-10px] bg-red-500 rounded-full w-5 h-5 items-center justify-center ">
              2
            </span>
          </div>
          <div className="relative ">
            <span>
              <BiLogoFacebookCircle />
            </span>
            <span className=" flex text-sm text-white absolute top-[-5px] right-[-10px] bg-red-500 rounded-full w-5 h-5 items-center justify-center ">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
