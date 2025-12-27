import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = ["Designers", "Collabs", "Events", "9018", "Card"];

    return (
        <nav className="px-4 md:px-10 py-3 bg-black text-white shadow-sm">

            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">DVSY</h1>

                <ul className="hidden md:flex flex-1 justify-end gap-5 mr-6">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className="px-3 py-1 bg-neutral-900 text-white rounded-lg cursor-pointer hover:bg-pink-700 transition"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <button className="hidden md:block px-5 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition">
                    Get Started
                </button>
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden mt-4 flex flex-col gap-3">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            className="px-5 py-2 bg-gray-700 text-white rounded-lg text-left"
                        >
                            {item}
                        </button>
                    ))}

                    <button className="px-5 py-2 bg-pink-700 text-white rounded-lg">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
