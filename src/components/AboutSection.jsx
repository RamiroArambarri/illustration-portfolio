import aboutSectionStyles from "../styles/aboutSection.module.scss"
import youtubeIcon from '/images/other/youtube-icon.png'
import photo from '/images/other/foto.jpg'
import instagramIcon from '/images/other/instagram-icon.png'

const AboutSection = () => {
    return (
        <>
            <section className={`content-section ${aboutSectionStyles.about}`} id='about'>
                <div className={aboutSectionStyles['about-text']}>
                    <h2>Ramiro Arambarri</h2>
                    <p>
                        ¡Hola! Soy Ramiro Arambarri, nací el 29 de abril del 2003 en Buenos Aires, Argentina, y desde que tengo memoria
                        me apasiona dibujar. Me gustan los colores vibrantes y agradables. Mis temáticas favoritas son las de fantasía y
                        ficción, y siempre pongo el foco en la emoción que quiero transmitir. Me especializo en ilustraciones digitales
                        en alta resolución, pero he realizado también trabajos en pixel art, y de dibujo tradicional.
                    </p>
                    <a href="https://www.instagram.com/ramiro_arambarri/" target="_blank" role='link' aria-label='Ir a https://www.instagram.com/ramiro_arambarri/'><img src={instagramIcon}
                        className={aboutSectionStyles.social} alt="Instagram" /></a>
                    <a href="https://www.youtube.com/channel/UCwwtu-nl-G_SKWY06ree4rQ" target="_blank"><img
                        src={youtubeIcon} className={aboutSectionStyles.social} alt="Youtube" role='link' aria-label='Ir a https://www.instagram.com/ramiro_arambarri/' /></a>
                </div>
                <img src={photo} className={aboutSectionStyles.photo} />
            </section>
        </>
    )
}

export default AboutSection