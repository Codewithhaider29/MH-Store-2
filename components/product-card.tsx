import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"
import styles from "./product-card.module.css"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className={styles.image}
          />

          <div
            className={`${styles.productStatus} ${
              product.availability === "Available"
                ? styles.available
                : product.availability === "Coming Soon"
                  ? styles.comingSoon
                  : styles.soldOut
            }`}
          >
            {product.availability}
          </div>
        </Link>
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productName}>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>

        <div className={styles.productMeta}>
          <span className={styles.productPrice}>${product.price.toFixed(2)}</span>

          <div className={styles.productRating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < product.rating ? styles.starFilled : styles.star}>
                  ★
                </span>
              ))}
            </div>
            <span className={styles.reviewCount}>({product.reviews})</span>
          </div>
        </div>

        <Link href={`/product/${product.id}`} className={styles.viewDetailsBtn}>
          View Details
        </Link>
      </div>
    </div>
  )
}
