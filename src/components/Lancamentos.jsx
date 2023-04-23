import style from "./Lancamentos.module.css";

function Lancamentos() {
    return (
        <section className={style.lancamentosContainer}>
            <h1 className={style.lancamentosH1}>Lançamentos</h1>
            <div className={style.lancamentosContainerBox}>
                <div className={style.lancamentosBox}>
                    <div className={style.lancamentosImg1}></div>
                    <h2 className={style.lancamentosH2}>óleo essencial de litsea cubeba (may chang) - 10ml</h2>
                    <span className={style.price}>R$40,00</span><p className={style.esgotado}>Esgotado</p>
                    <p className={style.lancamentosDesc}>(ou em até 3x de R$13,33 sem juros)</p>
                </div>
                <div className={style.lancamentosBox}>
                    <div className={style.lancamentosImg2}></div>
                    <h2 className={style.lancamentosH2}>óleo essencial de erva-baleeira - 5ml</h2>
                    <span>R$89,00</span>
                    <p className={style.lancamentosDesc}>(ou em até 3x de R$29,66 sem juros)</p>
                </div>
                <div className={style.lancamentosBox}>
                    <div className={style.lancamentosImg3}></div>
                    <h2 className={style.lancamentosH2}>espuma de limpeza para barba - 100ml</h2>
                    <span>R$52,00</span>
                    <p className={style.lancamentosDesc}>(ou em até 3x de R$17,33 sem juros)</p>
                </div>
                <div className={style.lancamentosBox}>
                    <div className={style.lancamentosImg4}></div>
                    <h2 className={style.lancamentosH2}>gel dental sangue de dragão - 90g</h2>
                    <span>R$30,00</span>
                    <p className={style.lancamentosDesc}>(ou em até 3x de R$10,00 sem juros)</p>
                </div>
            </div>
        </section>
    )
}

export default Lancamentos;