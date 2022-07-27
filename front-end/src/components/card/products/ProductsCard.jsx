import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Image,
  Center,
  Button,
} from '@chakra-ui/react';
import context from '../../../context';
import ProductsButton from '../../button/products/ProductsButton';

function ProductCard() {
  const {
    products,
    totalPrice,
    productsForStorage,
  } = useContext(context);

  const MAGIC_BUMBER_TO_FIXED = 2;

  const history = useHistory();

  const handleButtonCheckout = () => {
    localStorage.setItem('carrinho', JSON.stringify(productsForStorage));
    history.push('/customer/checkout');
  };

  return (
    <SimpleGrid
      minChildWidth="200px"
      spacing="40px"
      w="80%"
      p="30px"
    >
      {
        products.map(({ id, name, price, urlImage }) => (
          <Box
            border="1px"
            boxShadow="lg"
            borderColor="gray.200"
            height="340px"
            key={ id }
          >
            <Flex bg="blue.100" w="30%" p="2" m="2" fontWeight="bold">
              R$:
              <Text
                data-testid={ `customer_products__element-card-price-${id}` }
                className="cards-products-price"
              >
                { price.toString().replace('.', ',') }
              </Text>
            </Flex>

            <Center>
              <Image
                centerContente
                src={ urlImage }
                width="200"
                height="200"
                alt={ `produto ${name}` }
                data-testid={ `customer_products__img-card-bg-image-${id}` }
              />
            </Center>

            <Flex bg="gray.200" p="2" flexDir="column" alignItems="center">
              <Text
                p="1"
                fontSize="14px"
                textAlign="center"
                data-testid={ `customer_products__element-card-title-${id}` }
                className="cards-products-name"
              >
                {name}
              </Text>

              <ProductsButton
                id={ id }
                price={ price }
                name={ name }
              />
            </Flex>
          </Box>
        ))
      }

      <Flex alignSelf="flex-end" justifyContent="flex-end">
        <Button
          size="lg"
          colorScheme="green"
          type="button"
          onClick={ handleButtonCheckout }
          data-testid="customer_products__button-cart"
          disabled={ totalPrice === 0 }
        >
          Ver Carrinho R$:
          <span data-testid="customer_products__checkout-bottom-value">
            {totalPrice.toFixed(MAGIC_BUMBER_TO_FIXED).toString().replace('.', ',')}
          </span>
        </Button>
      </Flex>

    </SimpleGrid>
  );
}

export default ProductCard;
