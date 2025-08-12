"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "@/context/cart-context"
import styles from "./header.module.css"

export default function Header() {
  const pathname = usePathname()
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">StyleTech</Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={pathname === "/" ? styles.active : ""}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/products"
                className={pathname === "/products" || pathname.startsWith("/product/") ? styles.active : ""}
              >
                Products
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/products?category=watches"
                className={pathname === "/products" && pathname.includes("category=watches") ? styles.active : ""}
              >
                Watches
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/products?category=earbuds"
                className={pathname === "/products" && pathname.includes("category=earbuds") ? styles.active : ""}
              >
                Earbuds
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/products?category=bags"
                className={pathname === "/products" && pathname.includes("category=bags") ? styles.active : ""}
              >
                Bags
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartLink}>
            <span className={styles.cartIcon}>🛒</span>
            {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
          </Link>

          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
