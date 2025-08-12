import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>StyleTech</h3>
            <p className={styles.footerDescription}>
              Shop the latest trends in watches, earbuds, bags, and neckbands. Quality products at affordable prices.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Shop</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/products?category=watches">Watches</Link>
              </li>
              <li>
                <Link href="/products?category=earbuds">Earbuds</Link>
              </li>
              <li>
                <Link href="/products?category=bags">Bags</Link>
              </li>
              <li>
                <Link href="/products?category=neckbands">Neckbands</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Information</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping Policy</Link>
              </li>
              <li>
                <Link href="/returns">Returns & Refunds</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <address className={styles.contactInfo}>
              <p>123 Commerce Street</p>
              <p>City, State 12345</p>
              <p>Email: info@styletech.com</p>
              <p>Phone: 03287445683</p>
            </address>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} StyleTech. All rights reserved.</p>

          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
