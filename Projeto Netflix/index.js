const themeSwitch = document.getElementById('theme-toggle');
const modeText = document.querySelector('.mode-text');

function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (themeSwitch) themeSwitch.checked = theme === 'dark';
  if (modeText) modeText.textContent = theme === 'dark' ? 'Dark mode' : 'Light mode';
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

if (themeSwitch) {
  themeSwitch.addEventListener('change', toggleTheme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Armazenar perfil ativo no localStorage
const profiles = document.querySelectorAll('.profile a');

profiles.forEach(profileLink => {
  profileLink.addEventListener('click', (e) => {
    const figcaption = profileLink.querySelector('figcaption');
    const img = profileLink.querySelector('img');
    
    if (figcaption && img) {
      const profileName = figcaption.textContent;
      const profileImage = img.src;
      
      localStorage.setItem('activeProfile', JSON.stringify({
        name: profileName,
        image: profileImage
      }));
    }
  });
});
