export const siteConfig = {
  name: "Sudesh & Hemlata Engagement Invitation",
  description:
    "The engagement invitation for Sudesh Jaiswal and Hemlata Jaiswal on Sunday, 12 July 2026 at 12:00 PM.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://sudesh-hemlata-engagement.vercel.app",
  event: {
    name: "Sudesh Jaiswal & Hemlata Jaiswal Engagement Ceremony",
    startDate: "2026-07-12T12:00:00+05:30",
    displayDate: "Sunday, 12 July 2026",
    displayTime: "12:00 PM",
    venueName: "Ghar",
    address: "WZ-23 Phase 3, Om Vihar",
  },
  people: {
    groom: "Sudesh Jaiswal",
    bride: "Hemlata Jaiswal",
    rsvp: "Gulab Jaiswal",
    rsvpPhone: "9999099909",
  },
} as const;
