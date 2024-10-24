const Hero = () => {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen bg-[url('https://i.ibb.co.com/djWN5Rb/Rectangle-1.png')] bg-no-repeat bg-cover bg-center rounded-3xl">
      <div className="text-white flex flex-col gap-8 justify-center items-center md:px-40">
        <h1 className="font-bold text-6xl text-center">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-center">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="space-x-5">
          <button className="btn bg-green-400 border-none rounded-full px-6 font-bold text-xl">
            Explore Now
          </button>
          <button className="btn bg-transparent text-white hover:text-black border rounded-full px-6 font-bold text-xl">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
