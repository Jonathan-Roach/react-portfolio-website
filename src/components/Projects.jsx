import { projectsData } from "../../utilities/projects"

const Projects = () => {
  return (
    <section id="project" className="pt-12 pb-24 border-t-2 border-solid border-yellow-500">
      <div className="container mx-auto px-10">
        <h1 className="text-white text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Projects</h1>
        
        <div className="flex justify-center pt-10 pb-5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((projectsData, index) => (
            <div key={index} className="bg-white hover:scale-105 shadow-xl border-2 solid p-6 rounded-xl">
              <div className="justify-center">
              <img src={projectsData.src} alt={`${projectsData.name} logo`} className="h-56 w-full mr-3 rounded-lg mb-1"/>
              </div>
              <h2 className="md:text-xl text-lg font-semibold pt-1">{projectsData.name}</h2>
              <div className="flex flex-col">
              <p className="text-gray-700 md:text-sm text-xs font-light pb-4">{projectsData.description}</p>
              <a href={projectsData.demoLink}><button className="bg-black rounded-xl p-1 px-4 font-semibold text-white md:text-sm text-xs">{projectsData.demo}</button></a>
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
