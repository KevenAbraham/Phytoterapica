import style from "./Newsletter.module.css";

function Newsletter() {
    return (
        <div className={style.newsBackground}>
            <div className={style.textArea}>
                <h1 className={style.newsH1}>inscreva-se</h1>
                <p className={style.newsDesc}>e receba novidades de promoções</p>
            </div>
            
            <input type="text" placeholder="Seu e-mail" className={style.newsInput} />

            <button className={style.newsButton}>assinar Newsletter</button>
        </div>
    )
}

export default Newsletter;