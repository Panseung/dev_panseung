'use client'
import Link from 'next/link'
import styles from './page.module.scss'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import { signIn, signOut } from 'next-auth/react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export default function Navbar() {
  
  const cn = classNames.bind(styles)
  const router = usePathname()
  
  let isLogin = useSelector((state :object) => {return _.get(state, 'isLogin') })

  return (
    <div className={styles['navbar-wrapper']}>
      <div className={styles['navbar-left']}>
        <Link href="/" className={cn(styles['link'], (router === '/' ? styles['active'] : ''))}>
          <span className={styles['main-color-1']}>dev </span>
          <span className={styles['main-color-2']}>Panseung</span>
        </Link>
      </div>
      <div className={styles['navbar-right']}>
        <Link 
          href="/timeArchive" 
          className={cn(styles['link'], (router === '/timeArchive' ? styles['active'] : ''))}>
          time archive
        </Link>
        <Link 
          href="/devWriting" 
          className={cn(styles['link'], (router === '/devWriting' ? styles['active'] : ''))}>
          dev writing
        </Link>
        <Link 
          href="/algoStudy" 
          className={cn(styles['link'], (router === '/algoStudy' ? styles['active'] : ''))}>
          algo study
        </Link>
        <div onClick={ () => { isLogin ? signOut() : signIn() } }>
          { isLogin ? 'logOut' : 'logIn' }
        </div>
      </div>
    </div>
  )
}