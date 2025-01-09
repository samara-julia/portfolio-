//----------------------------------------// 

// aparecer os titulos conforme scrolla ♡ feito com ajuda do site https://scrollrevealjs.org/ //

window.sr = ScrollReveal ({ reset: true });

sr.reveal('.sasa', { 
  duration: 2000 
});

sr.reveal('.title-sobre', { 
  duration: 2000 
});

sr.reveal('.projct', { 
  duration: 2000 
});
sr.reveal('.designh1', { 
  duration: 1000 
});

//----------------------------------------// 

// botaozinho de ir pro topo ♡

window.onscroll = function() {
    const btn = document.getElementById("topo-btn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block"; // mostra o botao ♡
    } else {
      btn.style.display = "none"; // esconde ♡
    }
  };
  
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // volta pro topo com efeito suave ♡
  }

//----------------------------------------// 

// copiar o email pra área de transferencia

    document.getElementById('copyButton').addEventListener('click', function () {
        const email = 'samarajuliactt@gmail.com'; 
        navigator.clipboard.writeText(email);
    });

// imagem slides
var slider_image = document.querySelector('.slider-img');
var images = ['lp capa - behance.png', 'ddd.png', 'dddd.png']
var i = 0; // imagem inicial

function next(){
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg(){
  return slider_image.setAttribute('src', 'assets/' + images[i])
}