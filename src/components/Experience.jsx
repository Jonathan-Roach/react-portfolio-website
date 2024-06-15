import { experiences } from "../../utilities/experience"

const Experience = () => {
  return (
    <section id="experience" className="pt-12 pb-24 border-t-2 border-solid border-yellow-500">
      <div className="container mx-auto px-10">
        <h1 className="text-white text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Experience</h1>
        
        <div className="flex justify-center pt-10 pb-5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white hover:scale-105 shadow-xl border-2 p-6 rounded-xl">
              <div className="justify-center">
              <img src={experience.src} alt={`${experience.company} logo`} className="h-56 w-full mr-3 rounded"/>
              </div>
              <h2 className="md:text-xl text-lg font-semibold">{experience.position}</h2>
              <div className="flex flex-col">
              <p className="text-gray-700 md:text-sm text-xs">{experience.company}</p>
              <p className="text-gray-400 mb-4 md:text-sm text-xs">{experience.duration}</p>
              </div>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  )
}

export default Experience