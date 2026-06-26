import {
  ContentBlock,
  Grid,
  MediaBlock,
  SectionHeader,
  Stack,
} from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LuxuryCard, Typography } from "@/components/ui";

export function CoupleSection() {
  return (
    <SectionWrapper id="couple">
      <Stack gap="lg">
        <SectionHeader eyebrow="Couple" title="CoupleSection" />
        <Grid columns="two">
          <LuxuryCard as="article" variant="minimal" padding="sm">
            <Stack gap="md">
              <MediaBlock>
                <Typography variant="caption">
                  Profile media placeholder
                </Typography>
              </MediaBlock>
              <ContentBlock>
                <Typography variant="title">Person placeholder</Typography>
                <Typography variant="body">
                  Short profile placeholder for future couple copy.
                </Typography>
              </ContentBlock>
            </Stack>
          </LuxuryCard>
          <LuxuryCard as="article" variant="minimal" padding="sm">
            <Stack gap="md">
              <MediaBlock>
                <Typography variant="caption">
                  Profile media placeholder
                </Typography>
              </MediaBlock>
              <ContentBlock>
                <Typography variant="title">Person placeholder</Typography>
                <Typography variant="body">
                  Short profile placeholder for future couple copy.
                </Typography>
              </ContentBlock>
            </Stack>
          </LuxuryCard>
        </Grid>
      </Stack>
    </SectionWrapper>
  );
}
