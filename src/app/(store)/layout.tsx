import { Header } from '@/components/header'

import styles from './layout.module.scss'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  )
}
