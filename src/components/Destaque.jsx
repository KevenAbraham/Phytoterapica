import style from "./Destaque.module.css";

function Destaque() {
    return (
        <section className={style.sectionContainer}>
            <h1 className={style.destaqueH1}>Destaques</h1>
            <div className={style.containerBox}>
                <div className={style.destaqueBox}>
                    <div className={style.destaqueImg1}></div>
                    <h2 className={style.destaqueH2}>óleo essencial de lavanda (gt frança) - 10ml</h2>
                    <span>R$60,00</span>
                    <p className={style.destaqueDesc}>(ou em até 3x de R$20,00 sem juros)</p>
                </div>
                <div className={style.destaqueBox}>
                    <div className={style.destaqueImg2}></div>
                    <h2 className={style.destaqueH2}>composto essencial mouvement - 15ml</h2>
                    <span>R$80,00</span>
                    <p className={style.destaqueDesc}>(ou em até 3x de R$26,66 sem juros)</p>
                </div>
                <div className={style.destaqueBox}>
                    <div className={style.destaqueImg3}></div>
                    <h2 className={style.destaqueH2}>óleo essencial de laranja(orgânico) - 10ml</h2>
                    <span>R$26,00</span>
                    <p className={style.destaqueDesc}>(ou em até 3x de R$8,66 sem juros)</p>
                </div>
                <div className={style.destaqueBox}>
                    <div className={style.destaqueImg4}></div>
                    <h2 className={style.destaqueH2}>óleo essencial de hortelã-pimenta (menta) - 10ml</h2>
                    <span>R$52,00</span>
                    <p className={style.destaqueDesc}>(ou em até 3x de R$17,33 sem juros)</p>
                </div>
            </div>
        </section>
    )
}

export default Destaque;