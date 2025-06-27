import { socialLinks } from '../data';
import SocialLink from './SocialLink';

const SocialLinks = ({ listClass, linkClass }) => {
  return (
    <ul className={listClass}>
      {socialLinks.map((link) => (
        <SocialLink key={link.id} {...link} linkClass={linkClass} />
      ))}
    </ul>
  );
};
export default SocialLinks;
