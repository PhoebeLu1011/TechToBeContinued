import SponsorGrid from '../../../components/Sponsors/SponsorGrid';

export default function SponsorsSection() {
  return (
    <section className="sponsors-panel" aria-labelledby="sponsors-title">
      <h2 id="sponsors-title" className="sr-only">贊助單位</h2>
      <SponsorGrid />
    </section>
  );
}
