const SocialLink = ({ href, iconClass, linkClass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={linkClass}>
        <i className={iconClass}></i>
      </a>
    </li>
  );
};
export default SocialLink;
