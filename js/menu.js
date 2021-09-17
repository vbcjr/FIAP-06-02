const hamburguer = document.querySelector('.hamburguer');
   const navLinks = document.querySelector('.links__menu');  
   hamburguer.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
   });


// const acessibilidade = document.querySelector('.acessibilidade');
//    const navLinks = document.querySelector('.links_menu_acess');  
//    acessibilidade.addEventListener('click', () =>{
//     navLinks.classList.toggle('open');
//    });