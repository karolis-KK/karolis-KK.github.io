let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
let autoChangeInterval;
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const buttons = document.querySelectorAll('#btn');
const contactBtn = document.getElementById('contactBtn');
const homeBtn = document.getElementById('homeBtn');
const toliau = document.getElementById('toliau');
const popup_projektai_1 = document.getElementById('popup-projektai-1');
const close_popup_projektai_1 = document.getElementById('close-popup-projektai-1');
const demo_nuotraukos_1 = document.getElementById('demo-nuotraukos-1');
const popup_projektai_2 = document.getElementById('popup-projektai-2');
const close_popup_projektai_2 = document.getElementById('close-popup-projektai-2');
const demo_nuotraukos_2 = document.getElementById('demo-nuotraukos-2');

// Add these new variables
const projectImages = document.querySelectorAll('#popup-projektai-2 img');
const imagePopup = document.createElement('div');
imagePopup.className = 'fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50';
document.body.appendChild(imagePopup);

function updateSlide() {
  const currentSlideElement = slides[currentSlide];
  
  // Fade out
  document.getElementById("slide-content").style.opacity = 0;
  
  setTimeout(() => {
    document.getElementById("slide-title").textContent =
      currentSlideElement.dataset.name;
    document.getElementById("slide-description").textContent =
      currentSlideElement.dataset.description;
    document.getElementById("slide-image").src = currentSlideElement.dataset.image;
    
    // Fade in
    document.getElementById("slide-content").style.opacity = 1;
  }, 500); // Wait for fade out to complete
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

function startAutoChange() {
  autoChangeInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopAutoChange() {
  clearInterval(autoChangeInterval);
}

document.getElementById("next-slide").addEventListener("click", () => {
  stopAutoChange();
  nextSlide();
  startAutoChange();
});

// Change this line
const prevSlideButtons = document.querySelectorAll('#prev-slide');
// ... existing code ...

// Replace this block
prevSlideButtons.forEach(button => {
  button.addEventListener('click', () => {
    stopAutoChange();
    prevSlide(); // This now correctly calls the prevSlide function
    startAutoChange();
  });
});

// ... rest of the code ...

// Start the initial slide and auto-change
updateSlide();
startAutoChange();

buttons.forEach(button => {
  button.addEventListener('click', () => {
    popup.classList.remove('hidden');
    popup.classList.add('flex');
  });
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
  popup.classList.remove('flex');
});

// Add this new function
function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}

// Add this new event listener
contactBtn.addEventListener('click', scrollToBottom);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

homeBtn.addEventListener('click', scrollToTop);

// Add this new function
function scrollHalfPage() {
  const halfPageHeight = window.innerHeight / 2;
  window.scrollBy({
    top: halfPageHeight,
    behavior: 'smooth'
  });
}

// Add this new event listener
toliau.addEventListener('click', scrollHalfPage);

demo_nuotraukos_1.addEventListener('click', () => {
  popup_projektai_1.classList.remove('hidden');
  popup_projektai_1.classList.add('flex');
});

close_popup_projektai_1.addEventListener('click', () => {
  popup_projektai_1.classList.add('hidden');
  popup_projektai_1.classList.remove('flex');
});

// Update this function
function createExpandedImage(src) {
  return `
    <div class="relative max-w-[90vw] max-h-[90vh]">
      <img src="${src}" class="w-full h-full object-contain" alt="Expanded image">
      <button class="absolute top-2 right-2 text-neutral-100 underline-offset-4 underline">uždaryti</button>
    </div>
  `;
}

// Update these event listeners
projectImages.forEach(img => {
  img.addEventListener('click', (e) => {
    imagePopup.innerHTML = createExpandedImage(img.src);
    imagePopup.classList.remove('hidden');
    imagePopup.classList.add('flex');

    const closeButton = imagePopup.querySelector('button');
    const imageContainer = imagePopup.querySelector('div');

    closeButton.addEventListener('click', closeImagePopup);
    imagePopup.addEventListener('click', closeImagePopup);
    imageContainer.addEventListener('click', (e) => e.stopPropagation());
  });
});

// Add this new function
function closeImagePopup() {
  imagePopup.classList.add('hidden');
  imagePopup.classList.remove('flex');
}

demo_nuotraukos_2.addEventListener('click', () => {
  popup_projektai_2.classList.remove('hidden');
  popup_projektai_2.classList.add('flex');
});

close_popup_projektai_2.addEventListener('click', () => {
  popup_projektai_2.classList.add('hidden');
  popup_projektai_2.classList.remove('flex');
});