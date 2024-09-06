import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string";

import { useForm } from "../../hooks/useForm"
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPages = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search)
 
  const heroes = getHeroByName(q)

  const { searchText, onInputChange } =useForm({
    searchText: q
  })

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const onSearchSubmit = (event) =>{
    event.preventDefault()
    // if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
    
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <h1>SearchPages</h1>
          <hr />
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
              type="text"
              className="form-control" 
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
              />
              <button
                className="btn btn-outline-primary mt-3"
              >Search</button>
            </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {
              (q ==='' )
                ? <div className="alert alert-primary animate__animated animate__fadeIn"> Search a hero </div>
                : ( heroes.length === 0 )
                 && <div className="alert alert-danger animate__animated animate__fadeIn"> no hero with <b>{ q }</b> </div>
            }
            
            {/* 
               <div className="alert alert-primary animate__animated animate__fadeIn" 
                    style={{ display: showSearch ? '' : 'none' }}>
                  Search a hero
                </div>

                <div className="alert alert-danger animate__animated animate__fadeIn" 
                    style={{ display: showError ? '' : 'none' }}>
                  No hero with <b>{ q }</b>
                </div>

            */}

            {
              heroes.map( hero =>(
                <HeroCard key={hero.id} {...hero}/>
              ) )
            }

          </div>
        </div>
      </div>
    </>
  )
}
