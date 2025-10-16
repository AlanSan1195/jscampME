// Configuración de los filtros disponibles
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

// Configurar los event listeners para cada filtro
filtersConfig.forEach(({ id }) => {
  const filterElement = document.getElementById(id);
  if (filterElement) {
    filterElement.addEventListener("change", applyAllFilters);
  }
});

// Aplicar filtros al cargar la página
document.addEventListener('DOMContentLoaded', applyAllFilters);
