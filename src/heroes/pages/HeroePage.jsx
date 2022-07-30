import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers/getHeroesById";



export const HeroePage = () => {

  const { id } = useParams();
  const navigate =  useNavigate();

  const heroeId = useMemo( () => getHeroesById(id), [id] );
  
  
  const onNavigate = () =>{
    navigate(-1);
  }

  const heroImageUrl = `/src/assets/heroes/${id}.jpg`

 
  

  if (!heroeId) {
    return < Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5 animate__animated animate__zoomIn" >
      <div className="  col-4 " >
        <img
            src={ heroImageUrl}
            alt={ heroeId.superhero }
            className="img-thumbnail  animate__animated animate__bounceInLeft"
          />
      </div>

    <div className="col-8 " >
        <h3 className="animate__animated animate__zoomInDown">{ heroeId.superhero }</h3>
        <ul className="list-group list-group-flush  animate__animated animate__zoomInDown"> 
        <li className="list-group-item"><b>Alter ego:</b> {heroeId.alter_ego} </li>
        <li className="list-group-item"><b>Publicador:</b> {heroeId.publisher} </li>
        <li className="list-group-item"><b>Primera aparición:</b> {heroeId.first_appearance} </li>
        <li className="list-group-item"><b>Nombre de pila:</b> {heroeId.characters} </li>
        </ul>

    <button className="btn btn-outline-primary mt-3 animate__animated animate__bounceInRight" onClick={onNavigate} >
      Volver

    </button>


    </div>




    </div>

    
  )
}
