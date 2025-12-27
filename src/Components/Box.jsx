import React from "react";

const data = [
    {
        title: "INDEPENDENCY",
        desc: "Explore the creativity of independent designers from around the globe",
    },
    {
        title: "INDEPENDENCY",
        desc: "Explore the creativity of independent designers from around the globe",
    },
    {
        title: "INDEPENDENCY",
        desc: "Explore the creativity of independent designers from around the globe",
    },
    {
        title: "INDEPENDENCY",
        desc: "Explore the creativity of independent designers from around the globe",
    },
];

const Box = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 px-7 py-10">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="h-60 w-76 bg-gray-900 p-6 flex flex-col justify-between rounded-xl"
                >
                    <div>
                        <h3 className="text-gray-400 font-semibold text-lg">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text- mt-3 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>

                    <div className="flex items-center gap-3 ">
                        <button className="bg-white/40 px-3 py-2 rounded-full text-black font-bold">
                            <i className="ri-arrow-down-fill"></i>
                        </button>
                        <span className="text-gray-500 text-base md:text-lg font-medium">
                            LEARN MORE
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Box;
