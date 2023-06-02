import styles from './layout.module.scss'

import Navbar from '@/components/Navbar/page'
import Footer from '@/components/Footer/page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles['layout']}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
