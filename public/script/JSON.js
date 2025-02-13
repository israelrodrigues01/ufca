const inforContent = document.getElementById('infor-content');
const projectsCotent = document.getElementById('projetos-content');
const servicesContent = document.getElementById('services-content');

let projects = [
    {
        title: 'Agendamento de consultas',
        image: 'agendamentos-consultas',
        technology: "Engenharia de software",
        desc: 'Plataforma de Consultas Remotas: Um sistema inovador que permite a realização de atendimentos e consultas a distância, proporcionando conveniência e eficiência para profissionais e clientes no modelo de home office',
        repository: 'https://www.figma.com/design/xuq8TE75X8bZeBxoIOrBvP/Prot%C3%B3tipo-de-telas-(eng.-software)?node-id=47-109&p=f',
        repositoryText: 'Figma'
    },
    {
        title: 'Agendamento hospitalar',
        image: 'JordanShoes',
        technology: "C",
        desc: 'Consiste em um sistema de geração de atendimentos hospitalares agrupados por dias e horários comerciais (das 8h as 11h, e das 13h as 16h) gerados mediante o tratamento e processamento de entradas previamente especificadas por um arquivo txt',
        repository: 'https://github.com/Marcondes-Amarante/AED_II-Agendamento_hospitalar',
    },
    {
        title: 'Guess The Number Extreme',
        image: 'guess',
        technology: "C",
        desc: 'Jogo para dois jogadores que tentam adivinhar um ponto no espaço (coordenadas x e y de 4 bits). A cada rodada, um jogador faz um palpite, e o jogo informa se a soma das coordenadas chutadas é maior, menor ou igual à soma do ponto oculto',
        repository: 'https://github.com/Marcondes-Amarante/circuitos-digitais.git',
    },
    {
        title: 'Saúde em Cada',
        image: 'saude-em-casa',
        technology: "Engenharia de Software",
        desc: 'Já pensou tem ter o profissionais na palma da sua mão? Você pode ter isso com o projeto Saúde em Casa. Onde é possível encontrar profissionais qualificados para contratar',
        repository: 'https://www.figma.com/proto/efGmHaoY9xYXNXnQlli5FR?node-id=39-56&t=XS9vCHOi1Pnge9Fx-6',
        repositoryText: 'Figma'
    },
    {
        title: 'App de Organização',
        image: 'app',
        technology: "Engenharia de Software",
        desc: 'App de organização, onde pode salvar tarefas, priorizar, ver status e tags. Você pode salvar de acordo com ambientes, seja faculdade, trabalho, casa...',
        repository: 'https://www.figma.com/proto/SBFquBSiSg3Li8kXg8Vtol?node-id=12-2&t=XS9vCHOi1Pnge9Fx-6',
        repositoryText: 'Figma'
    },
    {
        title: 'WorkHub',
        image: 'workhub',
        technology: "React, Node.js, PostgreSQL, Docker",
        desc: 'Nosso objetivo é fornecer uma plataforma simples e eficaz para monitorar tarefas, garantindo o controle completo e a organização de equipes',
        repository: 'https://github.com/FelipeFerraz4/task-management-system',
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
        `;

    if (item.demo) {
        html += `
                <a href="${item.demo}" target="_blank" class="btn" style="--bg: var(--green); --color: #171717;">Demo</a> 
        `;
    }

    let text = item.repositoryText ? item.repositoryText : 'GitHub';

    html += `
            <a href="${item.repository}" target="_blank" class="btn" style="--bg: var(--gray-400); --color: #F9F9F9;">${text}</a>
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