import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des="This is a open source  Project"
            src={projectOne}
          />
          <ProjectsCard
            title="E-commerce Website"
            des="It looks like Daraz "
            src={projectTwo}
          />
          <ProjectsCard
            title="Chatting App"
            des="Its made with PHP A simple Project"
            src={projectThree}
          />
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des="It looks like facebook with Using Wowonder Script  "
            src={projectThree}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=" It looks like daraz"
            src={projectOne}
          />
          <ProjectsCard
            title="Chatting App"
            des=" it looks like Massenger I also use wowonder in this project"
            src={projectTwo}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
