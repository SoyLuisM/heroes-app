import { HeroesList } from "../components"

export const MarvelPages = () => {
  const publisher = "Marvel Comics"

  return (
    <>
      <h1>{publisher}</h1>
      <hr />
      <HeroesList publisher={publisher}/>
    </>
  )
}
