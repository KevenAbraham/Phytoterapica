import style from "./Lancamentos.module.css";

function Lancamentos() {
    return (
        <section className={style.lancamentosContainer}>
            <h1 className={style.lancamentosH1}>Destaques</h1>
            <div className={style.lancamentosContainerBox}>
                <div className={style.lancamentosBox}>
                    <div className={style.lancamentosImg1}></div>
                    <h2 className={style.lancamentosH2}>óleo essencial de lavanda (gt frança) - 10ml</h2>
                    <span>R$60,00</span>
                    <p className={style.lancamentosDesc}>(ou em até 3x de R$20,00 sem juros)</p>
                </div>
                <div className={style.lancamentosBox}>
                    <div className={style.lancamentosImg2}></div>
                    <h2 className={style.lancamentosH2}>composto essencial mouvement - 15ml</h2>
                    <span>R$80,00</span>
                    <p className={style.lancamentosDesc}>(ou em até 3x de R$26,66 sem juros)</p>
                </div>
                <div className={style.lancamentosBox}>
                    <div className={style.lancamentosImg3}></div>
                    <h2 className={style.lancamentosH2}>óleo essencial de laranja(orgânico) - 10ml</h2>
                    <span>R$26,00</span>
                    <p className={style.lancamentosDesc}>(ou em até 3x de R$8,66 sem juros)</p>
                </div>
                <div className={style.lancamentosBox}>
                    <div className={style.lancamentosImg4}></div>
                    <h2 className={style.lancamentosH2}>óleo essencial de hortelã-pimenta (menta) - 10ml</h2>
                    <span>R$52,00</span>
                    <p className={style.lancamentosDesc}>(ou em até 3x de R$17,33 sem juros)</p>
                </div>
            </div>
        </section>
    )
}

export default Lancamentos;