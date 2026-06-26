import {
  Cluster,
  ContentBlock,
  SectionHeader,
  Stack,
} from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button, LuxuryCard, Typography } from "@/components/ui";

export function RSVPSection() {
  return (
    <SectionWrapper id="rsvp">
      <Stack gap="lg">
        <SectionHeader eyebrow="RSVP" title="RSVPSection" />
        <LuxuryCard variant="elevated" padding="lg">
          <Stack gap="lg">
            <ContentBlock isWide>
              <Typography variant="title">Contact placeholder</Typography>
              <Typography variant="body">
                RSVP instructions and contact details placeholder.
              </Typography>
            </ContentBlock>
            <Cluster gap="sm">
              <Button>Primary placeholder</Button>
              <Button variant="outline">Secondary placeholder</Button>
            </Cluster>
          </Stack>
        </LuxuryCard>
      </Stack>
    </SectionWrapper>
  );
}
