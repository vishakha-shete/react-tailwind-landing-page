import React from "react";
import AboutImg from "../assets/Mid.png";

const AboutReverse = () => {
    return (
        <section className="px-7 md:px-10 py-5">

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">

                {/* IMAGE – RIGHT (Desktop) */}
                <div className="w-full md:w-1/2">
                    <img
                        src={AboutImg}
                        alt="About"
                        className="w-full rounded-2xl object-cover"
                    />
                </div>

                {/* CONTENT – LEFT (Desktop) */}
                <div className=" w-full md:w-1/2 text-gray-400 space-y-3">

                    {/* Card 1 */}
                    <div className=" black/70 bg-neutral-900 rounded-2xl p-6 relative">
                        <h3 className="text-lg font-semibold">
                            HIGH QUALITY
                        </h3>

                        <p className="mt-7 w-[480px] max-w-full text-gray-500">
                            Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style.
                        </p>

                        <button
                            className="
                mb-8 flex items-center gap-2 text-sm font-medium
                md:absolute md:bottom-6 md:right-6
              "
                        >
                            <i className="bg-gray-600 rounded-full px-2 py-1 ri-arrow-right-up-fill"></i>
                            EXPLORE
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className=" bg-neutral-900 rounded-2xl p-6 relative">
                        <h3 className="pt-2 text-lg font-semibold">
                        ECO-FRIENDLY
                        </h3>

                        <p className="mt-7 w-[480px] max-w-full text-gray-500">
                        Join our commitment to sustainability with eco-friendly fashion
                         options, stylish yet mindful of our planet
                         Explore guilt-free shopping with our eco-conscious collections, 
                        crafted with planet-friendly materials and ethical practices.
                        </p>

                        <button
                            className="
                mb-8 flex items-center gap-2 text-sm font-medium
                md:absolute md:bottom-6 md:right-6
              "
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

export default AboutReverse;
