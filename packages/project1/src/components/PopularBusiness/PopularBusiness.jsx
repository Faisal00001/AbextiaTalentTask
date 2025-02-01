import { useEffect, useState } from "react";
import DocOpen from "../../assets/TabImages/DoctorOpen.svg";
import LawyerOpen from "../../assets/TabImages/LawyerOpen.svg";
import SaloneOpen from "../../assets/TabImages/SaloneOpen.svg";
import TherapistOpen from "../../assets/TabImages/TherapistOpen.svg";
import FitnessOpen from "../../assets/TabImages/FitnessOpen.svg";
import InstractorOpen from "../../assets/TabImages/InstractorOpen.png";
import ConsultantOpen from "../../assets/TabImages/ConsultantOpen.svg";
import link from "../../assets/TabImages/link.png";

const tabData = [
    { id: "doctor", label: "Doctor", title: "Business solution for healthcare providers", description: "Our software allows Doctors and Medical Professionals to book appointment, manage their patients, provide online prescriptions, overview of their med charts and automatically send reminders for treatments.", image: DocOpen },
    { id: "lawyer", label: "Lawyer", title: "Business solutions for Law Firms", description: "Ambel provides your Law Firm with document automation, case management, scheduling, booking, billing, custom invoice, installment and accounting feature", image: LawyerOpen },
    { id: "salone", label: "Salon", title: "Effortless Scheduling for Spas & Salons", description: "Enable clients to book services online 24/7, reducing phone time, front desk operation, streamlining appointment scheduling for your staff and reminders to reduce no shows, keeping schedules organized.", image: SaloneOpen },
    { id: "therapist", label: "Therapist", title: "Simplify Your Therapy Practice with Intuitive Scheduling", description: "Spend less time on admin tasks with a user-friendly scheduler that handles bookings and cancellations. Stay organized and focus more on what matters most—your clients.", image: TherapistOpen },
    { id: "fitness", label: "Fitness", title: "Seamless Bookings for Trainers", description: "Make client booking easy with 24/7 online scheduling for classes and personal training sessions and diet chart. Offer package, memberships and track client progress—all in one place.", image: FitnessOpen },
    { id: "instructor", label: "Instructor", title: "Effortless Class Scheduling for Instructors", description: "Simplify your class management with scheduling tool designed for instructors. Allow clients to book sessions online, keep all class and client details organized in one place.", image: InstractorOpen },
    { id: "consultancy", label: "Consultancy", title: "Give advice anytime from anywhere", description: "Effortlessly manage client booking with a scheduling solution designed for consulting. Enable clients to book online. Keep track of all sessions and client notes to deliver personalized, professional service every time.", image: ConsultantOpen },
];

const PopularBusiness = () => {
    const [selectedCategory, setSelectedCategory] = useState("doctor");
    const [animateMain, setAnimateMain] = useState(false);
    const [animateTitle, setAnimateTitle] = useState(false);
    const [animateDescription, setAnimateDescription] = useState(false);
    const [animateLink, setAnimateLink] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false); // Mark first render as complete
            return; // Prevent animations on first mount
        }

        // Hide content completely before triggering animations
        setAnimateMain(false);
        setAnimateTitle(false);
        setAnimateDescription(false);
        setAnimateLink(false);

        setTimeout(() => setAnimateMain(true), 50);
        setTimeout(() => setAnimateTitle(true), 300);
        setTimeout(() => setAnimateDescription(true), 600);
        setTimeout(() => setAnimateLink(true), 900);
    }, [selectedCategory, isFirstRender]);// Runs every time the category changes
    return (
        <div className="mt-16 container mx-auto">
            <h3 className="text-center text-[#DC6803] font-semibold">Industries</h3>
            <h3 className="text-[36px] font-semibold text-center mt-3">
                Popular Businesses and Practitioners <br /> who use Ambel
            </h3>
            <p className="text-center mt-5 text-[#667085]">
                Our platform supports a diverse range of professionals, including:
                healthcare providers, medi spas, salons, fitness coaches, law agencies,
                beauty specialists, consultants, and therapists.
            </p>

            {/* Category Buttons */}
            <div className="flex justify-center mt-10">
                <div className="border flex gap-3 rounded-3xl border-gray-300">
                    {tabData.map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-4 py-2 rounded-full transition duration-300 text-sm ${selectedCategory === tab.id ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-slate-200"
                                }`}
                            onClick={() => setSelectedCategory(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Category Content & Images */}
            <div className="flex mt-6 gap-4 overflow-x-auto my-10 overflow-hidden">
                {tabData.map((tab) =>
                    selectedCategory === tab.id ? (
                        <div
                            key={tab.id}
                            className={`bg-[#19525A] text-white p-6 rounded-xl w-72 md:w-[500px] flex gap-3 h-[350px] 
                            transition-all duration-700 ease-in-out
                            ${animateMain ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 translate-y-5 invisible"}`}
                        >
                            <div className="w-[60%]">
                                <span className="bg-white text-black px-3 py-1 text-sm rounded-3xl">
                                    {tab.label}
                                </span>

                                {/* Title fades in first */}
                                <h3
                                    className={`mt-4 font-semibold text-xl transition-opacity duration-700 ${animateTitle ? "opacity-100" : "opacity-0 invisible"
                                        }`}
                                >
                                    {tab.title}
                                </h3>

                                {/* Description fades in second */}
                                <p
                                    className={`text-sm text-[#FFFFFF] mt-3 transition-opacity duration-700 ${animateDescription ? "opacity-100" : "opacity-0 invisible"
                                        }`}
                                >
                                    {tab.description}
                                </p>

                                {/* Learn more link fades in last */}
                                <a
                                    className={`mt-3 flex items-center gap-2 text-white underline transition-opacity duration-700 ${animateLink ? "opacity-100" : "opacity-0 invisible"
                                        }`}
                                >
                                    Learn more <img src={link} alt="icon" className="w-5 h-5" />
                                </a>
                            </div>

                            <div className="w-[40%]">
                                <img className="h-full" src={tab.image} alt={tab.label} />
                            </div>
                        </div>
                    ) : (
                        <div
                            key={tab.id}
                            className="w-[110px] h-92 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
                            onMouseEnter={() => setSelectedCategory(tab.id)}
                        >
                            <img src={tab.image} className="h-full w-full object-cover rounded-lg" alt={tab.label} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default PopularBusiness;
