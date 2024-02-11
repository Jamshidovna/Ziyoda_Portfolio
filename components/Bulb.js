import Image from "next/image";




const Bulb = () => {
  return(
    <div className=" absolute -left-52 top-44 rotate-12  mix-blend-lighten animate-pulse duration-75 z-10 w-[200px] xl:w-[570px]">
       <Image src={'/circle1.jpg'} width={570} height={240}/>
    </div>
  )
};

export default Bulb;
