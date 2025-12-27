import React from "react";
import PartImg from "../assets/part.png";

const Part = () => {
    return (
        <section className="relative mx-4 md:mx-10">
            <div className="py-10 flex flex-col md:flex-row items-center gap-5">

                {/* Text Section (50%) */}
                <div className=" pt-10 pb-12 w-full md:w-1/2 text-white rounded-xl bg-gray-900 px-7 py-6">
                    <span className="text-sm text-gray-500 font-bold">ABOUT</span>

                    <h1 className="mt-5 text-4xl md:text-5xl font-semibold">
                        WHERE FASHION MEETS FREEDOM
                    </h1>

                    <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                        <p>
                            We believe that fashion should be an expression of individuality.
                            We encourage creativity and originality in every item we offer,
                            presenting customers with exclusive collections from independent designers.
                        </p>

                        <p>
                            We strive to connect designers with fashion enthusiasts who appreciate
                            the artistry behind each piece. Driven by authenticity, we curate
                            collections that inspire confidence and self-expression.
                        </p>
                    </div>
                </div>

                {/* Image Section (50%) */}
                <div className="w-full md:w-1/2">
                    <img
                        src={PartImg}
                        alt="Fashion"
                        className="w-full h-full rounded-xl object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Part;
