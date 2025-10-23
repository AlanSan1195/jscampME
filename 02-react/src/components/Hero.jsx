import Form from "./Form.jsx";

function Hero(){
    return (
          <section className="jobs-search">
          <h1>Encuentra tu próximo trabajo</h1>
          <p>Explora miles de oportunidades en el sector tecnológico.</p>
          <Form />
          <span id="filter-selected-value"></span>
        </section>
    )
}

export default Hero;