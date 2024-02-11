import Image from "next/image";






const Circles = () => {
  return(
    <div className=" w-[200px] xl:w-[400px] absolute -right-36 -bottom-80 mix-blend-lighten animate-pulse duration-75 z-10 ">
      <Image src={'/circle1.jpg'} width={400} height={300} className=" w-full h-full" alt="img"/>
    </div>
  )
};

export default Circles;
