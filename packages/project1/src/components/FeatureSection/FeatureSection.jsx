import Home from "../../assets/FeatureSectionIcon/Home.svg"
import Consultant from "../../assets/FeatureSectionIcon/Consultant.svg"
import Payment from "../../assets/FeatureSectionIcon/Payment.svg"
import Targeting from "../../assets/FeatureSectionIcon/Targeting.svg"
import Notification from "../../assets/FeatureSectionIcon/notification.png"
import WebsiteBuilder from "../../assets/FeatureSectionIcon/WebsiteBuilder.svg"
import Report from "../../assets/FeatureSectionIcon/Report.svg"
import Resources from "../../assets/FeatureSectionIcon/Resources.svg"
import Link from "../../assets/FeatureSectionIcon/Linkwhite.svg"

const FeaturesSection = () => {
    const features = [
        {
            title: "Schedule & Booking",
            description:
                "Create, schedule, and send your clients to your Ambil booking page where they can book on any device.",
            icon: Home,
        },
        {
            title: "Live Consultant",
            description:
                "Integrate Meet, Zoom, and Teams to communicate with your customers or clients via video conferencing.",
            icon: Consultant
        },
        {
            title: "Payments",
            description:
                "Send custom invoices, take POS and cash payments, and also accept credit or debit card payments from anywhere.",
            icon: Payment
        },
        {
            title: "Customer Tracking",
            description:
                "Manage customers, marketing emails, and messages. Create records and track via notes or case studies.",
            icon: Targeting
        },
        {
            title: "Notification",
            description:
                "Automatically notify your clients and practitioners with reminders via SMS and email by a single setup.",
            icon: Notification,
        },
        {
            title: "Website Builder",
            description:
                "Get a free website, design, and customize your booking website for your business without any code.",
            icon: WebsiteBuilder,
        },
        {
            title: "Reports",
            description:
                "Powerful data and graphs at your fingertips to monitor day-to-day activities and generate reports.",
            icon: Report
        },
        {
            title: "Resources",
            description:
                "Create and share resources like prescriptions, documents, medical charts, and videos.",
            icon: Resources
        },
    ];

    return (
        <section className="bg-[#19525A] text-white py-16 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-[#FDB022] font-semibold text-center my-5">Features</h3>
                <h2 className="text-[36px] font-semibold mb-4">
                    Solve all your needs with a single software solution
                </h2>
                <p className="text-lg mb-12">
                    This platform streamlines the entire customer management process,
                    saving <br /> businesses time and increasing efficiency. Trusted by over
                    60+ businesses.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#25646C] p-6 rounded-2xl shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:ring-2 hover:ring-white transition-all duration-300 h-[220px]"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <img src={feature.icon} alt="Icon" />
                                </div>
                                <div>
                                    <img src={Link} alt="Link" />
                                </div>
                            </div>
                            <h3 className="text-[20px] text-left font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-left">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
