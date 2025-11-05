
import { useState } from "react";
export function JobCard({ job }) {
  const [isApplied, setIsApplied] = useState(false)
  const aplicado = isApplied ? "is-applied" : "";
  const textApli = isApplied ? "Solicitado" : "Aplicar";

  const handleApli =()=>{
    setIsApplied(!isApplied);

  }

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
      <button className={`button-apply-job ${aplicado}`} onClick={handleApli}>{textApli}</button>
    </article>
  );
}

