import { SectionAnimation } from "@/components/animation";
import { Cluster, Stack } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button, Divider, LuxuryCard, Typography } from "@/components/ui";

export function RSVPSection() {
  return (
    <SectionWrapper id="rsvp" className="story-section story-section-rsvp">
      <Stack className="story-insert-shell" gap="xl">
        <SectionAnimation variant="fadeUp">
          <Stack className="story-section-intro" gap="sm">
            <Typography variant="overline">RSVP</Typography>
            <Divider className="story-divider" decorative tone="gold" />
            <Typography className="story-section-copy" variant="body">
              Kindly share your presence with the family as they prepare to
              welcome you.
            </Typography>
          </Stack>
        </SectionAnimation>

        <SectionAnimation variant="fadeUp">
          <LuxuryCard
            as="article"
            aria-labelledby="rsvp-title"
            className="story-insert story-closing-insert story-rsvp-insert"
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

            <Stack className="story-closing-content" gap="lg">
              <Typography
                as="h2"
                className="story-closing-title"
                id="rsvp-title"
                variant="heading"
              >
                RSVP
              </Typography>
              <Divider
                className="story-divider story-divider-short"
                decorative
                tone="gold"
              />
              <Stack className="story-rsvp-contact" gap="xs">
                <Typography variant="title">Gulab Jaiswal</Typography>
                <Typography className="story-rsvp-phone" variant="label">
                  9999099909
                </Typography>
              </Stack>
              <Cluster justify="center">
                <Button size="sm" variant="primary">
                  Confirm Presence
                </Button>
              </Cluster>
            </Stack>
          </LuxuryCard>
        </SectionAnimation>
      </Stack>
    </SectionWrapper>
  );
}
