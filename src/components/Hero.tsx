// components/Hero.js
import Link from 'next/link';

export default function Hero() {
    return (
      
      <div className="bg-black text-white h-screen flex items-center">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Side - Text */}



          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-4">
              Web Development <br /> That Delivers
            </h1>
            <p className="text-lg mb-6">
            "I specialize in crafting high-performance, user-friendly websites and applications. With a focus on clean code, responsive design, and the latest technologies, I help bring your ideas to life in the digital world My mission is to transform your ideas into interactive and visually stunning web applications. I use the best development practices and modern tools to create scalable, responsive websites that meet your business needs."            </p>

            <div className="flex space-x-4 animate-bounce">

<Link href="https://vercel.com/1ridas-projects">
  <button className="inline-flex items-center text-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-red-500 hover:border-red-500 hover:text-white rounded-lg text-lg transition-all duration-300">
    Vercel
  </button>
</Link>

<Link href="https://github.com/1rida" passHref>
  <button className="inline-flex items-center text-white bg-gray-700 border-2 border-transparent py-2 px-6 focus:outline-none hover:bg-red-500 hover:border-red-500 hover:text-white rounded-lg text-lg transition-all duration-300">
    GitHub
  </button>
</Link>

</div>
        </div>

        
  
          {/* Right Side - Image */}
          <div className="lg:w-1/2">
            <img
              src="https://thumbs.dreamstime.com/b/futuristic-laptop-glowing-code-screen-vibrant-digital-interface-isolated-dark-background-futuristic-laptop-glowing-337489992.jpg"
              alt="Futuristic Laptop with Code"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          

          
        </div>

       

        
        
      </div>
      


      
    );
  }
  