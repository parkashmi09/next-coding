import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustedCompanies from '../components/TrustedCompanies';
import CompanyLogos from '../components/CompanyLogos';
import ClientTestimonials from '../components/ClientTestimonials';
import RecentProjects from '../components/RecentProjects';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <TrustedCompanies />
      <CompanyLogos />
      <ClientTestimonials/>
      <RecentProjects/>
    </>
  );
};

export default Home; 