import { useState } from "react";
import jobsData from "./data.json";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import JobsFormSection from "./components/JobsFormSection.jsx";
import JobListings from "./components/JobListings.jsx";
import Pagination from "./components/Pagination.jsx";

function App() {
  // eespecificamos la distancia de la navegacion y lo calcula con ceil que lo reedondedea hacia arriba
  const JOBS_PER_PAGE = 5;
  const totalPages = Math.ceil(jobsData.length / JOBS_PER_PAGE);
  const [filters, setFilters] = useState({
    technology: '',
    location: '',
    experienceLevel: '',
  })
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setPage] = useState(1);

  const jobsFiltersByFilters = jobsData.filter(job=>{
    return(
      (filters.technology === '' || job.data.technology === filters.technology)
    )
  })



  // FILTARR POR TEXTO si no hay texto pues devuelve la lista normal
  const textWhitFilter =
    textToFilter === ""
      ? jobsFiltersByFilters
      : jobsFiltersByFilters.filter(job => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });
  // rebanar como una pizza 🍕 toda la lista de trabajos texttofilter por que antes era solo jobsData
  const pageResult = textWhitFilter.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  const handleSearch = ( filters ) => {
    setFilters(filters);
    // receteamos la pagina 
    setPage(1);

  };

  const handleTextfilter = (newTextFilter) => {
    setTextToFilter(newTextFilter);
    // receteamos la pagina 
    setPage(1);
  };


  const handlePageChange = (page) => {
    setPage(page);
  }
  return (
    <>
      <Header />
      <main>
        <JobsFormSection
          onSearch={handleSearch}
          onTextFilter={handleTextfilter}
        />
        <section>
          <JobListings jobs={pageResult} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
