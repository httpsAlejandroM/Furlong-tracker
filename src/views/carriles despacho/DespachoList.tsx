import Carril from "./components/Carril";

function despachoList() {

    const carriles = Array.from({length: 22}, (_, index)=> index + 1);

  return (
    <section className='container-fluid mt-4'>
      {
        carriles.map((carril)=>{
          return (
            <Carril key={carril} carrilNumber={carril}></Carril>
          )
        })
      }
    </section>
  )
}
export default despachoList