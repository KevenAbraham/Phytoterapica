import style from './Filtrar.module.css';

function Filtrar() {
    return (
        <section className={style.sectionFiltro}>
            <div className={style.links}>
                <p>home</p>
                <li>óleos essenciais</li>
            </div>
            <div className={style.box}>
                <div className={style.inputFiltro}>
                    <p className={style.boxes}>filtrar</p>
                    <p className={style.boxes}>ordenar por</p>
                </div>
                <p className={style.info}>56 produtos</p>
            </div>
        </section>
    )
}

export default Filtrar;