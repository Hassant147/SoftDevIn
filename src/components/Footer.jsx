import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function FooterAnime() {
    return (
        <>
            {/** 
             * SECTION that holds the footer content with glowing border 
             */}
            <section className="relative w-full overflow-hidden bg-black">
                {/**
                 * Glowing Border Structure
                 */}
                <div className="footer-container">
                    <div className="animated-border-box-glow"></div>
                    <div className="animated-border-box"></div>

                    {/**
                     * Footer Content
                     * Ensure this is positioned above the glowing border
                     */}
                    <div className="relative z-10 pt-10 pb-6 px-6 lg:px-20">
                        {/* Example Footer Grid (3 Columns on LG, 1 on small) */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* 1) Left Column */}
                            <div>
                                <h1 className="text-white text-3xl font-semibold mb-4">
                                    Let's Start Working Together
                                </h1>
                                <button
                                    className="
                                        bg-gradient-to-r 
                                        from-blue-500 
                                        to-pink-500 
                                        px-6 
                                        py-3 
                                        text-white 
                                        font-semibold 
                                        rounded-full 
                                        hover:scale-105 
                                        transition
                                    "
                                >
                                    Get Started Now
                                </button>
                            </div>

                            {/* 2) Middle Column */}
                            <div className="text-white">
                                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                                <p>Gulberg Greens, Islamabad</p>
                                <p>+92 336 5690614</p>
                                <p>support@softdevin.com</p>
                            </div>

                            {/* 3) Right Column */}
                            <div className="text-white">
                                <h2 className="text-2xl font-semibold mb-4">Subscribe Newsletter</h2>
                                <p>The charms of pleasure of the moment by desire.</p>
                                <div className="mt-3 flex flex-col gap-3">
                                    <input
                                        type="email"
                                        className="bg-slate-900 text-white px-4 py-2 rounded"
                                        placeholder="Enter your valid email"
                                    />
                                    <button
                                        className="
                                            bg-gradient-to-r 
                                            from-blue-500 
                                            to-pink-500 
                                            text-white 
                                            px-6 
                                            py-3 
                                            rounded-full 
                                            hover:scale-105 
                                            transition
                                        "
                                    >
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/** 
                     * Bottom Bar Integrated into Main Footer 
                     */}
                    <div className="relative z-10 border-t border-slate-600 py-4 px-6 lg:px-20">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-white text-2xl font-bold">
                                SoftDevIn Pvt Ltd
                            </p>
                            <p className="text-white text-sm">
                                © 2023, <b>SoftDevIn</b>, All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/** Scroll to top button */}
            <div
                className="
                    bg-gradient-to-r 
                    from-blue-500 
                    to-pink-500 
                    text-black 
                    p-3 
                    rounded-full 
                    hover:bg-black 
                    hover:text-white 
                    cursor-pointer 
                    fixed 
                    bottom-6 
                    right-6 
                    transition-transform
                    duration-300
                    hover:scale-110
                    active:scale-90
                    shadow-lg
                    z-50
                "
            >
                <Link to="hero" spy={true} offset={-100} smooth={false}>
                    <FaArrowUp className="w-6 h-6" />
                </Link>
            </div>
        </>
    );
}
