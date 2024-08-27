import Card from "../Card";

function Skills({ skills }) {

const habilidade = [
  {
  titulo: "HTML",
  nivel: "Avançado",
  tempoXp: "10 anos",
  color: 'blue'
},
{
  titulo: "CSS",
  nivel: "Pro",
  tempoXp: "5 anos",
  color: 'green'
},
{
  titulo: "HTML",
  nivel: "Ruim",
  tempoXp: "1 ano",
  color: 'red'
},
{
  titulo: "SQL",
  nivel: "Basico",
  tempoXp: "2 anos",
  color: 'grey'
},
{
  titulo: "PYTHON",
  nivel: "Bom",
  tempoXp: "3 anos",
  color: 'purple'
},

]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <div className="skill-card">
      <Card dataHabilidades={habilidade}/>
      </div>
    </div>
  );
}

export default Skills;