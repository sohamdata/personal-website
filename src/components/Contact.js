import { useRef } from 'react';
import styles from './Contact.module.css';

export default function Hash() {
    const inputs = useRef({ name: "", email: "", message: "" })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftColumn}>
                <div className={styles.contactDiv}>
                    <span>Feel free to Contact me</span>
                    <form className={styles.form}>
                        <div className={styles.formInput}>
                            <span>Name</span>
                            <input
                                name="name"
                                placeholder="Time's 2006 person of the year"
                                onChange={(e) => (inputs.current.name = e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formInput}>
                            <span>Email</span>
                            <input
                                name="email"
                                type="email"
                                placeholder="email@example.com"
                                required
                            />
                        </div>
                        <div className={styles.formInput}>
                            <span>Message</span>
                            <textarea
                                name="message"
                                placeholder="Type your message here"
                                onChange={(e) => (inputs.current.message = e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <input
                            type="submit"
                            value="Send"
                            className={styles.formSubmit}
                        />
                    </form>
                </div>
            </div>
            <div className={styles.rightColumn}>
                <span>Connect with me:</span>
                <div>
                    <a href="https://facebook.com/yourusername">Facebook</a>
                    <a href="https://twitter.com/yourusername">Twitter</a>
                    <a href="https://instagram.com/yourusername">Instagram</a>
                    <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
                </div>
            </div>
        </div>

    );
}