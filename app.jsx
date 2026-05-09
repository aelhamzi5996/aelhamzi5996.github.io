/* 
    ProjectCard  :carte projet/expérience
   TechBadge    : badge technologie (réutilisable)
    ContactForm : formulaire de contact avec validation */

const { useState } = React;

/* ─── Composant 1 : TechBadge ─── */
function TechBadge({ label }) {
  return <span className="tech-badge">{label}</span>;
}

/* ─── Composant 2 : ProjectCard ─── */
function ProjectCard({ icon, title, description, techs, link }) {
  return (
    <div className="project-card">
      <h4>
        <i className={`bx ${icon}`}></i> {title}
      </h4>
      <p>{description}</p>
      <div className="tech-stack">
        {techs.map((t, i) => (
          <TechBadge key={i} label={t} />
        ))}
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <i className="bx bx-link-external"></i> Voir détails
      </a>
    </div>
  );
}

/*  React gère l'affichage du formulaire.
   La validation est déléguée à jQuery (script.js)*/
function ContactForm() {
  return (
    <div className="contact-form" id="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nom">Nom complet</label>
          <input type="text" id="nom" placeholder="Votre nom" />
          <span className="error-msg" id="nom-err">Ce champ est requis.</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="votre@email.com" />
          <span className="error-msg" id="email-err">Email invalide.</span>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" rows="4" placeholder="Votre message…"></textarea>
        <span className="error-msg" id="msg-err">Ce champ est requis.</span>
      </div>
      <button className="btn-send" id="btn-send">
        <i className="bx bx-send"></i> Envoyer
      </button>
      <div className="success-msg" id="success-msg" style={{ display: 'none' }}>
        ✅ Message envoyé ! Merci de m'avoir contactée.
      </div>
    </div>
  );
}

/* ─── Données projets/expériences ─── */
const projects = [
  {
    icon: 'bx-calendar-event',
    title: 'Animation Événementielle – FSSM',
    description:
      "Organisation et animation d'événements au sein de la Faculté des Sciences Semlalia. Coordination des équipes et gestion logistique.",
    techs: ['Communication', 'Organisation', 'Gestion'],
    link: '#',
  },
  {
    icon: 'bx-heart',
    title: 'Actions Humanitaires – Croissant Rouge',
    description:
      "Participation à des campagnes de sensibilisation, soutien terrain lors d'événements solidaires et actions humanitaires sociales.",
    techs: ["Travail d'équipe", 'Empathie', 'Terrain'],
    link: '#',
  },
];

/* ─── Montage React ─── */
const projectsRoot = ReactDOM.createRoot(document.getElementById('react-projects'));
projectsRoot.render(
  <div className="projects-grid">
    {projects.map((p, i) => (
      <ProjectCard key={i} {...p} />
    ))}
  </div>
);

const contactRoot = ReactDOM.createRoot(document.getElementById('react-contact'));
contactRoot.render(<ContactForm />);