export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "Canva",
    "JavaScript",
    "React",
  ];

  return (
    <section className="bg-gray-600 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <span className="block text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
          Skills
        </span>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-700 font-semibold rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
