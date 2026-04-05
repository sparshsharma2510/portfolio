interface Star {
  x: string;
  y: string;
  size: string;
  label?: string;
}

interface Line {
  x: string;
  y: string;
  w: string;
  r: string;
}

interface ConstellationCardProps {
  title: string;
  stars: Star[];
  lines: Line[];
  className?: string;
}

const ConstellationCard = ({ title, stars, lines, className = "" }: ConstellationCardProps) => {
  return (
    <div className={`constellation-card ${className}`}>
      <div className="constellation-inner">
        <div className="constellation__title">{title}</div>
        {lines.map((line, i) => (
          <div
            key={`line-${i}`}
            className="constellation-line"
            style={{
              "--x": line.x,
              "--y": line.y,
              "--w": line.w,
              "--r": line.r,
            } as React.CSSProperties}
          />
        ))}
        {stars.map((star, i) => (
          <div key={`star-${i}`}>
            <div
              className="constellation-star"
              style={{
                "--x": star.x,
                "--y": star.y,
                "--size": star.size,
              } as React.CSSProperties}
            />
            {star.label && (
              <div
                className="constellation-star-label"
                style={{
                  "--x": star.x,
                  "--y": star.y,
                } as React.CSSProperties}
              >
                {star.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstellationCard;
