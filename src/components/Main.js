import CardsContainer from "./CardsContainer";
import deck from "../deck"
import Footer from "./Footer";
import logo from "../assets/img/logo.png";

export default function Main() {
    return (
        <div className="screen-container">
            <div className="logo-container">
                <img src={logo} alt="logo"></img>
                <h1>ZapRecall</h1>
            </div>
            <CardsContainer />
            <Footer />
        </div>
    )
}