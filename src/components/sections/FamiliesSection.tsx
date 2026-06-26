import {
  ContentBlock,
  Grid,
  SectionHeader,
  Stack,
} from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider, LuxuryCard, Typography } from "@/components/ui";

export function FamiliesSection() {
  return (
    <SectionWrapper id="families">
      <Stack gap="lg">
        <SectionHeader eyebrow="Families" title="FamiliesSection" />
        <Grid columns="two">
          <LuxuryCard as="article" variant="embossed">
            <ContentBlock>
              <Typography variant="overline">Family placeholder</Typography>
              <Typography variant="title">Family group placeholder</Typography>
              <Divider />
              <Typography variant="body">
                Names and relationship copy placeholder.
              </Typography>
            </ContentBlock>
          </LuxuryCard>
          <LuxuryCard as="article" variant="embossed">
            <ContentBlock>
              <Typography variant="overline">Family placeholder</Typography>
              <Typography variant="title">Family group placeholder</Typography>
              <Divider />
              <Typography variant="body">
                Names and relationship copy placeholder.
              </Typography>
            </ContentBlock>
          </LuxuryCard>
        </Grid>
      </Stack>
    </SectionWrapper>
  );
}
