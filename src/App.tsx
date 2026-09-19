import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import WhyNow from './components/WhyNow';
import PilotRoadmap from './components/PilotRoadmap';
import InvestorPitch from './components/InvestorPitch';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <InteractiveDemo />
        <WhyNow />
        <PilotRoadmap />
        <InvestorPitch />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
