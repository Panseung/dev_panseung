import styles from './layout.module.scss'

import Navbar from '@/components/Navbar/page'
import Footer from '@/components/Footer/page'
import Head from 'next/head'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>hi</title>
      </Head>
      
      <body className={styles['layout']}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
