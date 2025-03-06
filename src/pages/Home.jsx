import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustedCompanies from '../components/TrustedCompanies';
import CompanyLogos from '../components/CompanyLogos';
import ClientTestimonials from '../components/ClientTestimonials';
import RecentProjects from '../components/RecentProjects';
import BuildingSoftware from '../components/BuildingSoftware';
import DevelopmentApproach from '../components/Development';
import TechStack from '../components/OurStack';
import Teams from '../components/Teams';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <TrustedCompanies />
      <CompanyLogos />
      <ClientTestimonials/>
      <RecentProjects/>
      <Teams/>
      <BuildingSoftware/>
      <DevelopmentApproach/>
      <TechStack/>
    </>
  );
};

export default Home; 