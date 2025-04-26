import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
   <>
   <h1>Home page</h1>
   <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/services">Service</Link></li>
    <li><Link href="/products">Products</Link></li>
    <li><Link href="/About">About</Link></li>
    <li><Link href="/contact">Contact Us</Link></li>
    <li><Link href="/About/branches">Branches</Link></li>
    
   </ul>
   <Link href="https://nextjs.org" target="_blanks">NextJS</Link>
   </>
  )
}
