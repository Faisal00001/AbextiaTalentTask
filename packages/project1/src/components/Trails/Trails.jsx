

const Trails = () => {
    return (
        <div>
            <div className="h-[200px] bg-[#F5FFFD] w-[80%] mx-auto flex items-center px-10 rounded-md">
                <div className="w-[70%]">
                    <h3 className="text-[30px] font-semibold text-[#19525A] mb-5">Start your 30-day free trial</h3>
                    <p className="text-lg text-[#19525A]">Join over 100+ practitioner and organization already growing with Ambel</p>
                </div>
                <div className="w-[30%]">
                    <button className="px-5 py-2 mr-5 text-[#344054] border border-gray-200 rounded-lg">Learn more</button>
                    <button className="px-5 py-2 text-white border border-gray-200 rounded-lg bg-[#19525A]">Get started</button>
                </div>
            </div>
        </div>
    );
};

export default Trails;