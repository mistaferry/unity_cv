import "/src/styles/Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm } from "@formspree/react";

function Contact() {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
    const [state, handleSubmit] = useForm(formId);

    return (
        <section className="contact-section">
            <div className="contact-content">

                <div className="contact-info">
                    <p className="contact-title">
                        Feel free to reach out
                    </p>

                    <p className="contact-text">
                        I'm always happy to hear about new opportunities, projects, or just connect.
                    </p>

                    <div className="contact-socials">
                        <a href="https://www.linkedin.com/in/ihuryn/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://github.com/mistaferry" target="_blank" rel="noreferrer">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                    />

                    <button type="submit" disabled={state.submitting}>
                        {state.submitting ? "Sending..." : "Send message"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;