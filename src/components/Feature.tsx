import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Business Stratagy"
            des=""
            icon={null}
          />
          <Card
            title="App Development"
            des="Website to Apps Development with better UIUX"
            icon={<AiFillAppstore />}
          />
          <Card
            title="SEO Optimisation"
            des="I can also optimise any website for better clint experience"
            icon={<SiProgress />}
          />
          <Card
            title="Web App Installation "
            des="I can Install any kind of Script and customise them"
            icon={<FaMobile />}
          />
          <Card
            title="UX Design"
            des="For better UIUX you can contact  with me"
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="I also can build  Hosting Websie "
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
