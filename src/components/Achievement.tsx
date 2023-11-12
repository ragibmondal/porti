import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 -Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="TeachBOOK"
            subTitle="Its my own company.Accually here, I collect found for my future project "
            result="Success"
            des="Its my own company.Accually here, I collect found for my future project"
          />
          <ResumeCard
            title="Future "
            subTitle="its for future"
            result="Success"
            des="its for future"
          />
          <ResumeCard
            title="its for future"
            subTitle="its for future"
            result="Success"
            des="its for future"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">future - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="its for future"
            subTitle="its for future"
            result="Success"
            des="its for future"
          />
          <ResumeCard
            title="its for future."
            subTitle="its for future."
            result="Success"
            des="its for future"
          />
          <ResumeCard
            title="its for future"
            subTitle="its for future"
            result="Success"
            des="its for future"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
