import { experienceItems } from '@/data/content';

export function Experience() {
  return (
    <section id="experience" className="tab-content active">
      <h2 className="section-title">Experience</h2>

      {experienceItems.map((item, index) => (
        <div key={index} className="experience-item">
          <div className="job-title">{item.title}</div>
          <div className="job-meta">{item.meta}</div>
          <div className="job-description">{item.description}</div>
        </div>
      ))}
    </section>
  );
}
