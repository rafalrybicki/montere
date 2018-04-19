const toggleButton = document.querySelector('#toggle-button');
const header = document.querySelector('header');

toggleButton.addEventListener('click', (e) => {
   header.classList.toggle('show');
	dropdowns.forEach((el)=> el.classList.remove('dropdown-open'));
})

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((el)=> el.addEventListener('click', showDropdown));

function showDropdown (e) {
	e.preventDefault();
   if (window.innerWidth > 768) {
      return;
   } else {
		dropdowns.forEach((el)=> el == this ? "" : el.classList.remove('dropdown-open'));
		this.classList.toggle('dropdown-open');
	}
}

// karuzela

let slideIndex, slides, dotIndicators, timer;
function initGallery() {
   
   slideIndex = 0;
   slides = document.querySelectorAll('.item');
   slides[slideIndex].style.opacity = 1;
   
   dotIndicatorsContainer = document.querySelector('#dotIndicators');
   
   for(let i = 0; i <slides.length; i++) {
      let dotIndicator = document.createElement('span');
      dotIndicator.classList.add('dotIndicator');
      dotIndicator.setAttribute('data-src', `${i}`)
      dotIndicatorsContainer.append(dotIndicator);  
     //dotIndicators.push(dotIndicator);
   }
   dotIndicators = document.querySelectorAll('#dotIndicators span');
   dotIndicators.forEach((el) => el.addEventListener('click', slideTo)); 
   dotIndicators[slideIndex].classList.add('active');
   
   timer = setInterval(slideShow, 5000)
}

initGallery();

   
function slideShow() {
   
   slides[slideIndex].style.opacity = 0;
   dotIndicators[slideIndex].classList.remove('active');
   
   (slideIndex == slides.length -1) ? slideIndex = 0 :slideIndex++;
   
   slides[slideIndex].style.opacity = 1;
   dotIndicators[slideIndex].classList.add('active');
   
}

function slideTo() {
   
   clearInterval(timer);
   
   slides[slideIndex].style.opacity = 0;
   dotIndicators[slideIndex].classList.remove('active');
   
   slideIndex = this.getAttribute('data-src');
   
   slides[slideIndex].style.opacity = 1;
   dotIndicators[slideIndex].classList.add('active');
   
   timer = setInterval(slideShow, 3000)
}









