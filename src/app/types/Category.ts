import { Product } from "./Product"

export type typeCateProduct = {
    category: {
        _id: string,
        name: string,
        status: number
    },
    products:Product[]
}