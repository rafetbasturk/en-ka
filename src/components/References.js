import { references } from "./data"

const References = () => {
  return (
    <main className="ref">
      <div className="ref__title">
        <h1>Referanslar</h1>
        <span className="material-icons">connect_without_contact</span>
      </div>
      <ul className="ref__list" >
        {
          references.map(ref =>
            <li key={ref.id} ><img src={ref.url} alt={ref.alt} /></li>
          )
        }
      </ul>
    </main>
  )
}

export default References
