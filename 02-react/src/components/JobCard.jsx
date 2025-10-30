export function JobCard({ job }) {
  // const [isApplied, setIsApplied] = useState(false)
  return (
    <article
      className="job-listing-card"
      data-technology={job.tecnologia}
      data-experience={job.experiencia}
      data-nivel={job.nivel}
    >
      <div>
        <h3>{job.titulo}</h3>
        <small>
          {job.empresa} - {job.ubicacion} 
        </small>
        <p>{job.descripcion}</p>
      </div>
      <button className={`button-apply-job`}>Aplicar</button>
    </article>
  );
}

