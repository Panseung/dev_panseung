// base code
'use client'
import styles from "./page.module.scss"
import classNames from "classnames"
import _ from "lodash"

// modules
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signIn, signOut } from 'next-auth/react'
import { useSelector } from 'react-redux'

//project files

//data type

export default function Navbar() {
  
  const cn = classNames.bind(styles)
  const router = usePathname()
  
  let isLogin :boolean = useSelector((state :object) => {return _.get(state, 'isLogin') || false })

  return (
    <div className={styles['navbar-wrapper']}>
      <div className={styles['navbar-left']}>
        <Link 
          href="/" 
          prefetch={false}
          className={cn(styles['link'], (router === '/' ? styles['active'] : ''))}>
          <span className={styles['main-color-1']}>dev </span>
          <span className={styles['main-color-2']}>Panseung</span>
        </Link>
      </div>
      <div className={styles['navbar-right']}>
        <Link 
          href="/timeTracker" 
          prefetch={false}
          className={cn(styles['link'], (router === '/timeTracker' ? styles['active'] : ''))}>
          time tracker
        </Link>
        <Link 
          href="/devWriting" 
          prefetch={false}
          className={cn(styles['link'], (router === '/devWriting' ? styles['active'] : ''))}>
          dev writing
        </Link>
        <Link 
          href="/algoStudy" 
          prefetch={false}
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