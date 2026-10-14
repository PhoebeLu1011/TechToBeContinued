export default function SponsorsSection() {
  return (
    <section className="sponsors-panel" aria-labelledby="sponsors-title">
      <h2 id="sponsors-title" className="sr-only">贊助單位</h2>
      {Array.from({ length: 8 }, (_, index) => (
        <div className="sponsor-card" key={index}>
          <span aria-label={`贊助單位 ${index + 1}`}>師大</span>
        </div>
      ))}
    </section>
  );
}
