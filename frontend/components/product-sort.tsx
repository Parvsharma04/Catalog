"use client"

import type React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { ArrowDownAZ, ArrowDownZA, ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react"

type SortOption = {
  value: string
  label: string
  icon: React.ReactNode
}

const sortOptions: SortOption[] = [
  {
    value: "name-asc",
    label: "Name (A-Z)",
    icon: <ArrowDownAZ className="h-4 w-4 mr-2" />,
  },
  {
    value: "name-desc",
    label: "Name (Z-A)",
    icon: <ArrowDownZA className="h-4 w-4 mr-2" />,
  },
  {
    value: "price-asc",
    label: "Price (Low to High)",
    icon: <ArrowDownWideNarrow className="h-4 w-4 mr-2" />,
  },
  {
    value: "price-desc",
    label: "Price (High to Low)",
    icon: <ArrowUpWideNarrow className="h-4 w-4 mr-2" />,
  },
  {
    value: "category-asc",
    label: "Category (A-Z)",
    icon: <ArrowDownAZ className="h-4 w-4 mr-2" />,
  },
]

interface ProductSortProps {
  onSortChange: (value: string) => void
  currentSort: string
}

export function ProductSort({ onSortChange, currentSort }: ProductSortProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">Sort by:</span>
      <Select value={currentSort} onValueChange={onSortChange}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select a sort option" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center">
                {option.icon}
                {option.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
