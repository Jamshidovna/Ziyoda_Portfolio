import Image from "next/image";



const Avatar = () => {
  return (
  <div className="  xl:flex xl:max-w-none ">
   <Image src={'/avatar.png'} width={637} height={978} className=" translate-z-0 w-full h-full" />

  </div>)
};

export default Avatar;
