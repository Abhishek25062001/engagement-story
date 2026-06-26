import { ContentBlock, SectionHeader, Stack } from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LuxuryCard, Typography } from "@/components/ui";

export function InvitationSection() {
  return (
    <SectionWrapper id="invitation">
      <Stack gap="lg">
        <SectionHeader eyebrow="Invitation" title="InvitationSection" />
        <LuxuryCard variant="paper" padding="lg">
          <ContentBlock isWide>
            <Typography variant="title">Invitation card placeholder</Typography>
            <Typography variant="body">
              Body placeholder for invitation introduction and ceremony context.
            </Typography>
          </ContentBlock>
        </LuxuryCard>
      </Stack>
    </SectionWrapper>
  );
}
