import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <Header />
        <h1 className="text-center text-5xl font-extrabold text-white my-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 transition-all duration-300 ease-in-out">
            My Projects
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project Card */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-center text-gray-400">{project.description}</p>
                <div className="text-center mt-6">
                  <Link href={project.link}
                    
                      className="inline-block bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 transition-all duration-300"
                    >
                      See Project
                    
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-center text-4xl font-bold text-white mb-8 animate-bounce">
            Featured Websites
          </h2>
          <div className="flex flex-col items-center gap-6">
            <Link href="https://myy-t-shirt-web.vercel.app/"
              
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-10 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                target="_blank"
              >
                My T-shirt Store
              
            </Link>
            <Link href="https://my-new-coffee-website.vercel.app/"
              
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-10 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                target="_blank"
              >
                My Coffee Website
              
            </Link>
          </div>
        </div>
        <h1 className="text-center text-2xl font-semibold text-white mt-8 mb-4 animate-bounce">
  Click the button 👆 and check my website
</h1>      </div>
<Footer />
    </section>
  );
};

const projects = [
  {
    title: "ATM Machine Project",
    description:
      "An automated teller machine designed to provide convenient banking services.",
    image:
      "https://t4.ftcdn.net/jpg/01/28/37/71/360_F_128377193_9BIJQsBm0wkZNroIE10JmBmTN2ureGgd.jpg",
    link: "https://github.com/1rida/ATM-machine.git",
  },
  {
    title: "CLI Number Guessing Project",
    description:
      "A CLI-based number guessing game that provides entertainment for users.",
    image: "https://i.ytimg.com/vi/0wHXNMRwBMg/hqdefault.jpg",
    link: "https://github.com/1rida/cli-number-guessing.git",
  },
  {
    title: "Word Counter Project",
    description:
      "A word counter tool designed to count words and improve text productivity.",
    image:
      "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/11/BMD-3832.png",
    link: "https://github.com/1rida/word-counter.git",
  },
  {
    title: "TODO List Project",
    description:
      "A simple and effective tool to manage your tasks efficiently.",
    image:
      "https://www.proofhub.com/articles/wp-content/uploads/2023/11/Best-To-Do-List-Apps-For-Better-Task-Management.jpg",
    link: "https://github.com/1rida/todos.git",
  },
  {
    title: "Hackathon Project",
    description:
      "A dynamic resume builder created during a hackathon.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bQ8sn5n9rMfqGeMpwnc4O67j0B9F5Od5ow&s",
    link: "https://github.com/1rida/dynamic-resume-builder-with-form.git",
  },
  {
    title: "Login Form Project",
    description:
      "A user-friendly login form designed for easy access and authentication.",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg",
    link: "https://github.com/1rida/my-login-form.git",

    

  },
];

export default Projects;
