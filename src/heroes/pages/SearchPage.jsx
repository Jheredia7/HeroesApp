
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroeCard } from '../components/HeroeCard';

import { getHeroesByName } from '../helpers/getHeroesByName';
import { useForm } from '../hooks/useForm';


export const SearchPage = () => {


  const navigate = useNavigate();

  const location = useLocation();
  
  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);


  const { searchText, onInputChange } = useForm({
    searchText: q
});

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

  //  console.log({searchText });

   navigate(`?q=${searchText.toLowerCase().trim()}`)



  }
  return (
    <>
    <h1>Buscar</h1>
      <hr />

<div className="row">
      <div className='col-5'>
        <h4>Buscando...</h4>
        <hr />
              <form 
                onSubmit={ onSearchSubmit }
                className="animate__animated animate__jackInTheBox" 
                role="search">
                      <input 
                        className=" form-control " 
                        type="search" placeholder="Buscar" 
                        name="searchText" 
                        value={searchText} 
                        onChange={onInputChange}/>
                  <button className='btn btn-outline-primary  mt-1' >
                    Buscar
                </button>
              </form>       
      </div>


      <div className='col-7'>
        <h4>Resultados</h4>
        <hr />

        {
          (q === '')
          ? <div className="alert alert-primary">Buscar un héroe</div>
          : (heroes.length === 0 ) && <div className="alert alert-danger">No existe ningún héroe con <b>{q}</b></div>

        }
          

          
            {
              heroes.map( heroe => (
                <HeroeCard key={ heroe.id} {...heroe} />
              ))
            }
     

      </div>
      </div>

    </>
  )
}
