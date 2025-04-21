"use client"

import { useState, useMemo } from "react"
import Product from "../components/Product"
import { ProductSort } from "../components/product-sort"
import { CategorySelector } from "../components/category-selector"

// Sample product data with more variety
const productData = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 129.99,
    description:
      "Premium wireless headphones with noise cancellation, 30-hour battery life, and comfortable over-ear design for immersive sound experience.",
    image: "/placeholder.svg?height=240&width=384",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    description:
      "Advanced smartwatch with health monitoring, GPS, and a vibrant display. Track your fitness goals and stay connected on the go.",
    image: "/placeholder.svg?height=240&width=384",
    category: "Electronics",
  },
  {
    id: "3",
    name: "Cotton T-Shirt",
    price: 24.99,
    description:
      "Soft and comfortable cotton t-shirt, perfect for everyday wear. Available in multiple colors and sizes.",
    image: "/placeholder.svg?height=240&width=384",
    category: "Clothing",
  },
  {
    id: "4",
    name: "Running Shoes",
    price: 89.99,
    description:
      "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort and performance.",
    image: "/placeholder.svg?height=240&width=384",
    category: "Footwear",
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    price: 59.99,
    description:
      "Portable Bluetooth speaker with 360° sound, waterproof design, and 12-hour battery life. Perfect for outdoor adventures.",
    image: "/placeholder.svg?height=240&width=384",
    category: "Electronics",
  },
  {
    id: "6",
    name: "Leather Wallet",
    price: 34.99,
    description: "Genuine leather wallet with multiple card slots, bill compartment, and RFID blocking technology.",
    image: "/placeholder.svg?height=240&width=384",
    category: "Accessories",
  },
]

export default function Home() {
  const [sortOption, setSortOption] = useState("name-asc")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(productData.map((product) => product.category)))
  }, [])

  // Handle category selection
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
  }

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === null) {
      return productData
    }
    return productData.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  // Sort products based on selected sort option
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "category-asc":
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })
  }, [filteredProducts, sortOption])

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <ProductSort onSortChange={setSortOption} currentSort={sortOption} />
        </div>

        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {sortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No products match your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}
