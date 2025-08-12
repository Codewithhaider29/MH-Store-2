import { getProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"
import styles from "./products.module.css"

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const { category } = searchParams

  let products = getProducts()
  let title = "All Products"

  if (category) {
    products = products.filter((product) => product.category === category)
    title = `${category.charAt(0).toUpperCase() + category.slice(1)}`
  }

  const categories = [
    { id: "all", name: "All Products" },
    { id: "watches", name: "Watches" },
    { id: "earbuds", name: "Earbuds" },
    { id: "bags", name: "Bags" },
    { id: "neckbands", name: "Neckbands" },
  ]

  return (
    <div className={styles.productsPage}>
      <div className={styles.container}>
        <h1>{title}</h1>

        <div className={styles.categoryFilter}>
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.id === "all" ? "/products" : `/products?category=${cat.id}`}
              className={`${styles.categoryLink} ${
                (cat.id === "all" && !category) || cat.id === category ? styles.active : ""
              }`}
            >
              {cat.name}
            </a>
          ))}
        </div>

        {products.length > 0 ? (
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.noProducts}>
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
