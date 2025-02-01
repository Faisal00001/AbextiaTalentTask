
import Twitter from "../../assets/Footer/Twitter.svg"
import Linkedin from "../../assets/Footer/Linkedin.svg"
import FB from "../../assets/Footer/FB.svg"
import Instagram from "../../assets/Footer/Instagram.svg"
import Youtube from "../../assets/Footer/Youtube.svg"
const Footer = () => {
    return (
        <div className="bg-[#19525A] text-white">
            <footer className="w-full max-w-[78%] mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8  pb-6">
                    <div>
                        <h3 className="font-semibold mb-4 border-b-[2px] border-b-white pb-2 w-[135px]">For Customers</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Find a Practitioner</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Book an Appointment</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Make Payment</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Live Consultant</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Refund</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Shop</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Resources</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold  mb-4 border-b-[2px] border-b-white pb-2 w-[150px]">For Practitioners</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Profile Setup</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Organization Setup</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Create Schedule</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Collaboration</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Withdraw</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Pay Staff</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">QR Code</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Booking Page</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Business Tools</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold  mb-4 border-b-[2px] border-b-white pb-2 w-[95px]">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Plans</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Blog</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Community</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">FAQ</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Reviews</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Refund &amp; Return</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Documentations</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Road Map</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold  mb-4 border-b-[2px] border-b-white pb-2 w-[90px]">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">About Us</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Contact Us</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Career</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Support Center</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Affiliate Program</a></li>
                            <li><a href="#" className="hover:border-l-[1px] hover:border-l-gray-300 hover:pl-3">Trust and Safety</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex space-x-6 border-b border-[#FFFFFF33] pb-6 mt-5 items-center">
                    <span className="text-sm mr-10">Follow Us</span>
                    <div >
                        <img src={Twitter} alt="Twitter" />
                    </div>
                    <div>
                        <img src={Linkedin} alt="Linkedin" />
                    </div>
                    <div>
                        <img src={FB} alt="FB" />
                    </div>
                    <div>
                        <img src={Instagram} alt="Instagram" />
                    </div>
                    <div>
                        <img src={Youtube} alt="Youtube" />
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between flex-wrap gap-4">

                    <div className="text-sm">
                        <p>© 2022 Ambel. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4 text-sm">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;