import { Typography } from '@mui/material';
import type { NextPage } from 'next';


import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
// import { initialData } from '../../database/products';
import { useProducts } from '../../hooks';


const KidPage: NextPage = () => {

    const { products, isLoading } = useProducts('/products?gender=kid');


    return (
        <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
            <Typography variant='h1' component='h1'>Niños</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>Productos para niños</Typography>

            { isLoading
            ? <FullScreenLoading />
            :
            <ProductList
                products={ products }
            />
            }
        </ShopLayout>
    )
}

export default KidPage
