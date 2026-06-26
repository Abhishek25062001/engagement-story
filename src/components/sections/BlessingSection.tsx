import {
  ContentBlock,
  SectionHeader,
  Stack,
  Surface,
} from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Typography } from "@/components/ui";

export function BlessingSection() {
  return (
    <SectionWrapper id="blessing">
      <Stack gap="lg">
        <SectionHeader eyebrow="Blessing" title="BlessingSection" />
        <Surface variant="transparent" padding="none">
          <ContentBlock isWide>
            <Typography variant="body">
              Closing blessing message placeholder for the final section.
            </Typography>
          </ContentBlock>
        </Surface>
      </Stack>
    </SectionWrapper>
  );
}
