import { projectsData } from "../../utilities/projects"

const Projects = () => {
  return (
    <section id="experience" className="bg-white pt-12 pb-24 border-t-2">
      <div className="container mx-auto px-10">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Projects</h1>
        
        <div className="flex justify-center pt-10 pb-5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((projectsData, index) => (
            <div key={index} className="bg-white hover:scale-105 shadow-xl border-2 solid p-6 rounded-xl">
              <div className="justify-center">
              <img src={projectsData.src} alt={`${projectsData.name} logo`} className="h-56 w-full mr-3 rounded mb-1"/>
              </div>
              <h2 className="md:text-xl text-lg font-semibold">{projectsData.name}</h2>
              <div className="flex flex-col">
              <p className="text-gray-700 md:text-sm text-xs">{projectsData.tools}</p>
              <p className="text-gray-400 mb-4 md:text-sm text-xs">{projectsData.demo}</p>
              </div>
              <p className="text-gray-600"></p>
            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  )
}

export default Projects