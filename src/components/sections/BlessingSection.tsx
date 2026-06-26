import { SectionAnimation } from "@/components/animation";
import { Stack } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider, IdentitySeal, LuxuryCard, Typography } from "@/components/ui";

export function BlessingSection() {
  return (
    <SectionWrapper
      id="blessing"
      className="story-section story-section-blessing"
    >
      <Stack className="story-insert-shell" gap="xl">
        <SectionAnimation variant="fadeUp">
          <LuxuryCard
            as="article"
            aria-labelledby="blessing-title"
            className="story-insert story-closing-insert story-blessing-insert"
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

            <Stack className="story-closing-content" gap="xl">
              <Stack className="story-blessing-message" gap="md">
                <Typography variant="overline">Thank You</Typography>
                <Typography
                  as="h2"
                  className="story-blessing-title"
                  id="blessing-title"
                  variant="display"
                >
                  Thank You
                </Typography>
                <Divider
                  className="story-divider story-divider-short"
                  decorative
                  tone="gold"
                />
                <Typography className="story-blessing-copy" variant="body">
                  Your blessings make this day warmer. Thank you for being part
                  of Sudesh and Hemlata&apos;s beginning.
                </Typography>
              </Stack>

              <Stack className="story-blessing-signoff" gap="xs">
                <Typography variant="overline">Best wishes from</Typography>
                <Typography variant="title">
                  Sudesh&apos;s family and Hemlata&apos;s family
                </Typography>
              </Stack>
            </Stack>
          </LuxuryCard>
        </SectionAnimation>
      </Stack>
    </SectionWrapper>
  );
}
