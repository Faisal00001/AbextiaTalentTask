
import Search from "../../assets/BookAppointments/Search.svg"
import Location from "../../assets/BookAppointments/Location.svg"
import X from "../../assets/BookAppointments/X.png"
import Filter from "../../assets/BookAppointments/Filter.png"
import ArrowRight from "../../assets/BookAppointments/ArrowRight.svg"
import Map from "../../assets/BookAppointments/Map.png"
import payment from "../../assets/BookAppointments/payment.svg"
import Link from "../../assets/FeatureSectionIcon/Linkwhite.svg"
import linkBlack from "../../assets/BookAppointments/linkBlack.png"

import RolesHome from "../../assets/BookAppointments/RolesHome.png"
import Intrgration from "../../assets/BookAppointments/Intrgration.svg"
import Shopping from "../../assets/BookAppointments/Shopping.svg"
import GiftCard from "../../assets/BookAppointments/GiftCard.svg"
import GiftRed from "../../assets/BookAppointments/GiftRed.svg"
import SMSHome from "../../assets/BookAppointments/SMSHome.svg"
import WebsiteWidget from "../../assets/BookAppointments/WebsiteWidget.svg"
import ResourceHome from "../../assets/BookAppointments/ResourceHome.svg"
import DashboardHome from "../../assets/BookAppointments/DashboardHome.svg"
import "./Card.css"
const Appointments = () => {
    return (
        <div className="text-center mt-10 pb-[10vh]">
            {/* Main Section */}
            <main className="w-[80vw] mx-auto">
                <section className="platform-features">
                    <div className="container" id="features-container">
                        <ul id="features">
                            {/* Card 1 */}
                            <li className="feature" id="feature-1">
                                <div className="bg-white text-[#131212]  overflow-hidden grid grid-cols-1 items-stretch p-6 rounded-3xl border border-gray-200 h-[550px]">
                                    {/* Left Side - Text Content */}
                                    <div className="p-4">
                                        <h3 className="text-[36px] font-semibold mb-10">
                                            Find and Book Appointments with Local <br /> and International Professionals
                                        </h3>
                                        {/* Search Inputs */}
                                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                                            {/* Search Input */}
                                            <div className="flex items-center border border-gray-300 rounded-full bg-white px-4 py-2 w-full max-w-[35%]">
                                                <span>
                                                    <img src={Search} alt="" />
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Search Doctor, Therapist, Consultant, Spa"
                                                    className="flex-1 outline-none border-none text-sm px-2"
                                                />
                                            </div>

                                            {/* Location Input */}
                                            <div className="flex items-center border border-gray-300 rounded-full bg-white px-4 py-2 w-full max-w-[35%]">
                                                <span>
                                                    <img src={Location} alt="" />
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Select your location"
                                                    className="flex-1 outline-none border-none text-sm px-2"
                                                />
                                            </div>

                                            {/* Search Button */}
                                            <button className="bg-[#0D99FF] text-white px-6 py-2 rounded-full cursor-pointer transition-all hover:bg-blue-600 text-sm">
                                                Search
                                            </button>
                                        </div>
                                        <div className="w-[79%] mx-auto mt-10">
                                            <div >
                                                <p className="text-left text-[#344054]">Are you looking for</p>
                                            </div>
                                            <div className=" flex justify-start mt-5 gap-3 flex-wrap">
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-3xl text-[#344054] text-sm flex gap-2 items-center">
                                                    Doctor
                                                    <span>
                                                        <img src={X} alt="" />
                                                    </span>
                                                </button>
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-3xl text-[#344054] text-sm flex gap-2 items-center">
                                                    Lawyer
                                                    <span>
                                                        <img src={X} alt="" />
                                                    </span>
                                                </button>
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-3xl text-[#344054] text-sm flex gap-2 items-center">
                                                    Therapist
                                                    <span>
                                                        <img src={X} alt="" />
                                                    </span>
                                                </button>
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-3xl text-[#344054] text-sm flex gap-2 items-center">
                                                    Barber
                                                    <span>
                                                        <img src={X} alt="" />
                                                    </span>
                                                </button>
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-3xl text-[#344054] text-sm flex gap-2 items-center">
                                                    Spa
                                                    <span>
                                                        <img src={X} alt="" />
                                                    </span>
                                                </button>
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-3xl text-[#344054] text-sm flex gap-2 items-center">
                                                    Med Spa
                                                    <span>
                                                        <img src={X} alt="" />
                                                    </span>
                                                </button>
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-3xl text-[#344054] text-sm flex gap-2 items-center">
                                                    Psychiatrist
                                                    <span>
                                                        <img src={X} alt="" />
                                                    </span>
                                                </button>
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-3xl text-[#344054] text-sm flex gap-2 items-center">
                                                    Consultancy firm
                                                    <span>
                                                        <img src={X} alt="" />
                                                    </span>
                                                </button>
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-3xl text-[#175CD3] text-sm">
                                                    More

                                                </button>
                                                <button className="bg-[#F2F4F7] py-2 px-3 rounded-lg text-[#175CD3] text-sm">
                                                    <img src={Filter} alt="" />

                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center gap-2 mt-10">
                                            <div className="text-sm text-[#0D99FF]">
                                                <p>Explore advance search</p>
                                            </div>
                                            <div>
                                                <img src={ArrowRight} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>



                            {/* Card 3 */}
                            <li className="feature" id="feature-3">
                                <div className="feature-content bg-[#00B0AD] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#FFFFFF]">
                                            One brand in one easy to use <br /> system, across all your locations
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#FFFFFF] mt-10">
                                            Give customers a consistent brand experience, online and in person. With one source for all your business information, {"you'll"} unify your guest data, business operations, marketing efforts, and more from one login area.
                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-white underline">Learn more</p>
                                            <img src={Link} alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={Map}
                                            alt="feature three"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>

                            {/* Card 4 */}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#327FF0] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#FFFFFF]">
                                            Invite unlimited team members <br /> and assign custom roles and <br /> permissions
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#FFFFFF] mt-10">
                                            Give customers a consistent brand experience, online and in person. With one source for all your business information, {"you'll"} unify your guest data, business operations, marketing efforts, and more from one login area.
                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-white underline">Learn more</p>
                                            <img src={Link} alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={RolesHome}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>
                            {/* Card 5 */}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#0046B0] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#FFFFFF]">
                                            Securely manage and organize <br /> payments: Cash, Debit, Credit
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#FFFFFF] mt-10">
                                            Customers can securely payment via online credit, debit card, In person POS, Tap to pay and in app wallet. Also can record of cash and other gateway payment for reporting. Ambel integrates with gateways like Stripe, Clover, Square, and PayPal, providing comprehensive support for all your accounting and bookkeeping needs.
                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-white underline">See all payment Options</p>
                                            <img src={Link} alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={payment}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>
                            {/* Card 6 */}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#EFF4FC] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#101828]">
                                            Third party apps Integrations <br /> tailored your business
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#101828] mt-10">
                                            Connect tools like Google Meet, Zoom, Loom, Zapier, Zendesk, and WhatsApp to streamline operations. Ambel also integrates with payment gateways such as Stripe, PayPal, Clover, and Square, allowing you to access all features in one convenient platform.
                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-[#101828] underline">See all Integration</p>
                                            <img src={linkBlack} className="w-5 h-5" alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={Intrgration}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>
                            {/* Card 7 */}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#FD9F00] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#101828]">
                                            Create a free website and <br /> start selling your products <br /> online.
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#101828] mt-10">
                                            With our Online Shop and Inventory Management System, you can easily manage inventory, streamline e-commerce operations, and provide an exceptional shopping experience for your customers. Enjoy full e-commerce functionality to manage products, orders, and inventory seamlessly.
                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-[#101828] underline">Learn more</p>
                                            <img src={linkBlack} className="w-5 h-5" alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={Shopping}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>
                            {/* Card 8*/}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#79A78A] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#FFFFFF]">
                                            Boost Sales with Gift Cards, <br /> Packages, and Memberships
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#FFFFFF] mt-10">
                                            Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.
                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-white underline">Learn more</p>
                                            <img src={Link} alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={GiftCard}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>
                            {/* Card 9 */}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#E41728] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#FFFFFF]">
                                            Boost Sales with Gift Cards, <br /> Packages, and Memberships
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#FFFFFF] mt-10">
                                            Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.
                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-white underline">Learn more</p>
                                            <img src={Link} alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={GiftRed}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>
                            {/* Card 10 */}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#EFFCFA] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#101828]">
                                            Unlimited SMS and Email Reminders, <br /> Notifications, and Marketing
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#101828] mt-10">
                                            Stay connected with your customers effortlessly with unlimited SMS and email options. Send reminders for upcoming bookings, real-time notifications, and targeted marketing emails to keep your audience engaged and informed, all without limits. Boost customer satisfaction and retention while promoting your brand effectively via your own business email.
                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-[#101828] underline">Learn more</p>
                                            <img src={linkBlack} className="w-5 h-5" alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={SMSHome}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>
                            {/* Card 11 */}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#19525A] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#FFFFFF]">
                                            Create an Attractive and <br /> Customized Booking Page <br /> with your own domain
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#FFFFFF] mt-10">
                                            Give your customers a seamless booking experience by personalizing your booking page. Customize colors, layout, and branding to reflect your business’s unique style, and add features like easy navigation, clear time slots, and engaging visuals to make booking effortless and enjoyable. Even build own website with custom domain.
                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-white underline">Learn more</p>
                                            <img src={Link} alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={WebsiteWidget}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>
                            {/* Card 12 */}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#DDF0FF] h-[550px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#101828]">
                                            Streamline Daily Operations <br /> with E-Forms, Prescriptions, <br /> and Med Charts
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#101828] mt-10">
                                            Digitize and organize your daily tasks efficiently with our all-in-one platform. Use customizable E-forms for patient intake and documentation, generate prescriptions instantly for seamless medication management, and maintain accurate med charts to monitor patient treatment plans. Simplify workflows, reduce paperwork, and ensure accurate, secure record-keeping for enhanced operational efficiency and patient care.                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-[#101828] underline">Learn more</p>
                                            <img src={linkBlack} className="w-5 h-5" alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={ResourceHome}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>
                            {/* Card 13 */}
                            <li className="feature" id="feature-4">
                                <div className="feature-content bg-[#FCF8EF] h-[555px] rounded-3xl">
                                    <div className="py-10">
                                        <h2 className="text-[36px] font-semibold text-left text-[#101828]">
                                            Comprehensive Dashboard <br /> with Real-Time Data Insights
                                        </h2>
                                        <p className="leading-relaxed text-left text-[#101828] mt-10">
                                            Access a powerful dashboard with real-time data visualization to monitor key metrics, track performance, and make instant, informed decisions. Gain valuable insights with dynamic charts and analytics, all in one intuitive interface.                                        </p>
                                        <div className="mt-10 flex gap-5">
                                            <p className="text-[#101828] underline">Learn more</p>
                                            <img src={linkBlack} className="w-5 h-5" alt="" />
                                        </div>
                                    </div>
                                    <figure >
                                        <img
                                            src={DashboardHome}
                                            alt="feature three"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
            </main>
        </div>

    );
};

export default Appointments;