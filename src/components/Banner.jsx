import style from './Banner.module.css';

function Banner() {
    return (
        <section className={style.sectionBanner}>
            <h1 className={style.bannerH1}>óleos essenciais</h1>
            <p className={style.bannerP}>óleos essenciais são compostos naturiais extraídos da parte aromática das plantas, como folhas, flores, galhos, troncos, raízes e casca de frutos.</p>
        </section>
    )
}

export default Banner;