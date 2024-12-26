const buttons = document.querySelectorAll('.read-more');

buttons.forEach(button => {
button.addEventListener('click', () => {
    const image = button.previousElementSibling;
    const description = 'Description de l\'image';

    image.src = ''; // Remplacer l'image par le texte de description
    image.alt = description;
  });
});
const images = document.querySelectorAll('.imag');

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.src = 'cc4.jpg'; // Réinitialiser l'image
    image.alt = 'Image 1';
  });
});
