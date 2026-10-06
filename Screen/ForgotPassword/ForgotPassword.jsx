import React from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import FloatingInput from "../../Components/FloatingInput";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
    const navigate = useNavigate()
    const Theme = useSelector((state)=>state.Theme.Theme)
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">
            <section className=" absolute z-19  w-full">
                <Navbar Theme={Theme} />
            </section>

            {/* Hero */}
            <section className="relative h-screen w-full overflow-hidden">
                <img
                    src={Theme?"/Auth-Dark-Background.png":"/Auth-Light-Background.png"}
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

                            <h2>Forgot Password</h2>

                            <p className="login-description">
                                Join CodeBase and start building your ideas. It's free and only takes and minute.
                            </p>
                        </div>

                        <div className="form">
                            <FloatingInput label="Email address" />

                            <button
                                type="button"
                                onClick={() => { }}
                                className="auth-btn"
                            >
                                <span>Send OTP</span>
                                <span className="arrow">→</span>
                            </button>

                            <div className="or-divider">
                                <span></span>
                                <p>OR</p>
                                <span></span>
                            </div>



                            <p className="bottom-text">
                                Back To

                                <span onClick={() => navigate("/login")}>
                                    {"  "} Login
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
            </section>

        </div>
    )
}

export default ForgotPassword
