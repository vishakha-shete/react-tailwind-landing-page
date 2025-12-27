import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative mx-7">

      <img
        src={heroImg}
        alt="hero"
        className="w-full h-[90vh] rounded-xl object-cover
                   max-md:h-[70vh] max-sm:h-[60vh]"
      />

      <div className="absolute inset-0">
        <div className="relative h-full w-full">

          <div
            className="
              absolute top-40 left-16 text-white
              max-md:top-28 max-md:left-8
              max-sm:top-20 max-sm:left-4
            "
          >
            <h1 className="text-9xl font-light max-md:text-6xl max-sm:text-4xl">
              DESIGN
            </h1>
            <h1 className="mt-5 text-9xl font-light max-md:text-6xl max-sm:text-4xl">
              & FREEDOM
            </h1>

            <p
              className="
                mt-4 ml-40 font-medium text-gray-400
                max-md:ml-0 max-md:mt-6
                max-sm:text-sm
              "
            >
              Explore Independent Style by Embracing Uniqueness
            </p>
            <p
              className="
                ml-40 font-medium text-gray-400
                max-md:ml-0
                max-sm:text-sm
              "
            >
              with Our Exclusive Designer Apparel
            </p>
          </div>

          <div
            className="
              absolute bottom-20 left-270 flex items-center gap-3 text-sm
              max-md:left-20 max-md:bottom-16
              max-sm:left-6 max-sm:bottom-10
            "
          >
            <button className="bg-white/40 px-2 py-1  rounded-full text-white font-bold">
              <i className="ri-arrow-down-fill"></i>
            </button>
            <span className="text-white text-2xl font-medium max-sm:text-base">
              New Feature
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
