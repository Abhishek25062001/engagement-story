import { SectionAnimation } from "@/components/animation";
import { Grid, Stack } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider, LuxuryCard, Typography } from "@/components/ui";

export function EventSection() {
  return (
    <SectionWrapper id="event" className="story-section story-section-event">
      <Stack className="story-insert-shell" gap="xl">
        <SectionAnimation variant="fadeUp">
          <Stack className="story-section-intro" gap="sm">
            <Typography variant="overline">Event Details</Typography>
            <Divider className="story-divider" decorative tone="gold" />
            <Typography
              as="h2"
              className="story-section-title"
              variant="heading"
            >
              Engagement Ceremony
            </Typography>
          </Stack>
        </SectionAnimation>

        <SectionAnimation variant="fadeUp">
          <LuxuryCard
            as="article"
            aria-labelledby="event-title"
            className="story-insert story-event-insert"
            padding="lg"
            variant="paper"
          >
            <span aria-hidden="true" className="story-insert-corner top-left" />
            <span
              aria-hidden="true"
              className="story-insert-corner top-right"
            />
            <span
              aria-hidden="true"
              className="story-insert-corner bottom-left"
            />
            <span
              aria-hidden="true"
              className="story-insert-corner bottom-right"
            />

            <Stack className="story-event-content" gap="xl">
              <Typography
                as="h3"
                className="story-event-title"
                id="event-title"
                variant="title"
              >
                Engagement Ceremony
              </Typography>

              <Grid className="story-event-grid" columns="three">
                <Stack className="story-event-line" gap="xs">
                  <Typography variant="overline">Day</Typography>
                  <Typography variant="title">Sunday</Typography>
                </Stack>
                <Stack className="story-event-line" gap="xs">
                  <Typography variant="overline">Date</Typography>
                  <Typography variant="title">12 July 2026</Typography>
                </Stack>
                <Stack className="story-event-line" gap="xs">
                  <Typography variant="overline">Time</Typography>
                  <Typography variant="title">12:00 PM</Typography>
                </Stack>
              </Grid>

              <Divider className="story-divider" decorative tone="gold" />

              <Stack className="story-event-venue" gap="xs">
                <Typography variant="overline">Venue</Typography>
                <Typography variant="title">Ghar</Typography>
                <Typography className="story-section-copy" variant="body">
                  WZ-23, Phase 3, Om Vihar
                </Typography>
              </Stack>
            </Stack>
          </LuxuryCard>
        </SectionAnimation>
      </Stack>
    </SectionWrapper>
  );
}
