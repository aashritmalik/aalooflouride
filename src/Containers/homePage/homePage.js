import Header from "../../Components/Header/Header.js"
import Navbar from "../../Components/Navbar/Navbar.js"
import Footer from "../../Components/Footer/footer.js"
import backgroundImg from "../../Assets/images/navbarBackground.png"
import AdityaBirla from "../../Assets/images/adityaBirlaLogo.png"
import NalcoLogo from "../../Assets/images/nalcoLogo.png"
import VedantaLogo from "../../Assets/images/vedantaLogo.png"
import BalcoLogo from "../../Assets/images/balcoLogo.png"
import "./homePage.css"

const HomePage = () => {
    return (
        <>
            <Header />
            <Navbar url={backgroundImg} />
            <div className="homepageIntrobox">
                <div className="introBoxHello"> Hello </div>
                <div className="introBoxPara"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div className="introBoxButton"><button type="button" class="btn btn-success">Know More</button></div>
            </div>


            <div className="customerBox">
                <hr />
                <div className="domesticCustomers">
                    <div className="domesticHeading">Domestic Customers</div>
                    <div className="domesticImages">
                        <img className="brandLogo" src={AdityaBirla}></img>
                        <img className="brandLogo" src={NalcoLogo}></img>
                        <img className="brandLogo" src={VedantaLogo}></img>
                        <img className="brandLogo" src={BalcoLogo}></img>
                    </div>
                </div>

                <div className="exportCustomers">
                    <div className="exportHeading">Export Customers</div>
                    <div className="exportImages">
                        <img className="brandLogo" src={AdityaBirla}></img>
                        <img className="brandLogo" src={BalcoLogo}></img>
                        <img className="brandLogo" src={NalcoLogo}></img>
                    </div>
                </div>
                <hr />
            </div>

            <div className="newsBox" id="news">
                <div className="newsHeading">Latest News</div>
                <div className="newsLines grayNews">Founder Director Venkat Akkinei is appointed as the new Managing Director</div>
                <div className="newsLines whiteNews">Founder Director Venkat Akkinei is appointed as the new Managing Director</div>
                <div className="newsLines grayNews">Founder Director Venkat Akkinei is appointed as the new Managing Director</div>
                <div className="newsLines whiteNews">Founder Director Venkat Akkinei is appointed as the new Managing Director</div>
                <div className="newsLines grayNews">Founder Director Venkat Akkinei is appointed as the new Managing Director</div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;