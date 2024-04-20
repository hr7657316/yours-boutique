import './privacy-and-security.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const PrivacyAndSecurity = () => {
    return (
        <>
            <Promotion />
            <Navigation />

            <div className="privacy-and-security-container">
                <div className="privacy-and-policy-text-container">
                    <h3>Privacy and Security</h3>
                    <p>
                        Your privacy is super important to us! Blue
                        Letter Boutique is committed to protecting
                        your privacy and providing you with a safe and
                        secure online experience. This Privacy Policy
                        applies to www.blueletterboutique.com, as well
                        as any other website owned by Blue Letter
                        Boutique or communication sent by Blue Letter
                        Boutique. It discloses the kinds of
                        information we gather, how we may use it, and
                        how we may share it. Please read it carefully.
                        It may be modified periodically. Your
                        continued use of our website signifies your
                        acceptance of this Privacy Policy. As always,
                        feel free to contact us at
                        customerservice@blueletterboutique.com with
                        any questions.
                    </p>
                    <h4>
                        Your Boutique collects personal
                        information
                    </h4>
                    <p>
                        
                    </p>
                    <p>
                       
                    </p>
                    <p>
                       
                    </p>
                    <p>
                       
                    </p>
                    <h4>EMAIL</h4>
                    <p>
                    </p>
                    <h4>social media</h4>
                    <p>
                    
                    </p>
                    <h4>Cookies</h4>
                    <p>
                    </p>
                    <h4>Minors</h4>
                    <p>
                    
                    </p>
                    <h4>contact us</h4>
                    <p>
                       
                    </p>
                    <p>
                        We are located lovely professional university.
                    </p>
                </div>
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default PrivacyAndSecurity;
