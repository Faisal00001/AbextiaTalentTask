import { useState } from "react";

import icon1 from "../../assets/images/icon1.png"

import check from "../../assets/images/Check.png"
import Prac from "../../assets/images/Prac.png"
import Group from "../../assets/images/Group.png"
const Banner = () => {
    const [active, setActive] = useState('Monthly');
    // Inline styles
    const cardStyle = {
        paddingTop: '30px',
        backgroundColor: "#ffffff",

        borderRadius: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        width: "384px",
    };

    const iconContainerStyle = {

        backgroundColor: "#EDFDFD",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        margin: "0 auto 16px",
    };

    const titleStyle = {
        fontSize: "18px",
        fontWeight: "600",
        color: "#19525A",
    };

    const priceStyle = {
        fontSize: "48px",
        fontWeight: "bold",
        color: "#333",
        marginTop: "8px",
    };

    const descriptionStyle = {
        fontSize: "16px",
        color: "#475467",
        display: 'flex',
        gap: '10px',
        justifyContent: 'center'
    };

    const listStyle = {
        textAlign: "left",
        marginTop: "16px",
        paddingLeft: "0",
        listStyleType: "none",
        marginBottom: '40px'
    };

    const listItemStyle = {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "#555",
        fontSize: "16px",
        marginBottom: "14px",
        paddingLeft: '20px',
        paddingRight: '20px',

    };

    const buttonStyle = {
        width: "100%",
        backgroundColor: "#114c4f",
        color: "#ffffff",
        padding: "10px",
        marginTop: "16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",


    };

    const buttonHoverStyle = {

        backgroundColor: "#0d393c",

    };
    return (
        <div className="relative">
            <div className="flex justify-center">
                <div style={{
                    backgroundColor: '#F9F5FF',
                    paddingTop: '0.3rem',
                    paddingBottom: '0.3rem',
                    paddingLeft: '0.6rem',
                    paddingRight: '0.6rem',
                    borderRadius: '1.5rem',


                }}>
                    <p style={{
                        color: '#19525A'
                    }} className="text-sm font-medium">Pricing plans</p>
                </div>


            </div>
            <div style={{
                paddingTop: '20px',
            }} className="flex justify-center">
                <div className="text-center font-semibold">
                    <h3 style={{
                        fontSize: '48px',
                        color: '#307D33'
                    }}>Let’s Get Started. <br />
                        We’ve got a Plan that’s perfect for you. </h3>
                </div>
            </div>
            <div style={{
                paddingTop: '20px',
            }} className="flex justify-center">
                <h3 style={{
                    fontSize: '20px',
                    color: '#0089C9'
                }}> Simple, transparent pricing that grows with you. Try any plan free for 30 days.</h3>
            </div>
            <div>
                <div style={{
                    paddingTop: '50px'
                }} className="flex justify-center">
                    <div
                        style={{
                            display: 'inline-flex',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            backgroundColor: '#e0e0e0'
                        }}
                    >
                        <button className="font-semibold"
                            onClick={() => setActive('Monthly')}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: active === 'Monthly' ? 'white' : '#e0e0e0',
                                border: 'none',
                                outline: 'none',
                                cursor: 'pointer',

                                transition: 'background-color 0.3s',
                                margin: '3px',
                                paddingLeft: '50px',
                                paddingRight: '50px',
                                borderRadius: '5px'

                            }}
                        >
                            Monthly
                        </button>
                        <button className="font-semibold"
                            onClick={() => setActive('Yearly')}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: active === 'Yearly' ? 'white' : '#e0e0e0',
                                border: 'none',
                                outline: 'none',
                                cursor: 'pointer',

                                transition: 'background-color 0.3s',
                                margin: '3px',
                                paddingLeft: '50px',
                                paddingRight: '50px',
                                borderRadius: '5px'

                            }}
                        >
                            Yearly
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)", // 3 equal columns
                    gap: "40px",
                    marginTop: '100px'


                    // Equivalent to Tailwind's gap-5
                }}>
                    <div>
                        <div style={cardStyle}>
                            {/* Icon */}
                            <div style={iconContainerStyle}>
                                <img
                                    src={icon1}
                                    alt="icon"
                                    width="20"
                                    height="20"
                                />
                            </div>

                            {/* Title */}
                            <h3 style={titleStyle}>Pay As You Go</h3>

                            {/* Price */}
                            <h2 style={priceStyle}>10%</h2>
                            <p style={descriptionStyle}>10% from your customer payment</p>

                            {/* Features List */}
                            <ul style={listStyle}>
                                <li style={listItemStyle}> <img src={check} alt="" /> Only pre-paid booking</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  Both practitioner and Organization</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  Up to 5 practitioners in organization</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  2 staff members are allowed</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  Basic chat and email support</li>
                            </ul>

                            {/* Button */}
                            <div style={{
                                paddingTop: '20px',
                                paddingBottom: '20px',
                                backgroundColor: '#F9FAFB',
                                width: '100%',
                                paddingLeft: '30px',
                                paddingRight: '30px'
                            }}>
                                <button
                                    style={buttonStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                                >
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div style={cardStyle}>
                            {/* Icon */}
                            <div style={iconContainerStyle}>
                                <img
                                    src={Prac}
                                    alt="icon"
                                    width="20"
                                    height="20"
                                />
                            </div>

                            {/* Title */}
                            <h3 style={titleStyle}>Practitioner</h3>

                            {/* Price */}
                            <h2 style={priceStyle}>$49</h2>
                            <p style={descriptionStyle}>1 practitioner license/monthly</p>

                            {/* Features List */}
                            <ul style={listStyle}>
                                <li style={listItemStyle}> <img src={check} alt="" /> Only pre-paid booking</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  Both practitioner and Organization</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  Up to 5 practitioners in organization</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  2 staff members are allowed</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  Basic chat and email support</li>
                            </ul>

                            {/* Button */}
                            <div style={{
                                paddingTop: '20px',
                                paddingBottom: '20px',
                                backgroundColor: '#F9FAFB',
                                width: '100%',
                                paddingLeft: '30px',
                                paddingRight: '30px'
                            }}>
                                <button
                                    style={buttonStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                                >
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                    >
                        <div style={cardStyle}>
                            {/* Icon */}
                            <div style={iconContainerStyle}>
                                <img
                                    src={icon1}
                                    alt="icon"
                                    width="20"
                                    height="20"
                                />
                            </div>

                            {/* Title */}
                            <h3 style={titleStyle}>Enterprise</h3>

                            {/* Price */}
                            <h2 style={priceStyle}>$39</h2>
                            <p style={descriptionStyle}>Practitioner Number <img src={Group} alt="" /></p>

                            {/* Features List */}
                            <ul style={listStyle}>
                                <li style={listItemStyle}> <img src={check} alt="" /> Only pre-paid booking</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  Both practitioner and Organization</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  Up to 5 practitioners in organization</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  2 staff members are allowed</li>
                                <li style={listItemStyle}> <img src={check} alt="" />  Basic chat and email support</li>
                            </ul>

                            {/* Button */}
                            <div style={{
                                paddingTop: '20px',
                                paddingBottom: '20px',
                                backgroundColor: '#F9FAFB',
                                width: '100%',
                                paddingLeft: '30px',
                                paddingRight: '30px'
                            }}>
                                <button
                                    style={buttonStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                                >
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;