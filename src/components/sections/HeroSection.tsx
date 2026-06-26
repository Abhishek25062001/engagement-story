import { Cluster, Frame, Stack, Surface } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroOpeningInteraction } from "@/components/sections/HeroOpeningInteraction";
import { Typography } from "@/components/ui/Typography";

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="hero-scene">
      <HeroOpeningInteraction />
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
            <span
              aria-hidden="true"
              className="hero-cover-corner hero-cover-corner-top-left"
            />
            <span
              aria-hidden="true"
              className="hero-cover-corner hero-cover-corner-top-right"
            />
            <span
              aria-hidden="true"
              className="hero-cover-corner hero-cover-corner-bottom-left"
            />
            <span
              aria-hidden="true"
              className="hero-cover-corner hero-cover-corner-bottom-right"
            />
            <Stack className="hero-cover-content" gap="lg">
              <Stack className="hero-cover-primary" gap="md">
                <Typography className="hero-cover-preface" variant="overline">
                  Together with our families
                </Typography>
                <Typography
                  as="h1"
                  className="hero-cover-title"
                  id="hero-cover-title"
                  variant="display"
                >
                  <span>Sudesh</span>
                  <span className="hero-cover-ampersand">&amp;</span>
                  <span>Hemlata</span>
                </Typography>
                <span aria-hidden="true" className="hero-cover-divider" />
                <Typography className="hero-cover-body" variant="body">
                  request the honour of your presence at their Engagement
                  Ceremony
                </Typography>
              </Stack>
              <Stack className="hero-cover-footer" gap="xs">
                <Typography variant="caption">12 July 2026</Typography>
                <Typography variant="caption">Sunday • 12:00 PM</Typography>
              </Stack>
            </Stack>
          </Frame>
        </Surface>

        <Cluster className="hero-open-cue" justify="center" gap="sm">
          <span aria-hidden="true" className="hero-open-cue-line" />
          <Typography variant="label">Open the cover</Typography>
          <span aria-hidden="true" className="hero-open-cue-line" />
        </Cluster>
      </Stack>
    </SectionWrapper>
  );
}
