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

