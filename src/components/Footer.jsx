import { personalData } from '../../utilities/background';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { LuPaperclip } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="flex sm:flex-row flex-col items-center p-4 text-white mt-20 border-t-2 border-solid border-yellow-500">
    <div className="flex space-x-4 m-8 gap-5">
    <a href={personalData.github} target='_blank' className="transition-all text-gray-400 hover:text-red-500 hover:scale-125 duration-300">
              <BsGithub size={22} />
    </a>
 <a href={personalData.linkedIn} target='_blank' className="transition-all text-gray-400 hover:text-blue-500 hover:scale-125 duration-300">
              <BsLinkedin size={22} />
    </a>
    <a href={personalData.email} target='_blank' className="transition-all text-gray-400 hover:text-yellow-500 hover:scale-125 duration-300">
              <FaEnvelope size={22} />
     </a>
     
    </div>

    <p className='text-gray-400 text-center'>&copy; {personalData.date} Jonathan Roach</p>
  </footer>
  );
}

export default Footer
