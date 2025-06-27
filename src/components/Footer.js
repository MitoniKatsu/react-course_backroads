import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks
        id="footer-links"
        listClass="footer-links"
        linkClass="footer-link"
      />
      <SocialLinks listClass="footer-icons" linkClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
