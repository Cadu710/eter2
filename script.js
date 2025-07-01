//DIRETOR GERAL ABAIXO
document.addEventListener("DOMContentLoaded", function() {
const element = document.getElementById("diretorG");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("biografia").innerHTML = "João Cláudio Pinho, conhecido como JC Pinho, é professor da Faetec e atualmente Diretor-Geral da ETE República desde 2022. Com forte atuação na educação técnica, coordena projetos pedagógicos, feiras científicas e ações de integração com a comunidade. Seu trabalho é voltado para o fortalecimento da aprendizagem e o incentivo à pesquisa e inovação entre os alunos.";
  document.getElementById("nome").innerHTML = "João Cláudio Pinho";
  document.getElementById("perfil").src ="Fotoplaceholder - Copia.png";
  document.getElementById("cargo").innerHTML = "Diretor Geral";
}
});

//DIRETOR ACADEMICO ABAIXO

document.addEventListener("DOMContentLoaded", function() {
const element = document.getElementById("diretorA");
element.addEventListener("click", myFunction2);

function myFunction2() {
  document.getElementById("biografia").innerHTML = "Eros Ramos é Professor de Física, graduado pela UFRJ e Mestre em Ensino de Física pelo MNPEF/UNIRIO. Atua na educação desde 2008, com experiência em escolas públicas e privadas. Atualmente, é Diretor Pedagógico da ETE República, onde coordena ações voltadas para a melhoria do ensino técnico e da aprendizagem dos alunos.";
  document.getElementById("nome").innerHTML = "Eros Ramos";
  document.getElementById("cargo").innerHTML = "Diretor Pedagógico";
}
});

//DIRETOR TÉCNICO ABAIXO

document.addEventListener("DOMContentLoaded", function() {
const element = document.getElementById("diretorT");
element.addEventListener("click", myFunction3);

function myFunction3() {
  document.getElementById("biografia").innerHTML = "Rosymere Cersosimo é Diretora Técnica da ETE República (FAETEC República), tendo assumido o cargo em julho de 2022. Ela lidera a coordenação pedagógica de eventos técnicos e científicos, destacando-se pela condução de atividades como a 21ª Semana de Cultura, Ciência e Tecnologia (outubro de 2023) e a XXII edição do mesmo evento (setembro de 2024), fortalecendo a integração entre ensino, pesquisa e mercado.";
  document.getElementById("nome").innerHTML = "Rosymere Cersosimo";
  document.getElementById("cargo").innerHTML = "Diretor Técnico";
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


