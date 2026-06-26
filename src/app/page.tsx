import { PageShell } from "@/components/layout/PageShell";
import {
  BlessingSection,
  CoupleSection,
  EventSection,
  FamiliesSection,
  HeroSection,
  InvitationSection,
  RSVPSection,
  VenueSection,
} from "@/sections";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <InvitationSection />
      <CoupleSection />
      <EventSection />
      <FamiliesSection />
      <VenueSection />
      <RSVPSection />
      <BlessingSection />
    </PageShell>
  );
}
