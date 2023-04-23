import style from './SecondInformation.module.css';
import dog from '../img/dogsIcon.png'
import vegan from '../img/veganIcon.png'
import water from '../img/waterIcon.png'

function SecondInformation() {
    return (
        <div className={style.secondInfoContainer}>
            <div className={style.secondInfoBox}>
                <img src={vegan} alt="" className={style.secondInfoImg} />
                <div className={style.secondInfoText}>
                    <h1 className={style.secondInfoH1}>Vegano</h1>
                    <p className={style.secondInfoP}>sem componentes de origem animal</p>
                </div>
            </div>

            <div className={style.secondInfoLine}></div>

            <div className={style.secondInfoBox}>
                <img src={dog} alt="" className={style.secondInfoImg} />
                <div className={style.secondInfoText}>
                    <h1 className={style.secondInfoH1}>Cruelty-Free</h1>
                    <p className={style.secondInfoP}>não testado em animais</p>
                </div>
            </div>

            <div className={style.secondInfoLine}></div>

            <div className={style.secondInfoBox}>
                <img src={water} alt="" className={style.secondInfoImg} />
                <div className={style.secondInfoText}>
                    <h1 className={style.secondInfoH1}>100% Puro</h1>
                    <p  className={style.secondInfoP}>óleos puros e naturais</p>
                </div>
            </div>

        </div>
    )
}

export default SecondInformation;