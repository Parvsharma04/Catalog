"use client";
import Product from "@/components/Product";
import { useMemo, useState } from "react";
import { CategorySelector } from "../components/category-selector";
import { ProductSort } from "../components/product-sort";
import { ProductType, useProductContext } from "../context/ProductContext";

export default function Home() {
  const { products, loading } = useProductContext();
  const [sortOption, setSortOption] = useState("name-asc");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  console.log("Products:", products);

  // Extract unique categories
  const categories: string[] = useMemo(() => {
    return Array.from(
      new Set(products.map((product: ProductType) => product.category))
    );
  }, [products]);

  // Handle category selection
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === null) {
      return products;
    }
    return products.filter(
      (product: ProductType) => product.category === selectedCategory
    );
  }, [selectedCategory, products]);

  // Sort products based on selected sort option
  const sortedProducts: ProductType[] = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.Price - b.Price;
        case "price-desc":
          return b.Price - a.Price;
        case "category-asc":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortOption]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-muted-foreground">Loading products...</p>
      </div>
    );
  }

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
          <p className="text-lg text-muted-foreground">
            No products match your filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
