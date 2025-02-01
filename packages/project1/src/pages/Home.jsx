import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Logo from "../assets/Logo/Logo.png"
import vector from "../assets/Logo/Vector1.png"
import Banner from "../components/Banner/Banner";
import Sponsorship from "../components/Sponsorship/Sponsorship";
import PopularBusiness from "../components/PopularBusiness/PopularBusiness";
import FeaturesSection from "../components/FeatureSection/FeatureSection";

import Appointments from "../components/Appointments/Appointments";
import Replace from "../components/Replace/Replace";
import Footer from "../components/Footer/Footer";
const Pricing = lazy(() => import("../../../project2/src/pages/Pricing"));

function HomePage() {
    return (
        <div>
            <Banner />
            <Sponsorship />
            <PopularBusiness />
            <FeaturesSection />
            <Appointments />
            <Replace />
            <Footer />


        </div>
    );
}

function PricingPage() {
    return (
        <div className="h-[700px] bg-[#F5FFFA] pt-24">
            <Suspense fallback={<div>Loading...</div>}>
                <Pricing />
            </Suspense>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <div>
                <nav className="bg-white border-b border-b-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-4">
                            <Link to={'/'}>
                                <img className="w-[135.94px]" src={Logo} alt="Logo" />
                            </Link>

                            <div className="flex space-x-5">
                                <Link className="text-[#595959] hover:text-gray-900  flex items-center gap-2">

                                    Features
                                    <div>
                                        <img src={vector} alt="" />
                                    </div>
                                </Link>
                                <Link to={'/pricing'} className="text-gray-600 hover:text-gray-900 ">Pricing</Link>
                                <Link className="text-[#595959] hover:text-gray-900 flex items-center gap-2">
                                    Solutions
                                    <div>
                                        <img src={vector} alt="" />
                                    </div>
                                </Link>
                                <Link className="text-[#595959] hover:text-gray-900 flex items-center gap-2">
                                    Resources
                                    <div>
                                        <img src={vector} alt="" />
                                    </div>
                                </Link>
                                <Link className="text-[#595959] hover:text-gray-900 =">Find Professionals</Link>
                                <Link className="text-[#595959] hover:text-gray-900  flex items-center gap-2">
                                    Help
                                    <div>
                                        <img src={vector} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div className="flex">
                                <Link className="text-gray-700 hover:text-gray-900 px-5 py-2">Log In</Link>
                                <Link className="bg-[#0089C9] text-white px-5 py-2 rounded-md hover:bg-black  ">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                </Routes>
            </div>
        </Router>
    );
}
