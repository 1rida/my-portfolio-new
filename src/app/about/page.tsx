import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <Header />
        {/* Header Section */}
        <div className="text-center mb-12 pt-9">
          <span className="text-4xl sm:text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
            About Me
          </span>
          <p className="text-white mt-4 text-base sm:text-lg">
            Learn more about who I am and what I do.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Profile img */}
          <div className="flex justify-center ">
            <div className="w-60 h-60 sm:w-80 sm:h-80 relative rounded-full overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-white overflow-hidden ">
                {/* Placeholder for Profile img */}
                <img
                  src="https://img.freepik.com/premium-photo/cute-girl-working-computer-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_839035-1393862.jpg" // Replace this with your img path
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Description */}
          <div className="flex flex-col justify-center text-center md:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-500 animate-bounce">
              <i className="font-serif ">Hi, I'm Rida Rasheed!</i>
            </h2>
            <p className="text-base sm:text-lg text-white mb-6">
              I am a passionate developer with expertise in building web
              applications. I specialize in front-end technologies and love
              creating interactive and responsive user interfaces.
            </p>
            <p className="text-base sm:text-lg text-white">
              With a keen eye for detail and a love for creativity, I strive to
              deliver projects that are not only functional but also beautiful.
              I enjoy learning new technologies and am always eager to take on
              new challenges.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <span className="text-4xl sm:text-5xl text-center md:pl-[50vh] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
            My Skills
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {/* Skill 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" // Replace with the appropriate skill icon
                alt="HTML"
                width={60}
                height={60}
              />
              <h4 className="text-xl font-semibold mt-4">HTML</h4>
            </div>
            {/* Skill 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwTQDUp26lLlOBnC-9w0DyQzfcGX9K_4CYQ&s" // Replace with the appropriate skill icon
                alt="CSS"
                width={60}
                height={60}
              />
              <h4 className="text-xl font-semibold mt-4">CSS</h4>
            </div>
            {/* Skill 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" // Replace with the appropriate skill icon
                alt="JavaScript"
                width={130}
                height={130}
              />
              <h4 className="text-xl font-semibold mt-4">JavaScript</h4>
            </div>
            {/* Skill 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" // Replace with the appropriate skill icon
                alt="React"
                width={60}
                height={60}
              />
              <h4 className="text-xl font-semibold mt-4">React</h4>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="my-16">
          <span className="text-4xl sm:text-5xl text-center md:pl-[40vh] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
            Interests & Hobbies
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {/* Interest 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-4 text-gray-800">
                Web Development
              </h4>
              <p className="text-base sm:text-lg text-gray-600">
                I enjoy building responsive and modern web applications,
                constantly experimenting with new frameworks and technologies.
              </p>
            </div>
            {/* Interest 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-4 text-gray-800">
                UI/UX Design
              </h4>
              <p className="text-base sm:text-lg text-gray-600">
                Creating visually appealing and user-friendly interfaces is a
                major part of my passion. I love transforming ideas into
                reality.
              </p>
            </div>
            {/* Interest 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-4 text-gray-800">
                Gaming
              </h4>
              <p className="text-base sm:text-lg text-gray-600">
                When I'm not coding, you'll often find me immersed in gaming,
                both as a player and a developer of small gaming projects.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default About;
