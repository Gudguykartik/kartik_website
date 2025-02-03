"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const IconWrapper = ({ children, type }: { children: React.ReactNode, type: "work" | "education" }) => (
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 10, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`p-3 rounded-xl ${
        type === "work" 
          ? "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-pink-400/20" 
          : "bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 dark:from-emerald-400/20 dark:via-teal-400/20 dark:to-cyan-400/20"
      }`}
    >
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(255,255,255,0)",
            "0 0 0 8px rgba(255,255,255,0)"
          ]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`p-2 rounded-lg ${
          type === "work"
            ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
            : "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400"
        }`}
      >
        {children}
      </motion.div>
    </motion.div>
  );

  const experiences = {
    work: [
      {
        title: "Data Analyst",
        place: "EgniTech",
        duration: "2023 - 2024",
        tags: ["Data Analysis", "Machine Learning", "Data Science"]
      },
      {
        title: "Machine Learning Engineer",
        place: "Feynn Labs",
        duration: "2023 - Present",
        tags: ["Machine Learning", "AI", "Data Science"]
      },
      {
        title: "Data Analyst",
        place: "Kulturhire",
        duration: "2022 - 2023",
        tags: ["Data Analysis", "Business Intelligence", "Analytics"]
      }
    ],
    education: [
      {
        title: "MBA in Business Analytics",
        place: "Jaipuria Institute",
        duration: "2021 - 2023",
        tags: ["Business Analytics", "Data Science", "Management"]
      },
      {
        title: "B.Com (Hons)",
        place: "Delhi University",
        duration: "2018 - 2021",
        tags: ["Commerce", "Business", "Finance"]
      }
    ]
  };

  const TabButton = ({ type, icon }: { type: "work" | "education", icon: JSX.Element }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setActiveTab(type)}
      className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200
        ${activeTab === type 
          ? 'text-dark-200 dark:text-stone-200 bg-dark-200/10 dark:bg-white/10' 
          : 'text-dark-200/70 dark:text-stone-200/70 hover:text-dark-200 dark:hover:text-stone-200'
        }`}
    >
      <motion.span
        animate={{ rotate: activeTab === type ? 360 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {icon}
      </motion.span>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </motion.button>
  );

  return (
    <div className="relative z-10 py-16 sm:py-24" id="experience">
      <div className="space-y-4 mb-10">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          Experience & Education
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
        >
          My professional journey in data science and analytics, combined with relevant education in business and technology.
        </motion.p>
      </div>

      <div className="flex gap-4 mb-8">
        <TabButton type="work" icon={<Briefcase className="w-5 h-5" />} />
        <TabButton type="education" icon={<GraduationCap className="w-5 h-5" />} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {experiences[activeTab].map((exp, index) => (
            <motion.div
              key={exp.title + exp.place}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative flex items-start gap-4 p-6 rounded-xl bg-dark-200/5 dark:bg-white/5 hover:bg-dark-200/10 dark:hover:bg-white/10 transition-all duration-300">
                <IconWrapper type={activeTab}>
                  {activeTab === "work" 
                    ? <Briefcase className="w-5 h-5 text-white" />
                    : <GraduationCap className="w-5 h-5 text-white" />
                  }
                </IconWrapper>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-xl font-semibold dark:text-stone-200">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-dark-200/70 dark:text-stone-200/70">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-dark-200/90 dark:text-stone-200/90 mt-1">{exp.place}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-dark-200/10 dark:bg-white/10 text-dark-200/90 dark:text-stone-200/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExperienceSection;
