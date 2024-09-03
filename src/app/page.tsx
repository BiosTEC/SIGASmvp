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
        <p>Facilitando trocas sustentáveis, o SIGAS torna o comércio de energia uma experiência eficiente. Além disso, possibilita a venda descomplicada de excedentes de energia verde. Uma solução integrada para promover a sustentabilidade.</p>
      <div className={styles.buttons}>
        <CtaPrimario texto='Comece Agora' link='/registrar'/>
        <CtaSecundario texto='Saber Mais' link='/quem-somos'/>

      </div>
      </div>

    </section>
  )
}
