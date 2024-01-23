import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.wrapper}>
        <Image
          src="/moletom-never-stop-learning.png"
          className={styles.image}
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className={styles.princeContainer}>
          <span className={styles.description}>Moleton IA Side</span>
          <span className={styles.price}>$129</span>
        </div>
      </Link>

      <Link href="/" className={styles.wrapperOne}>
        <Image
          src="/moletom-java.png"
          className={styles.image}
          width={460}
          height={460}
          quality={100}
          alt=""
        />

        <div className={styles.princeContainerOne}>
          <span className={styles.descriptionOne}>Moleton Java</span>
          <span className={styles.priceOne}>$190</span>
        </div>
      </Link>

      <Link href="/" className={styles.wrapperTwo}>
        <Image
          src="/camiseta-dowhile-2022.png"
          className={styles.image}
          width={460}
          height={460}
          quality={100}
          alt=""
        />

        <div className={styles.princeContainerTwo}>
          <span className={styles.descriptionTwo}>Camiseta Do While 2022</span>
          <span className={styles.priceTwo}>$99,90</span>
        </div>
      </Link>
    </div>
  )
}
