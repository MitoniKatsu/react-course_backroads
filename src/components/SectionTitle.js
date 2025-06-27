const SectionTitle = ({ textBeginning, textEnding }) => {
  return (
    <div className="section-title">
      <h2>
        {textBeginning} <span>{textEnding}</span>
      </h2>
    </div>
  );
};
export default SectionTitle;
