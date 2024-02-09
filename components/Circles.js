import Image from "next/image";






const Circles = () => {
  return(
    <div className=" w-[200px] xl:w-[300px] absolute -right-16 -bottom-10 mix-blend-lighten animate-pulse duration-75 z-10 ">
      <Image src={'/galaktika4.png'} width={260} height={200} className=" w-full h-full" alt="img"/>
    </div>
  )
};

export default Circles;
