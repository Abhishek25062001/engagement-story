import { SectionAnimation } from "@/components/animation";
import { Cluster, Stack } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button, Divider, LuxuryCard, Typography } from "@/components/ui";

export function InvitationSection() {
  return (
    <SectionWrapper id="invitation" className="invitation-spread-section">
      <Stack className="invitation-spread-shell" gap="xl">
        <LuxuryCard
          as="article"
          aria-labelledby="invitation-title"
          className="invitation-spread"
          padding="lg"
          variant="paper"
        >
          <span aria-hidden="true" className="invitation-spread-fold" />
          <span
            aria-hidden="true"
            className="invitation-spread-corner top-left"
          />
          <span
            aria-hidden="true"
            className="invitation-spread-corner top-right"
          />
          <span
            aria-hidden="true"
            className="invitation-spread-corner bottom-left"
          />
          <span
            aria-hidden="true"
            className="invitation-spread-corner bottom-right"
          />

          <Stack className="invitation-spread-content" gap="xl">
            <SectionAnimation variant="fadeUp">
              <Stack className="invitation-spread-preface" gap="sm">
                <Typography variant="overline">
                  Together with our families
                </Typography>
                <Divider
                  className="invitation-spread-divider"
                  decorative
                  tone="gold"
                />
                <Typography
                  className="invitation-spread-request"
                  variant="body"
                >
                  We request the honour of your presence
                  <br />
                  at the Engagement Ceremony of
                </Typography>
              </Stack>
            </SectionAnimation>

            <SectionAnimation variant="reveal">
              <Stack className="invitation-spread-names" gap="sm">
                <Typography
                  as="h2"
                  className="invitation-spread-name"
                  id="invitation-title"
                  variant="display"
                >
                  Sudesh Jaiswal
                </Typography>
                <Typography
                  className="invitation-spread-ampersand"
                  variant="title"
                >
                  &amp;
                </Typography>
                <Typography
                  as="p"
                  className="invitation-spread-name"
                  variant="display"
                >
                  Hemlata Jaiswal
                </Typography>
              </Stack>
            </SectionAnimation>

            <SectionAnimation variant="fadeUp">
              <Stack className="invitation-spread-details" gap="md">
                <Stack gap="xs">
                  <Typography
                    className="invitation-spread-date"
                    variant="title"
                  >
                    Sunday, 12 July 2026
                  </Typography>
                  <Typography
                    className="invitation-spread-time"
                    variant="label"
                  >
                    12:00 PM
                  </Typography>
                </Stack>

                <Divider
                  className="invitation-spread-divider invitation-spread-divider-short"
                  decorative
                  tone="gold"
                />

                <Stack className="invitation-spread-venue" gap="xs">
                  <Typography variant="overline">Venue</Typography>
                  <Typography
                    className="invitation-spread-venue-name"
                    variant="title"
                  >
                    Ghar
                  </Typography>
                  <Typography
                    className="invitation-spread-address"
                    variant="body"
                  >
                    WZ-23, Phase 3,
                    <br />
                    Om Vihar
                  </Typography>
                </Stack>

                <Cluster justify="center">
                  <Button size="sm" variant="outline">
                    Maps
                  </Button>
                </Cluster>
              </Stack>
            </SectionAnimation>
          </Stack>
        </LuxuryCard>
      </Stack>
    </SectionWrapper>
  );
}
