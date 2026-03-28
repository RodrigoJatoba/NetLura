import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const activeProfileData = localStorage.getItem('activeProfile');
    
    if (activeProfileData) {
        const activeProfile = JSON.parse(activeProfileData);
        const nomePerfil = activeProfile.name;
        const imagemPerfil = activeProfile.image;

        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
