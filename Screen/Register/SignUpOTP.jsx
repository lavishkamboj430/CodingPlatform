import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import FloatingInput from "../../Components/FloatingInput";
import { useSelector } from "react-redux";

const SignUpOTP = () => {
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const Theme = useSelector((state) => state.Theme.Theme)



    const [otp, setOtp] = useState([
        "",
        "",
        "",
        "",
        "",
        ""
    ]);

    const [timeLeft, setTimeLeft] = useState(60);

    const inputsRef = useRef([]);

    useEffect(() => {

        if (timeLeft <= 0) return;

        const timer = setInterval(() => {

            setTimeLeft((prev) => prev - 1);

        }, 1000);

        return () => clearInterval(timer);

    }, [timeLeft]);

    const HandleChange = (value, index) => {

        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];

        newOtp[index] = value;

        setOtp(newOtp);

        if (
            value &&
            index < otp.length - 1
        ) {

            inputsRef.current[index + 1]?.focus();

        }

    };

    const HandleKeyDown = (e, index) => {

        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {

            inputsRef.current[index - 1]?.focus();

        }

    };

    // const VerifyOTP = async () => {

    //     setloading(true)

    //     const FinalOTP = otp.join("");

    //     if (FinalOTP.length !== 6) {

    //         ErrorMessage("Enter Complete OTP!")
    //         setloading(false)
    //         return;

    //     }

    //     const Data = await Verify_Otp({ OTP: FinalOTP })


    //     if (!Data.Success) {
    //         setloading(false)
    //         return ErrorMessage(Data.Message)
    //     }

    //     SuccessMessage(Data.Message)
    //     setloading(false)

    //     navigate("/reset-password")

    // };

    // const ResendOTP = async () => {

    //     if (timeLeft > 0) return;

    //     console.log("Resending OTP...");



    //     setOtp([
    //         "",
    //         "",
    //         "",
    //         "",
    //         "",
    //         ""
    //     ]);

    //     const Data = await Forgot_Otp_Send({ Email: "" })


    //     if (!Data.Success) {
    //         return ErrorMessage(Data.Message)
    //     }

    //     SuccessMessage(Data.Message)

    //     inputsRef.current[0]?.focus();

    //     setTimeLeft(60);

    // };

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">
            <section className=" absolute z-19  w-full">
                <Navbar Theme={Theme} />
            </section>

            {/* Hero */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src={Theme ? "/Auth-Dark-Background.png" : "/Auth-Light-Background.png"}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <section
                    className="
            relative
            z-10
            mx-auto
            px-5
            pt-14
            text-center
            sm:px-6
            sm:pt-20
            md:pt-24
            lg:pt-28
          "
                >
                    <div className="login-card">
                        <div className="login-card-header">
                            <p className="login-eyebrow">GET STARTED </p>

                            <h2>Verify OTP</h2>

                            <p className="login-description">
                                Enter the 6-digit verification code
                                sent to your email address.
                            </p>
                        </div>


                        <div className="otp-boxes">

                            {otp.map((digit, index) => (

                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    ref={(el) =>
                                        inputsRef.current[index] = el
                                    }
                                    onChange={(e) =>
                                        HandleChange(
                                            e.target.value,
                                            index
                                        )
                                    }
                                    onKeyDown={(e) =>
                                        HandleKeyDown(
                                            e,
                                            index
                                        )
                                    }
                                />

                            ))}

                        </div>
                            <div style={{textAlign:"center"}}>

                        <div className="otp-timer">

                            00:
                            {String(timeLeft).padStart(
                                2,
                                "0"
                            )}

                        </div>

                        <div
                            className={`otp-resend ${timeLeft > 0
                                ? "disabled"
                                : ""
                                }`}
                        // onClick={ResendOTP}
                        >

                            Resend OTP

                        </div>
                            </div>

                        {loading ?
                            <div className="auth-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>

                            </div>
                            :

                            <button
                                type="button"
                                onClick={() => { }}
                                className="auth-btn"
                            >
                                <span>Verify OTP</span>
                                <span className="arrow">→</span>
                            </button>
                        }
                    </div>

                </section>
            </section>

        </div>
    )
}

export default SignUpOTP



