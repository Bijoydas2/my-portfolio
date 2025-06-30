import React from "react";
import { FaUniversity, FaBookOpen, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="w-11/12 max-w-7xl mx-auto mt-20  flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-12">
        Education
      </h2>

      <div className="w-full max-w-7xl border border-indigo-200 dark:border-indigo-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-slate-800 text-center">
        <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4 flex justify-center items-center gap-2">
          <FaGraduationCap className="text-indigo-500 dark:text-indigo-300" />
          Diploma in Engineering
        </h3>

        <p className="text-gray-400 mb-2 flex justify-center items-center gap-2">
          <FaUniversity className="text-indigo-400 dark:text-indigo-300" />
          <span>
            <span className="font-medium">Institution:</span> Moulvibazar Polytechnic Institute
          </span>
        </p>

        <p className="text-gray-400 mb-2 flex justify-center items-center gap-2">
          <FaBookOpen className="text-teal-500 dark:text-teal-300" />
          <span>
            <span className="font-medium">Department:</span> Computer Science and Technology
          </span>
        </p>

        <p className="text-gray-400 mb-2 flex justify-center items-center gap-2">
          <FaGraduationCap className="text-green-500 dark:text-green-300" />
          <span>
            <span className="font-medium">Current Status:</span> 7th Semester Running
          </span>
        </p>

        <p className="text-gray-400 flex justify-center items-center gap-2">
          <FaCalendarAlt className="text-orange-500 dark:text-orange-300" />
          <span>
            <span className="font-medium">Session:</span> 2021 – 2022
          </span>
        </p>
      </div>
    </section>
  );
};

export default Education;
