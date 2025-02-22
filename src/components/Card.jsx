import { BiComment, BiHeart, BiInfoCircle, BiShare } from "react-icons/bi";

function Card({ post }) {
  return (
    <div className="flex flex-col mb-5">
      <div className="flex items-center gap-5 ml-2 mt-2 mb-2">
        <img
          src={post.userImg}
          alt=""
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <span className=" capitalize">{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="" />
      <div className="flex items-center relative gap-2 ml-2 mt-2">
        <BiHeart className=" h-5 w-5 cursor-pointer" />
        <BiComment className=" h-5 w-5 cursor-pointer" />
        <BiShare className=" h-5 w-5 cursor-pointer" />
        <BiInfoCircle className=" h-5 w-5 cursor-pointer right-0 absolute" />
      </div>
    </div>
  );
}

export default Card;
