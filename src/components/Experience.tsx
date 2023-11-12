import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="No Post Yet"
            subTitle="For future - (20** - Present)"
            result="USA"
            des="Its for future"
          />
          <ResumeCard
            title="No Post Yet"
            subTitle="For Future - (20** - present)"
            result="MALAYSIA"
            des="for Future."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Noting Yet - (20** - 20**)"
            result="Oman"
            des="Noting Yet"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">20** - 20**</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Noting Yet"
            subTitle="Noting Yet"
            result="DHAKA"
            des="Noting Yet"
          />
          <ResumeCard
            title="Noting Yet"
            subTitle="Noting Yet"
            result="CANADA"
            des="Noting Yet"
          />
          <ResumeCard
            title="Noting Yet"
            subTitle="Noting Yet (2001 - 2010)"
            result="NEVADA"
            des="Noting Yet"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
