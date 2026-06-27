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
import { siteConfig } from "@/config/site";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteConfig.event.name,
  description: siteConfig.description,
  startDate: siteConfig.event.startDate,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  url: siteConfig.url,
  location: {
    "@type": "Place",
    name: siteConfig.event.venueName,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.event.address,
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Person",
    name: siteConfig.people.rsvp,
    telephone: siteConfig.people.rsvpPhone,
  },
} as const;

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
