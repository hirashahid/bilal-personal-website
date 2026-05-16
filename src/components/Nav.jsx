import { useState } from 'react';

const SOCIAL = [
  { icon: 'fab fa-linkedin-in',  href: 'https://www.linkedin.com/in/bilalhvssain/', label: 'LinkedIn',  active: true },
  { icon: 'fab fa-facebook-f',   label: 'Facebook' },
  { icon: 'fab fa-instagram',    label: 'Instagram' },
  { icon: 'fab fa-youtube',      label: 'YouTube' },
  { icon: 'fab fa-twitter',      label: 'Twitter' },
  { icon: 'fab fa-reddit',       label: 'Reddit' },
  { icon: 'fab fa-pinterest',    label: 'Pinterest' },
  { icon: 'fab fa-snapchat',     label: 'Snapchat' },
  { icon: 'fab fa-whatsapp',     label: 'WhatsApp' },
  { icon: 'fab fa-tumblr',       label: 'Tumblr' },
  { icon: 'fab fa-tiktok',       label: 'TikTok' },
  { icon: 'fab fa-github',       href: 'https://github.com/bhvssain',  label: 'GitHub',  active: true },
  { icon: 'far fa-envelope',     href: 'mailto:bilal_@live.nl',        label: 'E-mail',  active: true },
];

const PAGE_GRADIENTS = {
  home:    'radial-gradient(circle, rgba(171,32,135,1) 0%, rgba(255,61,205,1) 100%)',
  about:   'radial-gradient(circle, rgba(32,84,171,1)  0%, rgba(61,133,255,1) 100%)',
  work:    'radial-gradient(circle, rgba(32,171,143,1) 0%, rgba(61,255,216,1) 100%)',
  contact: 'radial-gradient(circle, rgba(171,93,32,1)  0%, rgba(255,147,61,1) 100%)',
};

const NAV_GIFS = {
  home:    '/img/home.gif',
  about:   '/img/goal.gif',
  work:    '/img/work.gif',
  contact: '/img/come.gif',
};

// Sound plays on hover — matches original data-sound behaviour on nav links
const NAV_HOVER_SOUNDS = {
  home:    'home',
  about:   'about',
  work:    'work',
  contact: 'contact',
};

// Sound plays on click when navigating
const NAV_CLICK_SOUNDS = {
  home:    'coin',
  about:   'coin',
  work:    'coin',
  contact: 'coin',
};

export default function Nav({ currentPage, onNavigate, play, pauseAll, setHoverGif }) {
  const [isOpen,  setIsOpen]  = useState(false);
  const [closing, setClosing] = useState(false);

  const openNav = () => {
    play('coin');
    setIsOpen(true);
    setClosing(false);
  };

  const closeNav = () => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, 500);
  };

  const handleNavClick = (pageId) => {
    closeNav();
    setTimeout(() => onNavigate(pageId), 1050);
  };

  const handleNavLinkEnter = (pageId) => {
    setHoverGif(NAV_GIFS[pageId]);
    play(NAV_HOVER_SOUNDS[pageId]); 
  };

  const handleNavLinkLeave = () => {
    setHoverGif(null);
    pauseAll();
  };

  const handleLogoEnter = () => {
    const sounds = ['billyboy', 'dude'];
    play(sounds[Math.floor(Math.random() * sounds.length)]);
  };

  return (
    <aside
      id="nav-wrapper"
      className={isOpen ? 'open' : ''}
      style={{ background: PAGE_GRADIENTS[currentPage] }}
    >
      {/* Logo */}
      <div
        id="logo"
        onMouseEnter={handleLogoEnter}
        onMouseLeave={pauseAll}
        onClick={() => handleNavClick('home')}
      >
        <h1>B</h1>
      </div>

      {/* Hamburger */}
      {!isOpen && (
        <div id="ham-menu" onClick={openNav}>
          <span>Menu</span>
          <img src="/img/hamburger.png" alt="Hamburger icon" width="40" height="40" />
        </div>
      )}

      {/* Close button */}
      {isOpen && (
        <div id="close-nav" onClick={closeNav}>
          <i className="fas fa-long-arrow-alt-left" />
        </div>
      )}

      {/* Main nav */}
      <nav id="main-nav">
        <ul>
          {['home', 'about', 'work', 'contact'].map((pageId) => (
            <li key={pageId} className={closing ? 'closing' : ''}>
              <a
                className={currentPage === pageId ? 'active' : ''}
                onClick={() => handleNavClick(pageId)}
                onMouseEnter={() => handleNavLinkEnter(pageId)}
                onMouseLeave={handleNavLinkLeave}
              >
                {pageId}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Secondary nav (social) */}
      <nav id="secondary-nav">
        <ul>
          {SOCIAL.map(({ icon, href, label, active }) => (
            <li key={label}>
              {active ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <i className={icon} /><span className="visually-hidden">{label}</span>
                </a>
              ) : (
                <a href="#" className="inactive" onClick={e => e.preventDefault()}>
                  <i className={icon} /><span className="visually-hidden">{label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
