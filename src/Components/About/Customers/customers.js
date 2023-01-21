import AdityaBirla from "../../../Assets/images/adityaBirlaLogo.png"
import NalcoLogo from "../../../Assets/images/nalcoLogo.png"
import VedantaLogo from "../../../Assets/images/vedantaLogo.png"
import BalcoLogo from "../../../Assets/images/balcoLogo.png"

const Customers = () => {
    return (<>
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
    </>
    )
};

export default Customers;