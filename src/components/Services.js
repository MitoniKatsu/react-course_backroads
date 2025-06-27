import { services } from '../data';
import SectionTitle from './SectionTitle';
import Service from './Service';
const Services = () => {
  return (
    <section className="section services" id="services">
      <SectionTitle textBeginning="our" textEnding="services" />

      <div className="section-center services-center">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};
export default Services;
