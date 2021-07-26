import { references } from "./data"

const References = () => {
  return (
    <main className="ref">
      <div className="ref__title">
        <h1>Referanslar</h1>
      </div>
      <ul className="ref__list" >
        {
          references.map(ref =>
            <li key={ref.id} ><img src={ref.url} alt="reference company's logo" /></li>
          )
        }
      </ul>
    </main>
  )
}

export default References
