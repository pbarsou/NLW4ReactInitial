export function ExperienceBar () {
  return (
    <header className="experience-bar"> 
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span className="current-experience" style={{ left: '50%'}}>
        300px
      </span> 
      </div>
      <span>600 xp</span>
    </header>
    // também poderia ser uma '<div>', mas por questão de semântica, usamos o '<header>'
    // '<div />', div vazia
    /* '{{width: '60%'}}' estamos definindo localmente e em formato de js pois é um valor que irá 
    variar ao longo da execução da app */
    /* 'left: '50%' significa que vai andar da esquerda pra direita, 50% */
  )
}