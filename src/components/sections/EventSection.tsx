import {
  ContentBlock,
  Grid,
  SectionHeader,
  Stack,
} from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LuxuryCard, Typography } from "@/components/ui";

export function EventSection() {
  return (
    <SectionWrapper id="event">
      <Stack gap="lg">
        <SectionHeader eyebrow="Event Details" title="EventSection" />
        <Grid columns="three">
          <LuxuryCard as="article" variant="paper">
            <ContentBlock>
              <Typography variant="overline">Date</Typography>
              <Typography variant="title">Detail placeholder</Typography>
              <Typography variant="body">
                Supporting detail placeholder.
              </Typography>
            </ContentBlock>
          </LuxuryCard>
          <LuxuryCard as="article" variant="paper">
            <ContentBlock>
              <Typography variant="overline">Time</Typography>
              <Typography variant="title">Detail placeholder</Typography>
              <Typography variant="body">
                Supporting detail placeholder.
              </Typography>
            </ContentBlock>
          </LuxuryCard>
          <LuxuryCard as="article" variant="paper">
            <ContentBlock>
              <Typography variant="overline">Ceremony</Typography>
              <Typography variant="title">Detail placeholder</Typography>
              <Typography variant="body">
                Supporting detail placeholder.
              </Typography>
            </ContentBlock>
          </LuxuryCard>
        </Grid>
      </Stack>
    </SectionWrapper>
  );
}
