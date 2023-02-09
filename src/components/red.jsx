import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import React from "react";


const red = ({
    products,
    loading,
    getProduct,
    updateProduct,
    deleteProduct,
    }) => {
    return (
        <Center>
        <SimpleGrid columns={2}>
            {loading && (
                <Spinner
                    thickness="5px"
                    speed="0.60s"
                    emptyColor="gray.200"
                    color="black"
                    size="xl.5"
                />
            )}
            {products &&
                products.map((product) => {
                    return (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        precio={product.precio}
                        getProduct={getProduct}
                        updateProduct={updateProduct}
                        deleteProduct={deleteProduct}
                    />
                );
            })}
        </SimpleGrid>
        </Center>
        );
    };
    
export default red;

