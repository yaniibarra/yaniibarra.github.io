 document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 }); 



const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e)=>{
  text.classList.toggle('show-more');
  if(readMoreBtn.innerText==='Read More'){
      readMoreBtn.innerText='Read Less';
  }else{
    readMoreBtn.innerText = 'Read More';
  }
})