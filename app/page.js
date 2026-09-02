import Hero from "@/components/home/Hero";
import Assurances from "@/components/home/Assurances";
import StaySection from "@/components/home/StaySection";
import PackagesSection from "@/components/home/PackagesSection";
import DestinationsRail from "@/components/home/DestinationsRail";
import MealsSection from "@/components/home/MealsSection";
import FleetSection from "@/components/home/FleetSection";
import EnquirySection from "@/components/home/EnquirySection";
import { getRooms, getPackages, getFleetGroups, getDestinations } from "@/lib/content";
import { roomAmenities } from "@/data/rooms";

export default async function HomePage() {
  const [rooms, packages, fleetGroups, destinations] = await Promise.all([
    getRooms(),
    getPackages(),
    getFleetGroups(),
    getDestinations(),
  ]);

  return (
    <>
      <Hero />
      <Assurances />
      <StaySection rooms={rooms} amenities={roomAmenities} />
      <PackagesSection packages={packages} />
      <DestinationsRail destinations={destinations} />
      <MealsSection />
      <FleetSection groups={fleetGroups} />
      <EnquirySection />
    </>
  );
}
