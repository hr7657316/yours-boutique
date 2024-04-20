import './footer.styles.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer-container">
            <p>
                &copy; {year} Your Butique. All Rights
                Reserved
            </p>
        </div>
    );
};

export default Footer;
