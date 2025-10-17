// // const filter = document.querySelector('#filter-location')
// // const mensaje = document.querySelector('#filter-selected-value')
// // const filterInput = document.querySelector('#empleos-search-input')

// // filter.addEventListener('change', function () {
// //   const jobs = document.querySelectorAll('.job-listing-card')

// //   const selectedValue = filter.value

// //   if (selectedValue) {
// //     mensaje.textContent = `Has seleccionado: ${selectedValue}`
// //   } else {
// //     mensaje.textContent = ''
// //   }

// //   jobs.forEach(job => {
// //     // const modalidad = job.dataset.modalidad
// //     const modalidad = job.getAttribute('data-modalidad')
// //     const isShown = selectedValue === '' || selectedValue === modalidad
// //     job.classList.toggle('is-hidden', isShown === false)
// //   })
// // })

// // filterInput.addEventListener('input', function () {
// //   const jobs = document.querySelectorAll('.job-listing-card')

// //   const selectedValue = filterInput.value

// //   if (selectedValue) {
// //     mensaje.textContent = `Has seleccionado: ${selectedValue}`
// //   } else {
// //     mensaje.textContent = ''
// //   }

// //   jobs.forEach(job => {
// //     // const modalidad = job.dataset.modalidad
// //     const jobTitle = job.querySelector('h3').textContent.toLowerCase()
// //     const modalidad = job.getAttribute('data-modalidad')
// //     const isShown = selectedValue === '' || selectedValue === modalidad || jobTitle.includes(selectedValue)
// //     job.classList.toggle('is-hidden', isShown === false)
// //   })
// // })

const filtersConfig = [
  { id: "filter-location", dataAttr: "data-modalidad" },
  { id: "filter-experience-level", dataAttr: "data-nivel" },
  { id: "filter-technology", dataAttr: "data-technology" }
];

const mensaje = document.querySelector("#filter-selected-value");

// Función para aplicar todos los filtros
function applyAllFilters() {
  const jobs = document.querySelectorAll(".job-listing-card");
  
  // Obtener valores actuales de todos los filtros
  const activeFilters = filtersConfig.map(filter => ({
    attr: filter.dataAttr,
    value: document.getElementById(filter.id)?.value || ''
  }));

  // Aplicar filtros a cada trabajo
  jobs.forEach((job) => {
    let shouldShow = true;
    
    // Verificar cada filtro
    for (const { attr, value } of activeFilters) {
      if (value) {
        const jobValue = job.getAttribute(attr);
        if (jobValue !== value) {
          shouldShow = false;
          break;
        }
      }
    }
    
    // Aplicar la visibilidad
    job.classList.toggle("is-hidden", !shouldShow);
  });
  

}
const filterInput = document.querySelector('#empleos-search-input')
filterInput.addEventListener('input', function () {
  const jobs = document.querySelectorAll('.job-listing-card')

  const selectedValue = filterInput.value

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }

  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    const jobTitle = job.querySelector('h3').textContent.toLowerCase()
    const modalidad = job.getAttribute('data-modalidad')
    const isShown = selectedValue === '' || selectedValue === modalidad || jobTitle.includes(selectedValue)
    job.classList.toggle('is-hidden', isShown === false)
  })
})
// Configurar los event listeners para cada filtro
filtersConfig.forEach(({ id }) => {
  const filterElement = document.getElementById(id);
  if (filterElement) {
    filterElement.addEventListener("change", applyAllFilters);

  }
});

// Aplicar filtros al cargar la página
document.addEventListener('DOMContentLoaded', applyAllFilters);
