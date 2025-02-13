const inforContent = document.getElementById('infor-content');
const projectsCotent = document.getElementById('projetos-content');
const servicesContent = document.getElementById('services-content');

let projects = [
    {
        title: 'Blog',
        image: 'Blog',
        technology: "HTML e CSS.",
        desc: 'Desafio 001',
        demo: "assets/Desafio 001/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20001',
    },
    {
        title: 'Jordan',
        image: 'JordanShoes',
        technology: "HTML e CSS.",
        desc: 'Desafio 002',
        demo: "assets/Desafio 002/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20002',
    },
];

let services = [
    {
        icon: 'bx-code',
        text: 'Criação de sites',
    },
    {
        icon: 'bxl-figma',
        text: 'UI/UX Designer',
    },
    {
        icon: 'bx-mobile-alt',
        text: 'Sites responsivos',
    },
];

// let skills = [
//     {
//         icon: 'bx-smile',
//         link: 'index.html',
//         title: 'Meu Nome',
//         desc: 'Israel Rodrigues',
//     },
//     {
//         icon: 'bxl-linkedin',
//         link: 'https://www.linkedin.com/in/israel-rodrigues/',
//         title: 'LinkedIn',
//         desc: 'Israel Rodrigues',
//     },
//     {
//         icon: 'bxl-github',
//         link: 'https://github.com/israelrodrigues01',
//         title: 'GitHub',
//         desc: 'israelrodrigues01',
//     },
//     {
//         icon: 'bxl-gmail',
//         link: 'mailto:ciceroisrael428@gmail.com',
//         title: 'E-mail',
//         desc: 'ciceroisrael428@gmail.com',
//     },
//     {
//         icon: 'bxl-whatsapp',
//         link: 'https://wa.me/988461185',
//         title: 'Whatsapp',
//         desc: '(88) 98846-1185',
//     },
// ];

// skills.map((item) => {
//     let html = `
//     <a href="${item.link}" class="box flex" data-aos="fade-right">
//         <div class="box-icon flex f-c-c"><i class='bx ${item.icon}'></i></div>
//         <span class="box-text text-center">
//             <h3>${item.title}</h3>
//             <p>${item.desc}</p>
//         </span>
//     </a>
//     `;

//     inforContent.insertAdjacentHTML("beforeend", html);
// })

projects.map((item) => {
    let html = `
    <div class="box" data-aos="fade-right">
        <div class="box-img"><img src="public/img/${item.image}.png" alt=""></div>
        <div class="box-text">
            <h3>${item.title}</h3>
            <p>Tecnologias: ${item.technology}</p>
            <p>${item.desc}</p>
        </div>
        <div class="box-btn flex">
            <a href="${item.demo}" target="_blank" class="btn" style="--bg: var(--green); --color: #171717;">Demo</a>
            <a href="${item.repository}" target="_blank" class="btn" style="--bg: var(--gray-400); --color: #F9F9F9;">GitHub</a>
        </div>
    </div>    
    `;

    projectsCotent.insertAdjacentHTML("beforeend", html);
});

services.map((item) => {
    let html = `
    <div class="box" data-aos="fade-right">
        <div class="box-icon"><i class='bx ${item.icon}'></i></div>
        <div class="box-text">
            <h2>${item.text}</h2>
        </div>
    </div>
    `;

    servicesContent.insertAdjacentHTML("beforeend", html);
});