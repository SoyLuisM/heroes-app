import { HeroesList } from "../components"

export const DcPages = () => {
  const publisher = "DC Comics"
  
  return (
    <>
      <h1>{publisher}</h1>
      <hr />
      <HeroesList publisher={publisher}/>
    </>
  )
}
