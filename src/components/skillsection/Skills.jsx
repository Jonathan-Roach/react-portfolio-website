import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div id="skills" class="w-full bg-white pt-10 pb-24 border-t-2">
        <div className="flex justify-center pt-10 pb-5">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">Skills</h1>
        </div>

        <div className="flex justify-center pb-10">    
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <SkillCard />
      </div>
      </div>
</div>
  );
};

export default Skills;
