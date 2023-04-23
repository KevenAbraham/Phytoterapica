import style from './Footer.module.css';
import cards from '../img/cards.png';
import logo from '../img/logo.jpg';
import safeSearch from '../img/safeSearch.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className={style.textArea}>
                <h1>Sobre</h1>
                <p>quem somos (a empresa)</p>
                <p>nossos contatos</p>
                <p>trabalhe conosco</p>
                <p>fale conosco (SAC)</p>
                <p>consultora</p>
                <p>atacado</p>
            </div>
            <div className={style.textArea}>
                <h1>Suporte</h1>
                <p>política de entrega</p>
                <p>política de troca e devoluções</p>
                <p>ingestão de óleos essenciais</p>
                <p>cromatografia</p>
                <p className={style.pSpace}>entrega de dados - JKD ME</p>
                <p>privacidade@phytoterapica.com.br</p>
            </div>
            <div className={style.textArea}>
                <h1>Área do Cliente</h1>
                <p>login</p>
                <p>carrinho</p>
                <p>minha conta</p>
                <p>meus pedidos</p>
                <p>preferências de cookies</p>
            </div>
            <div className={style.payment}>
                <h1>Formas de Pagamento</h1>
                <img src={cards} alt="" className={style.cards} />                
            </div>
            <div className={style.lastItem}>
                <img src={logo} alt="" className={style.footerLogoImg} />
                <div className={style.footerLine}></div>
                <div className={style.socialMedia}>
                    <div className={style.socialBox}><p><FaInstagram /></p></div>
                    <div className={style.socialBox}><p><FaFacebookF /></p></div>
                    <div className={style.socialBox}><p><FaWifi /></p></div>
                    <div className={style.socialBox}><p><FaYoutube /></p></div>
                    <div className={style.socialBox}><p><FaTwitter /></p></div>
                </div>
                <div className={style.footerLine}></div>
                <img src={safeSearch} alt="" className={style.safeSearchImg} />
            </div>
        </footer>
    )
}

export default Footer;