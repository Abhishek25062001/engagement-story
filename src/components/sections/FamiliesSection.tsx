import { SectionAnimation } from "@/components/animation";
import { Grid, Stack } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider, IdentitySeal, LuxuryCard, Typography } from "@/components/ui";

export function FamiliesSection() {
  return (
    <SectionWrapper
      id="families"
      className="story-section story-section-families"
    >
      <Stack className="story-insert-shell" gap="xl">
        <SectionAnimation variant="fadeUp">
          <Stack className="story-section-intro" gap="sm">
            <Typography variant="overline">Families</Typography>
            <Divider className="story-divider" decorative tone="gold" />
            <Typography className="story-section-copy" variant="body">
              With blessings from both families, this ceremony is shared with
              equal joy and reverence.
            </Typography>
          </Stack>
        </SectionAnimation>

        <SectionAnimation variant="fadeUp">
          <LuxuryCard
            as="article"
            aria-labelledby="families-title"
            className="story-insert story-families-insert"
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

            <Typography
              as="h2"
              className="story-families-title"
              id="families-title"
              variant="title"
            >
              Together with our families
            </Typography>

            <Grid className="story-family-grid" columns="two">
              <Stack className="story-family-group" gap="md">
                <Typography variant="overline">
                  Blessings from Sudesh&apos;s family
                </Typography>
                <Divider
                  className="story-divider story-divider-short"
                  decorative
                  tone="gold"
                />
                <Stack as="ul" className="story-family-list" gap="sm">
                  <Typography as="li" variant="title">
                    Gulab Jaiswal
                  </Typography>
                  <Typography as="li" variant="title">
                    Tara Jaiswal
                  </Typography>
                </Stack>
              </Stack>

              <Stack className="story-family-group" gap="md">
                <Typography variant="overline">
                  Blessings from Hemlata&apos;s family
                </Typography>
                <Divider
                  className="story-divider story-divider-short"
                  decorative
                  tone="gold"
                />
                <Stack as="ul" className="story-family-list" gap="sm">
                  <Typography as="li" variant="title">
                    Surender
                  </Typography>
                  <Typography as="li" variant="title">
                    Shushila
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </LuxuryCard>
        </SectionAnimation>
      </Stack>
    </SectionWrapper>
  );
}
