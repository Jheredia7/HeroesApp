import { Link } from "react-router-dom"
import { HeroList } from "./HeroList"

export const HeroeCard = ({
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
}) => {

    const heroImageUrl = `/src/assets/heroes/${id}.jpg`
  

    
  return (
        <div className="card mt-3 py-3 animate__animated animate__fadeIn">
            <img src={ heroImageUrl } className="img-thumbnail" alt={superhero} />
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}.</p>
                <Link className="btn btn-primary" to={`/heroe/${id}`}>Ver perfil</Link>
            </div>
    
        </div>

    
  )
}
