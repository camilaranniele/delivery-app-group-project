import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import NavBar from '../components/navBar/NavBar';
import ProductCard from '../components/card/products/ProductsCard';

function Products() {
  return (
    <Box>
      <NavBar />
      <Center>
        <ProductCard />
      </Center>
    </Box>
  );
}

export default Products;
