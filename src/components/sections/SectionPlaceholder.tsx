import {
  ContentBlock,
  Grid,
  SectionHeader,
  Spacer,
  Surface,
} from "@/components/composition";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Typography } from "@/components/ui/Typography";

type SectionPlaceholderProps = Readonly<{
  id: string;
  name: string;
}>;

export function SectionPlaceholder({ id, name }: SectionPlaceholderProps) {
  return (
    <SectionWrapper id={id}>
      <Grid columns="two">
        <SectionHeader eyebrow="Placeholder" title={name} />
        <Surface variant="transparent" padding="none">
          <ContentBlock>
            <Typography variant="body">{name}</Typography>
            <Spacer size="sm" />
          </ContentBlock>
        </Surface>
      </Grid>
    </SectionWrapper>
  );
}
