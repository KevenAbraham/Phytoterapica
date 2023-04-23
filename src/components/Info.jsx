import style from './Info.module.css';
import Pix from '../img/logoPix.png';
import Vegan from '../img/veganIcon.png';
import Water from '../img/waterIcon.png';
import Truck from '../img/truckIcon.png';

function Info() {
    return (
        <div className={style.information}>
            <div className={style.box}>
                <img src={Pix} alt="" className={style.imgInfo} />
                <div className={style.textBox}>
                    <h1 className={style.titleBox}>5% de desconto</h1>
                    <p className={style.descBox}>para pagamentos à vista no Pix</p>
                </div>
            </div>
            <div className={style.box}>
                <img src={Vegan} alt="" className={style.imgInfo} />
                <div className={style.textBox}>
                    <h1 className={style.titleBox}>vegano</h1>
                    <p className={style.descBox}>sem componentes de origem animal</p>
                </div>
            </div>
            <div className={style.box}>
                <img src={Water} alt="" className={style.imgInfo} />
                <div className={style.textBox}>
                    <h1 className={style.titleBox}>100% puro</h1>
                    <p className={style.descBox}>óleos puros e naturais</p>
                </div>
            </div>
            <div className={style.box}>
                <img src={Truck} alt="" className={style.imgInfo} />
                <div className={style.textBox}>
                    <h1 className={style.titleBox}>frete grátis para todo o brasil</h1>
                    <p className={style.descBox}>em compras acima de R$200,00</p>
                </div>
            </div>
        </div>
    )
}
export default Info;