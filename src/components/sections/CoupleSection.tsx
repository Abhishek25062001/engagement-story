import { SectionAnimation } from "@/components/animation";
import { Grid, Stack } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider, LuxuryCard, Typography } from "@/components/ui";

export function CoupleSection() {
  return (
    <SectionWrapper id="couple" className="story-section story-section-couple">
      <Stack className="story-insert-shell" gap="xl">
        <SectionAnimation variant="fadeUp">
          <Stack className="story-section-intro" gap="sm">
            <Typography variant="overline">The Couple</Typography>
            <Divider className="story-divider" decorative tone="gold" />
            <Typography className="story-section-copy" variant="body">
              A quiet beginning, marked with family blessings and a promise held
              with grace.
            </Typography>
          </Stack>
        </SectionAnimation>

        <SectionAnimation variant="fadeUp">
          <LuxuryCard
            as="article"
            aria-labelledby="couple-title"
            className="story-insert story-couple-insert"
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
            <span aria-hidden="true" className="identity-seal story-seal">
              <span>S</span>
              <span>&amp;</span>
              <span>H</span>
            </span>

            <Grid className="story-couple-grid" columns="two">
              <Stack className="story-person" gap="md">
                <span aria-hidden="true" className="story-monogram">
                  SJ
                </span>
                <Typography
                  as="h2"
                  className="story-person-name"
                  id="couple-title"
                  variant="heading"
                >
                  Sudesh Jaiswal
                </Typography>
              </Stack>

              <Stack className="story-person" gap="md">
                <span aria-hidden="true" className="story-monogram">
                  HJ
                </span>
                <Typography
                  as="p"
                  className="story-person-name"
                  variant="heading"
                >
                  Hemlata Jaiswal
                </Typography>
              </Stack>
            </Grid>

            <Stack className="story-couple-symbol" gap="sm">
              <Divider
                className="story-divider story-divider-short"
                decorative
                tone="gold"
              />
              <Typography className="story-ampersand" variant="title">
                &amp;
              </Typography>
              <Divider
                className="story-divider story-divider-short"
                decorative
                tone="gold"
              />
            </Stack>
          </LuxuryCard>
        </SectionAnimation>
      </Stack>
    </SectionWrapper>
  );
}
