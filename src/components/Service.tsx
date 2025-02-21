
export default function Services() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">

        {/* Text Content */}
        <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ease-in-out mb-8">
          My Services
        </span>
        <p className="text-base md:text-lg mb-12 pt-5">
          I offer a wide range of web development services tailored to meet your business needs.
          From creating stunning websites to building robust web applications, my goal is to help
          you achieve success in the digital world.
        </p>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* First Image */}
          <img
            src="https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/6601080cb1e78f8d194889e4_6600d34cf851c380fefbfe9d-a221b2d5aed9dc80f19a4c1acab8e92d.jpeg"
            alt="Service 1 Illustration"
            className="w-full rounded-lg shadow-lg"
          />

          {/* Second Image */}
          <img
            src="https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/660674e3547a0aca5fb88b10_66061e9387e5d3bdcd7f5066-3e91fae49a3603bfa27cf8e401ed6684.jpeg"
            alt="Service 2 Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Web Design</h3>
            <p className="text-gray-600">
              Beautiful, user-friendly designs that will help you stand out and
              make a lasting impression on your audience.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600">
              Building fast, scalable, and secure web applications that align with
              the latest industry standards and best practices.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">SEO Optimization</h3>
            <p className="text-gray-600">
              Boost your site,s visibility and ranking on search engines with
              advanced SEO strategies that drive traffic.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
