import './card.css'


export default function Card(props) {


  return (
    <>

      <div className='cardGeral' data-anime='botton'>
        <a target="blank" href={props.links.url}>
          <div className='card-comp'>
            <img src={props.links.img} alt="Logo Github" />
          </div>
        </a>

        <span className='title-comp'>
          <h4>{props.links.title}</h4>
          <p>{props.links.description}</p>
        </span>
      </div>
    </>
  )
}