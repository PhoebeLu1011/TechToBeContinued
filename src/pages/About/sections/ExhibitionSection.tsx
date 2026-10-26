import {
  exhibitionSchedule,
  type ExhibitionDay,
} from '../../../data/exhibitionSchedule';

type EventDayProps = ExhibitionDay & {
  label: string;
};

function EventDay({
  label,
  dateLabel,
  openingTime,
  closingTime,
  closingLabel,
  ceremonyTime,
  ceremonyLabel,
}: EventDayProps) {
  return (
    <article className="event-day">
      <div className="event-day__bar" />
      <span className="event-day__label">{label}</span>
      <h3>{dateLabel}</h3>
      <div className="timeline-row"><time>{openingTime}</time><span>開放入場</span></div>
      <div className="timeline-row"><time>{ceremonyTime}</time><span>{ceremonyLabel}</span></div>
      <div className="timeline-row"><time>{closingTime}</time><span>{closingLabel}</span></div>
    </article>
  );
}

export default function ExhibitionSection() {
  return (
    <section className="about-panel exhibition-panel" aria-labelledby="exhibition-title">
      <h2 id="exhibition-title" className="sr-only">展覽資訊</h2>
      {exhibitionSchedule.map((day, index) => (
        <EventDay key={day.id} {...day} label={`Event Day ${index + 1}`} />
      ))}
    </section>
  );
}
