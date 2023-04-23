import style from "./Header.module.css";
import logo from "../img/logo.jpg";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";

function Header() {
    return (
        <div>
            <header>
                <img src={logo} alt="Logo" title="LogoPhytoterapica" className={style.logo} />

                <div className={style.container}>
                    <input className={style.headerInput} type="text" name="search" id="searchBox" placeholder="O que você procura?" />

                    <div className={style.discount}>
                        <p className={style.headerP}>-5% na primeira compra</p>
                        <div className={style.icon}><h3 className={style.headerH3}><FaPercentage /></h3></div>
                    </div>

                    <h2><FaUser /></h2>
                    <h2 className={style.headerH2}><FaShoppingCart /></h2>
                </div>
            </header>
        </div>
    )
}

export default Header;