export default function DecorativeDots({ position = "top-right" }) {
  return (
    <div className={`dots-grid ${position}`}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="dot" />
      ))}
    </div>
  );
}
