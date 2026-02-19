type Props = {
  position?: "top" | "bottom";
  className?: string; // svg positioning
  colorClassName?: string; // tailwind color for the wave
};

export default function WaveSeparator({
  position = "top",
  className = "",
  colorClassName = "text-white",
}: Props) {
  const isTop = position === "top";

  return (
    <svg
      className={`absolute left-0 w-full block ${
        isTop ? "top-0 -translate-y-full" : "bottom-0 translate-y-full"
      } ${className}`}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className={`fill-current ${colorClassName}`}
        d={
          isTop
            ? "M0,32 C120,48 240,64 360,58 C480,52 600,26 720,26 C840,26 960,52 1080,58 C1200,64 1320,48 1440,32 L1440,80 L0,80 Z"
            : "M0,48 C120,32 240,16 360,22 C480,28 600,54 720,54 C840,54 960,28 1080,22 C1200,16 1320,32 1440,48 L1440,0 L0,0 Z"
        }
      />
    </svg>
  );
}
