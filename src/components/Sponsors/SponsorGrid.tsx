import sponsors, { type Sponsor } from '../../data/sponsors';
import './SponsorGrid.css';

type SponsorGridProps = {
  className?: string;
};

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const logo = <img src={sponsor.logo} alt={sponsor.name} />;

  if (sponsor.website) {
    return (
      <a
        className="sponsor-grid__card"
        href={sponsor.website}
        target="_blank"
        rel="noreferrer"
      >
        {logo}
      </a>
    );
  }

  return <div className="sponsor-grid__card">{logo}</div>;
}

export default function SponsorGrid({ className = '' }: SponsorGridProps) {
  const classes = ['sponsor-grid', className].filter(Boolean).join(' ');

  if (sponsors.length === 0) {
    return (
      <div className={`${classes} sponsor-grid--empty`}>
        <p>敬請期待</p>
      </div>
    );
  }

  return (
    <div className={classes} aria-label="贊助廠商列表">
      {sponsors.map((sponsor) => (
        <SponsorCard key={sponsor.id} sponsor={sponsor} />
      ))}
    </div>
  );
}
