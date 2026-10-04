import "/src/styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} Iryna Huryn. Designed & built by me.
            </p>
        </footer>
    );
}

export default Footer;