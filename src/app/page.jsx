import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <div className="navigation"><div className="header">
   
   <h1>Home page</h1>
   </div>
   <div>
   <ul className="body">
    <li><Link href="/" className={styles.link}>Home</Link></li>
    <li><Link href="/services" className={styles.link}>Service</Link></li>
    <li><Link href="/products" className={styles.link}>Products</Link></li>
    <li><Link href="/About" className={styles.link}>About</Link></li>
    <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
    <li><Link href="/About/branches" className={styles.link}>Branches</Link></li>
    
   </ul>
   </div>
   </div>
   <Link href="https://nextjs.org" target="_blanks" className={styles.link}>NextJS</Link>
   
   </>
  )
}
