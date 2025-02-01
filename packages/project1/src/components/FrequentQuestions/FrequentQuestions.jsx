import Frequent from "../../assets/FrequentQuestions/Frequent.png"
import Heart from "../../assets/FrequentQuestions/Heart.png"
import Icon2 from "../../assets/FrequentQuestions/Icon2.png"
import Icon3 from "../../assets/FrequentQuestions/Icon3.png"
import Icon4 from "../../assets/FrequentQuestions/Icon4.png"
import Icon5 from "../../assets/FrequentQuestions/Icon5.png"
import Icon6 from "../../assets/FrequentQuestions/Icon6.png"

const faqData = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
        icon: Heart
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course, you can change your plan anytime you want. You can also upgrade or downgrade your plan.",
        icon: Icon2
    },
    {
        question: "May I need to pay full amount while I update plan in the middle of the month?",
        answer: "No, you don’t need to pay the full amount if you update the practitioner number. Just pay for available days from the next renew.",
        icon: Icon3
    },
    {
        question: "Can I disable the auto renew?",
        answer: "You can disable and enable auto renew anytime also you can choose auto renew from different options.",
        icon: Icon4
    },
    {
        question: "What is your cancellation policy?",
        answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
        icon: Icon5
    },
    {
        question: "Can I run my business Pay As You Go for lifetime?",
        answer: "Yes, you can run your business lifetime with Pay As You Go. No additional charges will be taken for your plan.",
        icon: Icon6
    },
];
const FrequentQuestions = () => {
    return (
        <div className="container mx-auto">
            <div>
                <p className="text-[#19525A] font-semibold">Support</p>
                <h3 className='text-[#101828] text-[36px] font-semibold'>Frequently asked questions</h3>
                <p className="text-[#475467] mt-5">Everything you need to know about the product and billing. Can’t find the <br /> answer you’re looking for? Please chat to our friendly team.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
                {/* Left FAQ Section */}
                <div className="flex-1 space-y-6">
                    {faqData.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <img src={item?.icon} alt="Icon" />
                            <div className="space-y-5">
                                <h3 className="font-semibold text-lg">{item.question}</h3>
                                <p className="text-[#475467]">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Image Section */}
                <div className="flex-1">
                    <img src={Frequent} alt="maids" className="rounded-lg h-[560px]" />
                </div>
            </div>
        </div>
    );
};

export default FrequentQuestions;