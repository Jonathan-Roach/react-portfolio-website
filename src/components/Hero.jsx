import { personalData } from '../../utilities/background';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { LuPaperclip } from 'react-icons/lu';

const Hero = () => {
  return (
    <div className="bg-transparent pt-24 h-screen">
    <div className="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl 3xl:text-8xl text-white font-bold mb-6">
                    Hello I'm <br class="hidden md:block" />
                    <span className="text-yellow-500">Jonathan Roach</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl 3xl:text-3xl text-gray-400 mb-8">
                    A 2B Honours Arts and Business student pursuing a Computing minor at the University of Waterloo
                </p>

{/* PLUGIN LOGOS*/}
                <div className="my-12 flex items-center gap-5">
            <a href={personalData.github} target='_blank' className="transition-all text-white hover:text-red-500 hover:scale-125 duration-300">
              <BsGithub size={30} />
            </a>
            <a href={personalData.linkedIn} target='_blank' className="transition-all text-white hover:text-blue-500 hover:scale-125 duration-300">
              <BsLinkedin size={30} />
            </a>
            <a href={personalData.email} target='_blank' className="transition-all text-white hover:text-yellow-500 hover:scale-125 duration-300">
              <FaEnvelope size={30} />
            </a>
            <a href={personalData.resume} target='_blank' className="transition-all text-white hover:text-green-500 hover:scale-125 duration-300">
              <LuPaperclip size={30} />
            </a>
          </div>

            </div>
        </div>
    </div>

</div>
  )
}

export default Hero