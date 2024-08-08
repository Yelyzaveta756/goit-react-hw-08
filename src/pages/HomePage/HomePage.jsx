import DocumentTitle from "../../components/DocumentTitle"
import css from './HomePage.module.css'

export default function HomePage(){
    return (
        <div className={css.welcomeContainer}>
            <DocumentTitle>Home</DocumentTitle>
            <div className={css.header}>
            <h1 className={css.title}>
            Welcome to Your Contacts Manager{' '}
                <span role="img" aria-label="Greeting icon">
                💁‍♀️
                </span>
            </h1>
            <p className={css.subtitle}>
                    Easily manage and organize your contacts all in one place.
                </p>

                <section className={css.featuresSection}>
                <h2 className={css.featuresTitle}>Why Use Our Contacts Manager?</h2>
                <ul className={css.featuresList}>
                    <li className={css.featureItem}>
                        <h3>Quick and Easy Search</h3>
                        <p>Find your contacts by name or phone number instantly.</p>
                    </li>
                    <li className={css.featureItem}>
                        <h3>Secure Storage</h3>
                        <p>Your contacts are stored securely with advanced encryption.</p>
                    </li>
                    <li className={css.featureItem}>
                        <h3>Organized Contacts</h3>
                        <p>Keep your contacts organized with custom labels and categories.</p>
                    </li>
                    <li className={css.featureItem}>
                        <h3>Accessible Anywhere</h3>
                        <p>Access your contacts from any device, anytime, anywhere.</p>
                    </li>
                </ul>
            </section>

            <section className={css.ctaSection}>
                <h2>Get Started</h2>
                <p>Create an account or log in to start managing your contacts.</p>
            </section>
            </div> 
        </div>
    )
}