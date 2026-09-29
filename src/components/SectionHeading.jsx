export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <div className="eyebrow"><span />{eyebrow}<span /></div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
