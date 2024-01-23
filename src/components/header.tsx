import Link from 'next/link'
import styles from './header.module.scss'
import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.containerLogo}>
          devstore
        </Link>

        <form className={styles.formContainer}>
          <Search className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            placeholder="Buscar produtos..."
          />
        </form>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menuWrapper}>
          <ShoppingBag className={styles.shoppingBagIcon} />
          <span className={styles.cart}>Cart (0)</span>
        </div>

        <div className={styles.separator} />

        <Link href="/" className={styles.accountContainer}>
          <span className={styles.account}>Account</span>
          <Image
            src="https://github.com/jandersonvb.png"
            className={styles.avatar}
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
