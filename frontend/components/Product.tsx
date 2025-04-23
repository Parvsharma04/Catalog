"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProductType } from "@/context/ProductContext";
import { MinusIcon, PlusIcon, ShoppingCartIcon, TagIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Product({ product }: { product: ProductType }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Format price to include 2 decimal places
  const formattedPrice = product.Price.toFixed(2);

  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-60 w-full">
        <Image
          src={product.image || "/placeholder.svg?height=240&width=384"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-green-600 font-medium text-lg">
              ${formattedPrice}
            </p>
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            <TagIcon className="h-3 w-3" />
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={decrementQuantity}
            >
              <MinusIcon className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={incrementQuantity}
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button className="gap-2">
            <ShoppingCartIcon className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
