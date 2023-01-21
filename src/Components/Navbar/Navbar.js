import React from "react";
import "./Navbar.css";
import companyLogo from "../../Assets/images/companyLogo.png"
import searchIcon from "../../Assets/images/searchicon.png"
import collapsibleIcon from "../../Assets/images/collapsibleIcon.png"
import { Link } from "react-router-dom";


const Navbar = (props) => {
    return (
        <>
            <div className="navbarSection" style={{ backgroundImage: `url(${props.url})` }}>
                <div className="navbarRow">
                    <div className="companyDetails">
                        <img className="companyLogo" src={companyLogo} />
                        <div className="companyName">Alufluoride Ltd</div>
                    </div>
                    <div className="navbarMenu">
                        <div className="NavbarOption"><Link to="/">Home</Link></div>
                        <div className="NavbarOption dropdown">
                            <button className="dropbtn"><Link to="/about">About</Link>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <Link to="/about/#milestones">Milestones</Link>
                                <Link to="/about/#team">Team</Link>
                                <Link to="/about/#customers">Customers</Link>
                                <Link to="/about/#quality">Quality</Link>
                                <Link to="/about/#environment">Environment</Link>
                                <Link to="/about/#CSR">CSR</Link>
                            </div>
                        </div>
                        <div className="NavbarOption"><Link to="/products">Products</Link></div>
                        <div className="NavbarOption dropdown">
                            <button className="dropbtn"><Link to="/investorRelations">Investor Relations</Link>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <Link to="/investorRelations/#quarterlyReports">Quarterly Reports</Link>
                                <Link to="/investorRelations/#annualReports">Annual Reports</Link>
                                <Link to="/investorRelations/#corporateGovernance">Corporate Governance</Link>
                                <Link to="/investorRelations/#boardMeeting">Board Meeting Intimation</Link>
                                <Link to="/investorRelations/#shareHoldingPattern">Shareholding Pattern</Link>
                                <Link to="/investorRelations/#other">Other</Link>
                            </div>
                        </div>
                        <div className="NavbarOption"><a href="/#news">Latest News</a></div>
                        <div className="NavbarOption dropdown">
                            <button className="dropbtn"><Link to="/contactus">Contact Us</Link>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a href="#">General Enquiry</a>
                                <a href="#">Sales</a>
                                <a href="#">Investors</a>
                                <Link to="/contactUs/careers">Careers</Link>
                            </div>
                        </div>
                        <img className="searchIcon" src={searchIcon}></img>
                    </div>
                </div>
            </div>






            <div className="mobNavbar">
                <div className="collapsibleIcon"><button><img className="mobcollapsibleIcon" src={collapsibleIcon}></img></button></div>
                <div className="mobCompanyDetails"><img className="mobCompanyLogo" src={companyLogo}></img>Aluflouride</div>
                <div className="mobSearch"><img className="mobSearchIcon" src={searchIcon}></img></div>
            </div>

            <div className="mobNavbarOptions">
                <div className="mobOption"><Link to="/">Home</Link></div>

                <div className="mobOption">
                    <details>
                        <summary><Link to="/about">About</Link></summary>
                        <div className="aboutDropdown">
                            <div className="mobSubOption"><Link to="/about/#milestones">Milestones</Link></div>
                            <div className="mobSubOption"><Link to="/about/#teams">Teams</Link></div>
                            <div className="mobSubOption"><Link to="/about/#customers">Customers</Link></div>
                            <div className="mobSubOption"><Link to="/about/#quality">Quality</Link></div>
                            <div className="mobSubOption"><Link to="/about/#environment">Environment</Link></div>
                            <div className="mobSubOption"><Link to="/about/#csr">CSR</Link></div>
                        </div>
                    </details>
                </div>

                <div className="mobOption"><Link to="/products">Products</Link></div>

                <div className="mobOption">
                    <details>
                        <summary><Link to="/investorRelations">Investor Relations</Link></summary>
                        <div className="investorRelationsDropdown">
                            <div className="mobSubOption"><Link to="/investorRelations/#quarterlyReports">Quarterly Reports</Link></div>
                            <div className="mobSubOption"><Link to="/investorRelations/#annualReports">Annual Reports</Link></div>
                            <div className="mobSubOption"><Link to="/investorRelations/#corporateGovernance">Corporate Governance</Link></div>
                            <div className="mobSubOption"><Link to="/investorRelations/#boardMeeting">Board Meeting Intimation</Link></div>
                            <div className="mobSubOption"><Link to="/investorRelations/#shareHoldingPattern">Shareholding Pattern</Link></div>
                            <div className="mobSubOption"><Link to="/investorRelations/#other">Other</Link></div>
                        </div>
                    </details>
                </div>

                <div className="mobOption"><Link to="/#latestNews">Latest News</Link></div>


                <div className="mobOption">
                    <details>
                        <summary><Link to="/contactUs">Contact Us</Link></summary>
                        <div className="contactUsDropdown">
                            <div className="mobSubOption"><Link to="">General Enquiry</Link></div>
                            <div className="mobSubOption"><Link to="">Sales</Link></div>
                            <div className="mobSubOption"><Link to="">Investors</Link></div>
                            <div className="mobSubOption"><Link to="/contactUs/careers">Careers</Link></div>
                        </div>
                    </details>
                </div>

            </div>
        </>
    )
}

export default Navbar;