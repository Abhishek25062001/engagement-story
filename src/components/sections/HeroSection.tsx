import {
  ContentBlock,
  MediaBlock,
  SectionHeader,
  Split,
  Stack,
  Surface,
} from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Typography } from "@/components/ui/Typography";

export function HeroSection() {
  return (
    <SectionWrapper id="hero">
      <Stack gap="xl">
        <Split ratio="majorStart">
          <ContentBlock isWide>
            <SectionHeader eyebrow="Hero" title="HeroSection" />
            <Typography variant="body">
              Introductory copy placeholder for the opening scene.
            </Typography>
          </ContentBlock>
          <MediaBlock>
            <Surface variant="transparent" padding="md">
              <Typography variant="caption">MediaBlock placeholder</Typography>
            </Surface>
          </MediaBlock>
        </Split>
        <Surface variant="transparent" padding="none">
          <Typography variant="label">Scroll indicator placeholder</Typography>
        </Surface>
      </Stack>
    </SectionWrapper>
  );
}
