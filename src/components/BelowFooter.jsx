import style from './BelowFooter.module.css';
import vtex from '../img/vtex.png';

function BelowFooter() {
    return (
        <div className={style.belowContainer}>
            <h1 className={style.belowTerms}>política de privacidade</h1>
            <div className={style.belowLine}></div>
            <h1 className={style.belowTerms}>termos e condições</h1>
            <p className={style.belowP}>pythoterapica&copy; 2023 | av nova cantareira, 2627 - são paulo/sp | cnpj: 72.962.327/0001-55</p>
            <img src={vtex} alt="" className={style.vtexImg} />
        </div>
    )
}

export default BelowFooter;