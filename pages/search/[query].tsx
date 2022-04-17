import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';
import { GetServerSideProps } from 'next'
import { dbProducts } from '../../database';
import { IProduct } from '../../interfaces/products';


interface Props {
    products: IProduct[];
    foundedProduct: boolean;
    query: string;
}
const SearchPage: NextPage<Props> = ({ products, foundedProduct, query }) => {
    // const { products, isLoading } = useProducts('/products');

    return (
        <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
            <Typography variant='h1' component='h1'>Buscar producto</Typography>

            {
                foundedProduct
                ?
                <Typography variant='h2' sx={{ mb: 1 }} textTransform="capitalize">Término: { query }</Typography>
                :
                <Box display='flex'>
                    <Typography variant='h2' sx={{ mb: 1 }}>No encontramos productos</Typography>
                    <Typography variant='h2' sx={{ mb: 1, ml: 1 }} color="secondary" textTransform="capitalize">{query}</Typography>
                </Box>
            }

            <ProductList
                products={ products }
            />
        </ShopLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { query = '' } = params as { query: string };

    if (query.length === 0) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            }
        }
    }

    let products = await dbProducts.getProductsByTerm(query);
    const foundedProduct = products.length > 0;

    if (!foundedProduct) {
        products = await dbProducts.getAllProducts();
    }

    return {
        props: {
            products,
            foundedProduct,
            query,
        }
    }
}

export default SearchPage
