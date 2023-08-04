import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as LeetCode } from '../../assets/images/leetcode.svg'

export default function Contact() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftColumn}>
                <div className={styles.contactDiv}>
                    <span>Feel free to Contact me</span>
                    <form name="contact" method="POST" data-netlify="true" className={styles.form}>
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
                <span style={{ marginBottom: "20px" }}> Find me on </span>
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
                <div className={styles.sociallink} style={{ width: '40px', height: '40px', alignSelf: 'center' }}>
                    <a href="https://leetcode.com/ssohamm/" target="_blank" rel="noreferrer" >
                        <LeetCode />
                    </a>
                </div>
                <div className={styles.sociallink}>
                    <a href="https://twitter.com/sohamdata" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
            </div>
        </div >
    );
}
