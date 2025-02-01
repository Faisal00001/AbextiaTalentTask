
import SponsorshipImage from "../../assets/Sponsorship/image.png"
const Sponsorship = () => {
    return (
        <div className="bg-[#FAFAFA] py-16">
            <div className="w-[60%] mx-auto ">
                <p className="text-center text-[#475467]">

                    Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the World


                </p>
            </div>
            <div className="flex justify-center mt-10">
                <img src={SponsorshipImage} alt="Sponsorship" />
            </div>
        </div>
    );
};

export default Sponsorship;