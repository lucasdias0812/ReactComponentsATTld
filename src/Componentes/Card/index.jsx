export default function Card({dataHabilidades}) {

    return (
        <>
        {dataHabilidades.map(hab=>(
            <div className="skill-card"
            style={{backgroundColor: `${hab.color}`}}>
               <h3>Skill: {hab.titulo}</h3>
               <p>Nivel: {hab.nivel}</p>
               <p>Tempo de Experiência: {hab.tempoXp}</p>
            </div>
        )
        )
        }
        
        </>
    )
}
