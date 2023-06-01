import styles from './layout.module.scss'

import Navbar from '@/components/Navbar/page'

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
      </body>
    </html>
  )
}
