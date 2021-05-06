import {ProductData} from './product-data';

export interface CategoryData {
  title: string;
  h1: string;
  text: string;
  products: ProductData;
  metaDescription: string;
}
