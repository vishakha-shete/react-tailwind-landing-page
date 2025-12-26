import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="mr-7 ml-7 pb-9 mt-0  object-cover relative ">
      <img
        src={heroImg}
        alt="hero"
        className=" w-full h-[90vh] rounded-xl  top-0 object-fill   border-rad bottom-4"
      />

      <div className="absolute inset-0 flex items-center  md:px-30">
        <div className=" text-white">
          <h1 className=" mt-40 md:text-9xl font-light  ">
          DESIGN  
          <h1 className="mt-5 md:text-9xl ml-30 font-light">& FREEDOM</h1>
          </h1>
          <p className="ml-50  mt-4 font-medium text-gray-400 ">
          Explore Independent Style by Embracing Uniqueness</p>
          <p className="ml-50  font-medium text-gray-400 "> with Our Exclusive Designer Apparel</p>
          <span className=" ml-270 absolute start-0 top-127 text-sm ">
          <button className="bg-white/20 px-5 py-3 rounded-full text-white">
  <i className="ri-arrow-down-fill"></i>
</button>
<span className="ml-3 text-white">New Feature</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
