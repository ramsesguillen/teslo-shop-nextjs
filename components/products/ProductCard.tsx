import { Card, CardActionArea, Grid, CardMedia, Box, Typography } from '@mui/material';
import { FC, useMemo, useState } from "react"
import { IProduct } from '../../interfaces';
import NextLink from 'next/link'

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[0]}`
      : `products/${product.images[1]}`
  }, [isHovered])

  return (
    <Grid
      item
      xs={6}
      sm={4}
      key={product.slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={'/product/slug'} passHref prefetch={false}>
          <CardActionArea>
            <CardMedia
              className='fadeIn'
              component={'img'}
              image={productImage}
              alt={product.title}
            />
          </CardActionArea>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  )
}