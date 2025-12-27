import React from "react";
import AboutImg from "../assets/About.png";

const About = () => {
    return (
        <section className="px-7 md:px-10">

            <h1 className="ml-10 text-white text-3xl mb-8">
                OUR ADVANTAGES
            </h1>

            <div className="flex flex-col md:flex-row gap-8 items-center">

                {/* LEFT – Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={AboutImg}
                        alt="About"
                        className="w-full rounded-4xl object-cover"
                    />
                </div>

                {/* RIGHT – Content */}
                <div className="w-full md:w-1/2 text-white space-y-6">

                    {/* Card 1 */}
                    <div className="bg-gray-900 rounded-2xl p-6 relative">
                        <h3 className="mt-1 text-lg font-semibold">
                            INDEPENDENT DESIGNERS
                        </h3>

                        <p className="mt-6 w-[470px] max-w-full text-gray-300">
                            Our platform celebrates the ingenuity of independent designers,
                            offering a diverse range of fashion-forward garments that reflect
                            creativity and innovation. Explore curated collections showcasing
                            unique creations by independent designers.
                        </p>

                        {/* Button */}
                        <button
                            className="
                              mt-6 flex items-center gap-2 text-sm font-medium
                              md:absolute md:bottom-15 md:right-5"
                        >
                            <i className="bg-gray-600 rounded-full px-2 py-1 ri-arrow-right-up-fill"></i>
                            EXPLORE
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-900 rounded-2xl p-6 relative">
                        <h3 className="mt-1 text-lg font-semibold">
                            EXCLUSIVE & UNIQUITY
                        </h3>

                        <p className="mt-6 w-[470px] max-w-full text-gray-300">
                            Indulge in curated collections showcasing exclusive, one-of-a-kind
                            pieces, each with its own story and charm. Experience unique fashion
                            pieces that radiate sophistication and individuality.
                        </p>

                        {/* Button */}
                        <button
                            className="
                             mt-6 flex items-center gap-2 text-sm font-medium
                             md:absolute md:bottom-15 md:right-5"
                        >
                            <i className="bg-gray-600 rounded-full px-2 py-1 ri-arrow-right-up-fill"></i>
                            EXPLORE
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
