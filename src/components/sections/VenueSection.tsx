import { SectionAnimation } from "@/components/animation";
import { Cluster, Stack } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import {
  Button,
  Divider,
  IdentitySeal,
  LuxuryCard,
  Typography,
} from "@/components/ui";

export function VenueSection() {
  return (
    <SectionWrapper id="venue" className="story-section story-section-venue">
      <Stack className="story-insert-shell" gap="xl">
        <SectionAnimation variant="fadeUp">
          <Stack className="story-section-intro" gap="sm">
            <Typography variant="overline">Venue</Typography>
            <Divider className="story-divider" decorative tone="gold" />
            <Typography className="story-section-copy" variant="body">
              The celebration gathers at home, held close by family and the
              warmth of a familiar place.
            </Typography>
          </Stack>
        </SectionAnimation>

        <SectionAnimation variant="fadeUp">
          <LuxuryCard
            as="article"
            aria-labelledby="venue-title"
            className="story-insert story-closing-insert story-venue-insert"
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
            <IdentitySeal className="story-seal" />

            <Stack className="story-closing-content" gap="lg">
              <Typography variant="overline">Venue</Typography>
              <Typography
                as="h2"
                className="story-closing-title"
                id="venue-title"
                variant="heading"
              >
                Ghar
              </Typography>
              <Divider
                className="story-divider story-divider-short"
                decorative
                tone="gold"
              />
              <Typography className="story-closing-address" variant="body">
                WZ-23 Phase 3,
                <br />
                Om Vihar
              </Typography>
              <Cluster justify="center">
                <Button size="sm" variant="outline">
                  View on Maps
                </Button>
              </Cluster>
            </Stack>
          </LuxuryCard>
        </SectionAnimation>
      </Stack>
    </SectionWrapper>
  );
}
