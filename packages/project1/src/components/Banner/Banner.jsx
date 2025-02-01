import { Link } from "react-router-dom";
import search from "../../assets/SearchIcon/Search.png"
import point from "../../assets/PointToTrail/Point.svg"
import success from "../../assets/Icon/Sucess.png"
import MainImage from "../../assets/Banner/MainImage.png"
import { useEffect, useState } from "react";

const Banner = () => {
    const textToType = "Business Solution";
    const textFor = "for";
    const [visibleIndexes, setVisibleIndexes] = useState([]);
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    // Use two separate counters for the two texts
    const [isTypingFor, setIsTypingFor] = useState(false); // Track if typing for is active
    const [indexFor, setIndexFor] = useState(0); // Track the index for "for"

    useEffect(() => {
        let timer;

        // Handle typing
        if (isTyping) {
            if (index < textToType.length) {
                timer = setTimeout(() => {
                    setVisibleIndexes((prev) => [...prev, index]);
                    setIndex((prev) => prev + 1);
                }, 100); // Typing speed for "Business Solution"
            } else {
                // Start typing "for" after "Business Solution" finishes
                setIsTyping(false);
                setIsTypingFor(true);
            }
        } else if (isTypingFor) {
            if (indexFor < textFor.length) {
                timer = setTimeout(() => {
                    setVisibleIndexes((prev) => [...prev, index + indexFor]); // Offset for "for"
                    setIndexFor((prev) => prev + 1);
                }, 100); // Typing speed for "for"
            } else {
                timer = setTimeout(() => setIsTypingFor(false), 1000);
            }
        } else {
            // Handle erasing text (both "Business Solution" and "for")
            if (index > 0) {
                timer = setTimeout(() => {
                    setVisibleIndexes((prev) => prev.slice(0, -1));
                    setIndex((prev) => prev - 1);
                }, 50); // Deleting speed for "Business Solution"
            } else if (indexFor > 0) {
                timer = setTimeout(() => {
                    setVisibleIndexes((prev) => prev.slice(0, -1));
                    setIndexFor((prev) => prev - 1);
                }, 50); // Deleting speed for "for"
            } else {
                timer = setTimeout(() => {
                    setIsTyping(true); // Start typing again after complete deletion
                }, 1000);
            }
        }

        return () => clearTimeout(timer);
    }, [index, indexFor, isTyping, isTypingFor]);
    return (
        <div>
            <div className="w-[90%] mx-auto">
                <h3 className="text-center text-[52px] leading-[72px] font-bold mt-16">
                    Looking for a{" "}
                    <span style={{ color: "#FF2323", display: "inline-block" }}>
                        {textToType.split("").map((char, i) => (
                            <span
                                key={i}
                                style={{
                                    opacity: visibleIndexes.includes(i) ? 1 : 0,
                                    transition: "opacity 0.1s linear",
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                    <br />
                    <span style={{ color: "#FF2323", display: "inline-block" }}>
                        {textFor.split("").map((char, i) => (
                            <span
                                key={i}
                                style={{
                                    opacity: visibleIndexes.includes(i + textToType.length) ? 1 : 0,
                                    transition: "opacity 0.1s linear",
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>{" "}
                    appointments?
                </h3>

                <p className="text-center text-[#667085] mt-8">Ambel simplifies business management by providing tools for scheduling appointments, managing bookkeeping, accepting <br /> payments, sharing resources with customers, sending reminders, and running email marketing campaigns.</p>

                <div >
                    <div className="mt-8 flex justify-center gap-5">
                        {/* First Button with Hover Effect */}
                        <div className="relative">
                            <button
                                className="bg-[#19525A] text-white px-5 py-2 rounded-md transition-transform duration-300 hover:scale-105"
                            >
                                Start A Free Trial
                            </button>
                            <div className="absolute -left-12 top-[100%] -translate-y-1/2 mt-3">
                                <img src={point} alt="Pointer" />
                            </div>
                        </div>

                        {/* Second Button with Icon */}
                        <button
                            className="bg-[#F87316] text-white px-6 py-2 rounded-md min-h-[40px] whitespace-nowrap 
    flex gap-2 items-center transition-transform duration-300 hover:scale-105"
                        >
                            <img src={search} alt="Search Icon" className="w-5 h-5" />
                            Find Professionals
                        </button>
                    </div>

                    <div className="flex justify-center mt-7 text-sm gap-5">
                        <div className="bg-[#ECFDF3] px-2 py-1 flex gap-1 rounded-3xl">
                            <img src={success} alt="Success" className="max-w-full h-auto object-contain" />
                            <span className="text-[#027A48] font-medium">No credit card required</span>

                        </div>
                        <div className="bg-[#ECFDF3] px-2 py-1 flex gap-1 rounded-3xl">
                            <img src={success} alt="Success" className="max-w-full h-auto object-contain" />
                            <span className="text-[#027A48] font-medium">Try one month for free</span>

                        </div>
                    </div>

                </div>
                <div className="mt-24 flex justify-center items-center">
                    <img className="ml-28" src={MainImage} alt="Main Image" />
                </div>


            </div>
        </div>
    );
};

export default Banner;