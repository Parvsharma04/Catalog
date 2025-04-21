"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CategorySelectorProps {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export function CategorySelector({ categories, selectedCategory, onCategoryChange }: CategorySelectorProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(null)}
          className={cn(
            "rounded-full",
            selectedCategory === null ? "bg-primary text-primary-foreground" : "bg-background",
          )}
        >
          All
        </Button>

        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={cn(
              "rounded-full",
              selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-background",
            )}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
