import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <>

            <footer>

                <div className="footer-wp">
                    <div className="container-fluid">
                        <div className="footer-sec">
                            <div className="row pt-3">
                                <div className="col-md-8">
                                    <div className="footertop-left">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span>Plot No-878, Gautam Marg, Rani Sati Nagar, Nirman Nagar, Ranisati Nagar, Jaipur, Rajasthan 302019</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footertop-right text-end">
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i class="fa-brands fa-x-twitter"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footertop-center text-center">
                                    <strong> 2016 / 2024  @MyClinic</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    );
}

export default Footer;