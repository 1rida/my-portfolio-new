import React from "react";

const Qualification = () => {
  const qualifications = [
    {
      title: "Matriculation",
      institution: "Matric Board of Karachi",
    },
    {
      title: "Intermediate",
      institution: "Inter Board of Karachi",
    },
    {
      title: "Graduation",
      institution: "University of Karachi",
    },
  ];

  return (
    <section className="py-8 bg-black px-4 md:px-8 lg:px-16">
      <span className="block text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ease-in-out mb-6 text-center">
        Qualification
      </span>
      <div className="space-y-4">
        {qualifications.map((qual, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-2xl border border-gray-200 text-center md:text-left"
          >
            <h3 className="text-lg md:text-xl font-semibold">{qual.title}</h3>
            <p className="text-gray-600">{qual.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;
