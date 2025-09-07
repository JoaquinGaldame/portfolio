type IconProps = {
  icon: {
    title: string;
    hex: string;
    svg: string;
  };
  className?: string; 
  size?: number;
  color?: string;
};

export default function Icon({ icon, size = 40, color, className }: IconProps) {
  const pathMatch = icon.svg.match(/d="([^"]+)"/);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color ? color : `#${icon.hex}`}
      className={`${className}`}
    >
      <title>{icon.title}</title>
      {pathMatch && <path d={pathMatch[1]} />}
    </svg>
  );
}