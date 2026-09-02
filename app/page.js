import Hero from "@/components/home/Hero";
import DestinationsRail from "@/components/home/DestinationsRail";
import TrustStats from "@/components/home/TrustStats";
import PackagesSection from "@/components/home/PackagesSection";
import StaySection from "@/components/home/StaySection";
import HowItWorks from "@/components/home/HowItWorks";
import MealsSection from "@/components/home/MealsSection";
import FleetSection from "@/components/home/FleetSection";
import FaqSection from "@/components/home/FaqSection";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import {
  getRooms,
  getPackages,
  getVehicles,
  getDestinations,
} from "@/lib/content";

export default async function HomePage() {
  const [rooms, packages, vehicles, destinations] = await Promise.all([
    getRooms(),
    getPackages(),
    getVehicles(),
    getDestinations(),
  ]);

  return (
    <>
      <Hero />
      <PackagesSection packages={packages} />
      <StaySection rooms={rooms} />
      <FleetSection vehicles={vehicles} />
      <DestinationsRail destinations={destinations} />
      <TrustStats
        rooms={rooms.length}
        vehicles={vehicles.length}
        packages={packages.length}
        destinations={destinations.length}
      />
      <HowItWorks />
      <MealsSection />
      <FaqSection />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
