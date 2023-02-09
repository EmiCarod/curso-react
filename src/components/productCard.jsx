import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text,} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

    const productCard = ({
        image,
        title,
        precio,
        id,
        getProduct,
        updateProduct,
        deleteProduct,
    }) => {
    const path = useLocation().pathname;

    return (
        <Card maxW="sm" mt={5} mx={5}>
        <CardBody>
            <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
            <Link to={`/products/${id}`}>
            <Heading size="md">{title}</Heading>
            </Link>
            <Text color="green.700" fontSize="2xl">
                ${precio}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing="2">
            <Link to={`/products/${id}`}>
                <Button
                variant="solid"
                colorScheme="green"
                onClick={() => getProduct(id)}
                >
                Ver Mas
                </Button>
            </Link>
            <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => deleteProduct(id)}
            >
                Borrar
            </Button>
            <Button
                variant="solid"
                colorScheme="yellow"
                onClick={() => updateProduct(id)}
            >
                actualizar
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
    );
};

export default productCard;