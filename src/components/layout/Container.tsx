import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<TElement extends ElementType = "div"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Container<TElement extends ElementType = "div">({
  as,
  children,
  className = "",
  ...props
}: ContainerProps<TElement>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`mx-auto w-full max-w-[var(--container-max)] px-6 sm:px-8 lg:px-10 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
