let sec = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');
let logos= document.querySelectorAll(".platforms img")

const profileUrls = {
    leetcode: 'https://leetcode.com/u/sukhmanpreetsingh/',
    gfgLogo: 'https://www.geeksforgeeks.org/user/sukhmanpr29r3/',
    github: 'https://github.com/Sukhman123preet'
};
sec.forEach((section, index) => {
    section.addEventListener("mouseover", () => {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    });
});
logos.forEach((logo) => {
    logo.addEventListener("click", () => {
        if (logo.id === 'leetcode') {
            window.open(profileUrls.leetcode, '_blank'); 
        } else if (logo.id=='gfgLogo') {
            window.open(profileUrls.gfgLogo, '_blank');
        } else if (logo.id === 'GitHub') {
            window.open(profileUrls.github, '_blank');
        }
    });
});




