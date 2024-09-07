import HeroVideo from '@/componentes/heroVideo/HeroVideo'
import styles from './home.module.css'
import CtaPrimario from '@/componentes/cta/CtaPrimario'
import CtaSecundario from '@/componentes/cta/CtaSecundario'

export default function Home() {
  return (
    <section className={styles.section}>
      <HeroVideo />
      <div className={styles.textContainer}>
        <h3>Eficiência com Inovação</h3>
        <h1>Inovação Sustentável, Energia Inteligente.</h1>
        <p>O SIGAS é uma plataforma de IA para gestão integrada de ativos sustentáveis em sistemas agrovoltaicos, otimizando o desempenho fotovoltaico e agrícola. Utiliza IoT, machine learning e blockchain para monitoramento, manutenção preditiva e gestão de comercialização em tempo real.</p>
      <div className={styles.buttons}>
        <CtaPrimario texto='Comece Agora' link='/registrar'/>
        <CtaSecundario texto='Saber Mais' link='/quem-somos'/>

      </div>
      </div>

    </section>
  )
}
