import { LenisProvider } from "@/providers/LenisProvider";

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export function Providers({ children }: ProvidersProps) {
  return <LenisProvider>{children}</LenisProvider>;
}
