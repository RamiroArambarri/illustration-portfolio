import contactSectionStyles from "../styles/contactSection.module.scss"

const ContactSection = () => {
    return (
        <section className={`content-section ${contactSectionStyles['contact-me']}`}>
            <div className={contactSectionStyles['contact-text']}>
                <h2>Contáctame</h2>
                <p>Puedes contactarme enviando un mail a raarambarri@gmail.com</p>
            </div>
        </section>
    )
}

export default ContactSection
