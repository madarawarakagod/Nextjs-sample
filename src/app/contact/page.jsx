import React from 'react'
import Link from 'next/link'
import styles from './contact.module.css'

const page = () => {
  return (
    <><h1>contact page</h1>
    <Link href="/" className={styles.link}>
    Home</Link>
    </>
  )
}

export default page