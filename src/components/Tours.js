import { tours } from '../data';
import Tour from './Tour';
import SectionTitle from './SectionTitle';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <SectionTitle textBeginning="featured" textEnding="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
