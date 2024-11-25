import React, { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import axios from "axios";
import './LoginToolTip.css';

const LoginTooltip = ({ onClose, onLoggedIn }) => {
    const [sentOtp, setSentOtp] = useState(false);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const tooltipRef = useRef();

    const url = "http://localhost:5000";

    // Close tooltip on clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    // Send OTP function
    const sendOtp = async () => {
        try {
            console.log(email)
            setLoading(true);
            setError("");
            // Call your backend API to send OTP
            const response = await axios.post(url + "/api/v1/users/send-otp", { email });
            console.log('response: ', response.status)
            if (response.status === 200) {
                setSentOtp(true);
            } else {
                setError("Failed to send OTP. Please try again.");
            }
        } catch (err) {
            setError("An error occurred while sending OTP.");
        } finally {
            setLoading(false);
        }
    };

    // Verify OTP function
    const verifyOtp = async () => {
        try {
            setLoading(true);
            setError("");
            // Call your backend API to verify OTP
            const response = await axios.post(url + "/api/v1/users/verify-otp-login", { email, otp });
            if (response.status === 200) {
                alert("Logged in successfully!");
                // Perform any post-login actions here (like redirecting the user)
                onClose();
                onLoggedIn(email);
            } else {
                setError("Invalid OTP. Please try again.");
            }
        } catch (err) {
            setError("An error occurred during OTP verification.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-tooltip" ref={tooltipRef}>
            <FiX className="close-icon" onClick={onClose} />

            <div className="login-item">
                {!sentOtp && (
                    <input
                        type="text"
                        placeholder="Enter Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                )}
                {sentOtp && (
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                )}
            </div>

            {error && <div className="error-message">{error}</div>}
            
            {!sentOtp && (
                <button className="otp-button" onClick={sendOtp} disabled={loading || !email}>
                    {loading ? "Sending OTP..." : "Get OTP"}
                </button>
            )}

            {sentOtp && (
                <>
                    <button className="login-button" onClick={verifyOtp} disabled={loading || !otp}>
                        {loading ? "Verifying..." : "Log In"}
                    </button>
                    <button className="otp-button" onClick={sendOtp} disabled={loading}>
                        Resend OTP
                    </button>
                </>
            )}
        </div>
    );
};

export default LoginTooltip;
