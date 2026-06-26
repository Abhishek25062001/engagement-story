import {
  ContentBlock,
  MediaBlock,
  SectionHeader,
  Split,
  Stack,
} from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LuxuryCard, Typography } from "@/components/ui";

export function VenueSection() {
  return (
    <SectionWrapper id="venue">
      <Stack gap="lg">
        <SectionHeader eyebrow="Venue" title="VenueSection" />
        <Split align="start" ratio="majorEnd">
          <LuxuryCard variant="goldOutline">
            <ContentBlock>
              <Typography variant="overline">Address</Typography>
              <Typography variant="title">Venue address placeholder</Typography>
              <Typography variant="body">
                Address, access notes, and nearby landmark placeholder.
              </Typography>
            </ContentBlock>
          </LuxuryCard>
          <MediaBlock>
            <Typography variant="caption">Map placeholder</Typography>
          </MediaBlock>
        </Split>
      </Stack>
    </SectionWrapper>
  );
}
