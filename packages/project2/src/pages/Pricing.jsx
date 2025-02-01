import FeaturesSection from "../../../project1/src/components/FeatureSection/FeatureSection";
import FrequentQuestions from "../../../project1/src/components/FrequentQuestions/FrequentQuestions";
import Footer from "../../../project1/src/components/Footer/Footer";
import Trails from "../../../project1/src/components/Trails/Trails";
import Banner from "../components/Banner/Banner";


export default function Pricing() {
    return (
        <div>
            <Banner />
            <div style={{
                marginTop: '100px'
            }}>
                <Trails />
            </div>
            <div style={{
                marginTop: '100px'
            }}>
                <FeaturesSection />
            </div>
            <div style={{
                marginTop: '100px'
            }}>
                <FrequentQuestions />
            </div>
            <div style={{
                marginTop: '100px'
            }}>
                <Footer />
            </div>

        </div>
    );
}
