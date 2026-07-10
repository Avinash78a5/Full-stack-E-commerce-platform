import { ProductsData } from './ProductsData';
import { BookProducts } from './BookProducts';
import { GroceryProducts } from './GroceryProducts';
import { LaptopProducts } from './LaptopProducts';

export const ProductRegistry = {

    mobile: ProductsData,

    laptop: LaptopProducts,

    books: BookProducts,

    grocery: GroceryProducts,
};