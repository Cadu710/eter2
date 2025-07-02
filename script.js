
const paragrafo = document.getElementById('biografia');
const nome = document.getElementById('nome');
const cargo = document.getElementById('cargo');
const perfil = document.getElementById('perfil');

const botao = document.querySelectorAll('.seletorD');

botao.forEach(function(coisa) {

coisa.addEventListener('click', () => {
        paragrafo.style.opacity = 0;
        nome.style.opacity = 0;
        perfil.style.opacity = 0;
        cargo.style.opacity = 0;
        setTimeout(() => {
            paragrafo.style.opacity = 1;
            perfil.style.opacity = 1;
            nome.style.opacity = 1;
            cargo.style.opacity = 1;
        }, 300);


    });
  });


//DIRETOR GERAL ABAIXO
document.addEventListener("DOMContentLoaded", function() {
const element = document.getElementById("diretorG");
element.addEventListener("click", myFunction);

function myFunction() {
  setTimeout(() => {
  document.getElementById("biografia").innerHTML = "João Cláudio Pinho, conhecido como JC Pinho, é professor da Faetec e atualmente Diretor-Geral da ETE República desde 2022. Com forte atuação na educação técnica, coordena projetos pedagógicos, feiras científicas e ações de integração com a comunidade. Seu trabalho é voltado para o fortalecimento da aprendizagem e o incentivo à pesquisa e inovação entre os alunos.";
  document.getElementById("nome").innerHTML = "João Cláudio Pinho";
  document.getElementById("perfil").src ="Fotoplaceholder - Copia.png";
  document.getElementById("cargo").innerHTML = "Diretor Geral";
  }, 300);
}
});

//DIRETOR ACADEMICO ABAIXO

document.addEventListener("DOMContentLoaded", function() {
const element = document.getElementById("diretorA");
element.addEventListener("click", myFunction2);

function myFunction2() {
  setTimeout(() => {
  document.getElementById("biografia").innerHTML = "Eros Ramos é Professor de Física, graduado pela UFRJ e Mestre em Ensino de Física pelo MNPEF/UNIRIO. Atua na educação desde 2008, com experiência em escolas públicas e privadas. Atualmente, é Diretor Pedagógico da ETE República, onde coordena ações voltadas para a melhoria do ensino técnico e da aprendizagem dos alunos.";
  document.getElementById("nome").innerHTML = "Eros Ramos";
  document.getElementById("cargo").innerHTML = "Diretor Pedagógico";
  }, 300);
}
});

//DIRETOR TÉCNICO ABAIXO

document.addEventListener("DOMContentLoaded", function() {
const element = document.getElementById("diretorT");
element.addEventListener("click", myFunction3);

function myFunction3() {
  setTimeout(() => {
  document.getElementById("biografia").innerHTML = "Rosymere Cersosimo é Diretora Técnica da ETE República (FAETEC República), tendo assumido o cargo em julho de 2022. Ela lidera a coordenação pedagógica de eventos técnicos e científicos, destacando-se pela condução de atividades como a 21ª Semana de Cultura, Ciência e Tecnologia (outubro de 2023) e a XXII edição do mesmo evento (setembro de 2024), fortalecendo a integração entre ensino, pesquisa e mercado.";
  document.getElementById("nome").innerHTML = "Rosymere Cersosimo";
  document.getElementById("cargo").innerHTML = "Diretor Técnico";
  }, 300);
}
});



document.addEventListener("DOMContentLoaded", function() {
  let menu = document.querySelector('#Menu-icon');
  let nav = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
  };
});

const year = new Date().getFullYear();
document.getElementById('anos').innerHTML = year - 2005;









