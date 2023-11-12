import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2027</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Daffodil International University(2023 - 2027)"
            result="present student/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="HSC"
            subTitle="Rangpur Govt. College (2019 - 2021)"
            result="5/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kumargonj B/L High School(2014 - 2019)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Campus Ambassador"
            subTitle="Nonacademy - (2023 - Present)"
            result="USA"
            des="Bangladesh's most active student community with 5,000+ members."
          />
          <ResumeCard
            title="Associate member"
            subTitle="DIU CPC - Daffodil International University Computer and Programming Club- (2023 - present)"
            result="Bangladesh"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Bangladesh isn't easy."
          />
          <ResumeCard
            title="Member"
            subTitle="Babiato Turkie  - (2022 - present)"
            result="Turki"
            des="It is the bigest webmuster forum in present"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
