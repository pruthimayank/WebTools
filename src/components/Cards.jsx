export default function Card(props) {
  return (
    <a href={props.iL} style={{ textDecoration: "none" }}>
      <div className="card">
        <img src={`https://source.unsplash.com/random/300x200/?${props.iD}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>{props.iT}</h4>
          <p>Category:<i> {props.iC}</i></p>
          <p className="card-text">Description: {props.iD}</p>
          <p className="text-end"><small><b>{props.iTags}</b></small></p>
        </div>
      </div>
    </a>
  )
}