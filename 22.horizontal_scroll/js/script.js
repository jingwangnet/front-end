let container = document.querySelector('.container');
container.addEventListener('wheel', (event) => {
  event.preventDefault();
  container.scrollLeft += event.deltaY;
});
