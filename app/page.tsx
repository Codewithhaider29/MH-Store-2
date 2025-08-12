import Link from "next/link"
import Image from "next/image"
import { getProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"
import styles from "./page.module.css"

export default function Home() {
  const featuredProducts = getProducts().slice(0, 8)
  const categories = [
    { id: "watches", name: "Watches", image: "/images/category-watches.jpg" },
    { id: "earbuds", name: "Earbuds", image: "/images/category-earbuds.jpg" },
    { id: "bags", name: "Bags", image: "/images/category-bags.jpg" },
    { id: "neckbands", name: "Neckbands", image: "/images/category-neckbands.jpg" },
  ]

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Discover Premium Products</h1>
          <p>Shop the latest trends in watches, audio, and accessories</p>
          <Link href="/products" className={styles.shopNowButton}>
            Shop Now
          </Link>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <h2>Shop by Category</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <Link href={`/products?category=${category.id}`} key={category.id} className={styles.categoryCard}>
              <div className={styles.categoryImageContainer}>
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={styles.categoryImage}
                />
              </div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featuredSection}>
        <h2>Featured Products</h2>
        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.viewAllContainer}>
          <Link href="/products" className={styles.viewAllButton}>
            View All Products
          </Link>
        </div>
      </section>
    </main>
  )
}
