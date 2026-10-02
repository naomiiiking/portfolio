import { skillGroups } from '@/data/content';

export function Skills() {
  return (
    <section id="skills" className="tab-content active">
      <p className="about-text">Hi! I'm Naomi, an AI Engineer based in London. I build production grade agentic and LLM systems with evaluation pipelines at the forefront.</p>

      <h2 className="section-title" style={{ marginTop: '2rem' }}>Skills</h2>

      <div className="skills-container">
        {skillGroups.map((group, index) => (
          <div key={index} className="skill-group">
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-items">
              {group.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
