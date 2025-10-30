import {JobCard} from "./JobCard.jsx";



 function JobListings({jobs}) {
  return (
    <>
      <h2>Resultados de búsqueda</h2>

      <div className="jobs-listings">
        {/* aqui se tienen que renderizar los resultados */}
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

    </>
  );
}

export default JobListings;
