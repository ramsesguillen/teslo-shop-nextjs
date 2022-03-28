import { FC } from "react";
import { IProduct } from "../../interfaces";
import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import { initialData } from "../../database/products";
import { ProductCard } from "./ProductCard";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {
        products.map( product => (
          <ProductCard product={product} key={product.slug} />
        ))
      }
    </Grid>
  )
}