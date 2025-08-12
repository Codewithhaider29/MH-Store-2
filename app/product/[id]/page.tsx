import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProductById, getRelatedProducts } from "@/lib/products"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductCard from "@/components/product-card"
import styles from "./product.module.css"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id, product.category)

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Link href="/">Home</Link> /<Link href="/products"> Products</Link> /
          <Link href={`/products?category=${product.category}`}>
            {" "}
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>{" "}
          /<span> {product.name}</span>
        </div>

        <div className={styles.productDetails}>
          <div className={styles.productImage}>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className={styles.image}
            />
          </div>

          <div className={styles.productInfo}>
            <h1>{product.name}</h1>

            <div className={styles.productMeta}>
              <span className={styles.price}>${product.price.toFixed(2)}</span>

              <div className={styles.availability}>
                <span
                  className={`${styles.status} ${
                    product.availability === "Available"
                      ? styles.available
                      : product.availability === "Coming Soon"
                        ? styles.comingSoon
                        : styles.soldOut
                  }`}
                >
                  {product.availability}
                </span>
              </div>

              <div className={styles.reviews}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < product.rating ? styles.starFilled : styles.star}>
                      ★
                    </span>
                  ))}
                </div>
                <span className={styles.reviewCount}>({product.reviews} reviews)</span>
              </div>
            </div>

            <div className={styles.description}>
              <p>{product.description}</p>
            </div>

            {product.colors && product.colors.length > 0 && (
              <div className={styles.colors}>
                <h3>Available Colors</h3>
                <div className={styles.colorOptions}>
                  {product.colors.map((color) => (
                    <div key={color} className={styles.colorOption} style={{ backgroundColor: color }} title={color} />
                  ))}
                </div>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className={styles.sizes}>
                <h3>Available Sizes</h3>
                <div className={styles.sizeOptions}>
                  {product.sizes.map((size) => (
                    <div key={size} className={styles.sizeOption}>
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.actions}>
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>

        <div className={styles.relatedProducts}>
          <h2>Related Products</h2>
          <div className={styles.productsGrid}>
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
