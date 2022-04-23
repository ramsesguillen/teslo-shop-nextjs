import { Card, CardActionArea, Grid, CardMedia, Box, Typography, Chip } from '@mui/material';
import { FC, useMemo, useState } from "react"
import { IProduct } from '../../interfaces';
import NextLink from 'next/link'

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[0]}`
      : `/products/${product.images[1]}`
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
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <CardActionArea>
            {
              product.inStock === 0 &&
              <Chip
                label="No hay disponible"
                color='primary'
                sx={{ position: 'absolute', zIndex: 1, top: '10px', left: '10px' }}
              />
            }
            <CardMedia
              className='fadeIn'
              component={'img'}
              image={productImage}
              alt={product.title}
              onLoad={ () => setIsImageLoaded(true)}
            />
          </CardActionArea>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  )
}