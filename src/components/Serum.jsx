import style from "./Serum.module.css";

function Serum() {
    return (
        <div className={style.serumContainer}>
            <div className={style.serumText}>
                <div className={style.serumTextArea}>
                    <h1 className={style.serumTitle}>sérum bella pelle</h1>
                    <h2 className={style.serumDescTitle}>Proteção e cuidado para peles maduras</h2>
                </div>
                <p className={style.serumDesc}>Fitocosmético hidratante, possui um complexo de 10 óleos essenciais em sua formulação, bem como os óleos vegetais de Jojoba e Rosa Mosqueta. Este sérum é indicado para prevenir e amenizar os sinais da idade, trazendo firmeza à pele, suavizando rugas e linhas de expressão, melhorando o viço e oferecendo luminosidade.</p>
                <button className={style.serumButton}>conheça</button>
            </div>
            <div className={style.serumImg}></div>
        </div>
    )
}

export default Serum;