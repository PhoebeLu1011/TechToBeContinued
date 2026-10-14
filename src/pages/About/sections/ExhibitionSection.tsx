type EventDayProps = {
  label: string;
  date: string;
  closingTime: string;
  closingLabel: string;
  note: string;
};

function EventDay({ label, date, closingTime, closingLabel, note }: EventDayProps) {
  return (
    <article className="event-day">
      <div className="event-day__bar" />
      <span className="event-day__label">{label}</span>
      <h3>{date}</h3>
      <div className="timeline-row"><time>10:00</time><span>開放入場</span></div>
      <div className="timeline-row"><time>{closingTime}</time><span>{closingLabel}</span></div>
      <p className="event-day__note">{note}</p>
    </article>
  );
}

export default function ExhibitionSection() {
  return (
    <section className="about-panel exhibition-panel" aria-labelledby="exhibition-title">
      <h2 id="exhibition-title" className="sr-only">展覽資訊</h2>
      <EventDay label="Event Day 1" date="12.12（六）" closingTime="18:00" closingLabel="當日閉幕" note="＊首日開放至 18:00，敬請把握參觀時間" />
      <EventDay label="Event Day 2" date="12.13（日）" closingTime="17:00" closingLabel="展覽閉幕" note="＊17:00 展期正式落幕，感謝蒞臨指教" />
    </section>
  );
}
