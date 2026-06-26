import { Stack } from "@/components/composition/Stack";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/cn";

type SectionHeaderAlign = "start" | "center";

type SectionHeaderProps = Readonly<{
  align?: SectionHeaderAlign;
  className?: string;
  eyebrow?: string;
  title: string;
}>;

export function SectionHeader({
  align = "start",
  className,
  eyebrow,
  title,
}: SectionHeaderProps) {
  return (
    <Stack
      as="header"
      className={cn(
        "cmp-section-header",
        `cmp-section-header-${align}`,
        className,
      )}
      gap="sm"
    >
      {eyebrow ? <Typography variant="overline">{eyebrow}</Typography> : null}
      <Typography as="h2" variant="heading">
        {title}
      </Typography>
    </Stack>
  );
}
