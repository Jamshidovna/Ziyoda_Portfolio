import Image from "next/image";



const Avatar = () => {
  return (
  <div className="  xl:flex xl:max-w-none ">
   <Image src={'/Photo.png'} width={637} height={978} className=" -mt-10" />

  </div>)
};

export default Avatar;
