import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
  {
    title: "B.Tech in Computer Science Engineering (2021 - 2025)",
    description:
      "As a dedicated Computer Science student, I have gained strong proficiency in C, Java, and Data Structures & Algorithms (DSA), alongside expertise in Database Management Systems (DBMS). I specialize in full-stack development with a focus on the MERN stack, leveraging technologies such as ReactJs, Redux Toolkit, HTML, CSS, NodeJs, ExpressJs, and databases like MySQL and MongoDB. Additionally, I am proficient with version control systems, particularly Git and GitHub",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center ">
        <img src="education/AIEM.JPG" alt="" className='w-full h-full' />
        <p className='text-sm text-yellow-400'>Abacus Institute Of Engineering And Management</p>
      </div>
    ),
  },
  {
    title: "Class XI - XII (2019 - 2021)",
    description:
      "Focused on core subjects including Physics, Chemistry, Mathematics, and Biology, building a strong foundation in analytical thinking, problem-solving, and scientific principles during this crucial academic phase.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center ">
        <img src="education/NRCA.jpg" alt='' className='w-full h-[92%]' />
        <p className='text-sm text-yellow-400'>Nandanpur Rupchand Academy.</p>
      </div>
    ),
  },
  {
    title: "Class V - X (2013 - 2019)",
    description:
      "Studied core subjects including English, Mathematics, Science, and Social Studies, and developed a strong foundation in analytical thinking, problem-solving, and scientific principles during this crucial academic phase.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center ">
        <img src="education/NRCA.jpg" alt='' className='w-full h-[92%]' />
        <p className='text-sm text-yellow-400'>Nandanpur Rupchand Academy.</p>
      </div>

    ),
  },

];

const Education: React.FC = () => {

  return <div  className='w-screen min-h-[90vh] flex flex-col items-center pt-8 pb-12 arrow-Scroll'>
    <StickyScroll content={content} />
  </div>
}

export default Education