import { machines } from "./data"

const Machines = () => {
  return (
    <main className="machines" >
      <div className="machines__title">
        <h1>Makine Parkuru</h1>
      </div>
      <div className="machines__cards">
        {
          machines.map(mach => {
            const {
              id,
              name,
              desc,
              img,
              model,
              specs: { spec1, spec2, spec3, spec4, spec5 },
              type
            } = mach

            return (
              <article className="machines__card" key={id} >
                <div className="machines__image">
                  <img src={img} alt={name} />
                </div>
                <div className="machines__info">
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <p>{model}</p>
                  <p>{spec1}</p>
                  <p>{spec2}</p>
                  <p>{spec3}</p>
                  <p>{spec4}</p>
                  <p>{spec5}</p>
                  <p>{type}</p>
                </div>
              </article>
            )
          })
        }
      </div>
    </main>
  )
}

export default Machines
