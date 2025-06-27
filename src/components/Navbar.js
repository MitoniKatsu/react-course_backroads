import logo from '../images/logo.svg';
import PageLinks from './PageLinks.js';
import SocialLinks from './SocialLinks.js';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks id="nav-links" listClass="nav-links" linkClass="nav-link" />
        <SocialLinks listClass="nav-icons" linkClass="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
