import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftColumn}>
                <div className={styles.contactDiv}>
                    <span>Feel free to Contact me</span>
                    <form name="contact" method="POST" netlify className={styles.form}>
                        <input type="hidden" name="form-name" value="contact" />

                        <div className={styles.formInput}>
                            <span id="name-label">Name</span>
                            <input
                                name="name"
                                type="text"
                                placeholder="Time's 2006 person of the year"
                                required
                            />
                        </div>
                        <div className={styles.formInput}>
                            <span id="email-label">Email</span>
                            <input
                                name="email"
                                type="email"
                                placeholder="email@example.com"
                                required
                            />
                        </div>
                        <div className={styles.formInput}>
                            <span id="message-label">Message</span>
                            <textarea
                                name="message"
                                placeholder="Type your message here"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.formSubmit}>Send</button>
                    </form>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <span> My socials </span>
                <div className={styles.sociallink}>
                    <a href="https://github.com/sohamdata" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
                <div className={styles.sociallink}>
                    <a href="https://linkedin.com/in/sohamdata" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
                <div className={styles.sociallink}>
                    <a href="https://twitter.com/sohamdata" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
                <div className={styles.sociallink}>
                    <a href="https://tally.so/r/3yMX9x" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faComments} size="2x" />
                    </a>
                    <h3 style={{ fontSize: "0.5rem", color: "#B6EADA" }}>(Temporary contact form)</h3>
                </div>
            </div>
        </div>
    );
}
