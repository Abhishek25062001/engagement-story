import { Cluster, Frame, Stack, Surface } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Typography } from "@/components/ui/Typography";

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="hero-scene">
      <Stack className="hero-stage" gap="xl">
        <Surface
          as="article"
          aria-labelledby="hero-cover-title"
          className="hero-cover"
          padding="none"
          variant="transparent"
        >
          <span aria-hidden="true" className="hero-cover-shadow" />
          <span aria-hidden="true" className="hero-cover-inner-layer" />
          <Frame className="hero-cover-paper" variant="paper">
            <Stack className="hero-cover-content" gap="lg">
              <Stack className="hero-cover-primary" gap="md">
                <Typography className="hero-cover-eyebrow" variant="overline">
                  Handcrafted Invitation
                </Typography>
                <Typography
                  as="h1"
                  className="hero-cover-title"
                  id="hero-cover-title"
                  variant="display"
                >
                  Engagement Invitation
                </Typography>
                <Typography className="hero-cover-body" variant="body">
                  Cover message placeholder for a private celebration.
                </Typography>
              </Stack>
              <Stack className="hero-cover-footer" gap="xs">
                <Typography variant="caption">Names Placeholder</Typography>
                <Typography variant="caption">Date Placeholder</Typography>
              </Stack>
            </Stack>
          </Frame>
        </Surface>

        <Cluster className="hero-open-cue" justify="center" gap="sm">
          <span aria-hidden="true" className="hero-open-cue-line" />
          <Typography variant="label">Open invitation</Typography>
          <span aria-hidden="true" className="hero-open-cue-line" />
        </Cluster>
      </Stack>
    </SectionWrapper>
  );
}
