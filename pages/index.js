import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import Image from 'next/image';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Head from 'next/head';


const metadata = {
  title: '_Portfolio/home',
  description: 'Generated by Next.js',
};



const Home = () => {
  return (
    <div className=' bg-primary/60 h-full'>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
    <div className=' w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className=' text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <motion.h1 
           variants={fadeIn('down', 0.2)} 
           initial='hidden' 
           animate='show' 
           exit='hidden' 
          className=' text-4xl -mt-10'>Z.Jamshidovna <br/> Front-end {''}
          <span className=' text-accent'> Developer <br/></span>
          </motion.h1>
          <motion.p 
           variants={fadeIn('down', 0.3)} 
           initial='hidden' 
           animate='show' 
           exit='hidden' 
          className=' max-w-sm xl:max-w-xl py-6 mx-auto xl:mx-0 mb-10 xl:mb-16'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
          Quod sequi aperiam perferendis eligendi, <br/>
          consectetur reprehenderit delectus similique
          </motion.p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn/>
          </div>
          <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className=' hidden xl:flex'>
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
    <div className=' w-[1200px] h-full absolute right-0 bottom-0'>
      <div className=' bg-none xl:bg-cover xl:bg-no-repeat  absolute mix-blend-lighten translate-z-0'>
      <Image src='/stars.jpg' width={700} height={400} className=' ml-72' alt=''/>
      </div>
      <div>
        <div>
          {/* <Avatar/> */}
        </div>
      </div>
    </div>
      </div>
  )
};

export default Home;
