import { pageLinks } from '../data';
import PageLink from './PageLink';

const PageLinks = ({ id, listClass, linkClass }) => {
  return (
    <ul className={listClass} id={id}>
      {pageLinks.map((link) => (
        <PageLink key={link.id} {...link} linkClass={linkClass} />
      ))}
    </ul>
  );
};
export default PageLinks;
