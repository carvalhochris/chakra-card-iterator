import { Card, Center, CardBody } from "@chakra-ui/react";
import {
  // Button,
  // CardFooter,
  Text,
  Divider,
  // ButtonGroup,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
// import axios from "axios";
// import { useEffect, useState } from "react";

function MyCard(props) {
  return (
    <Center>
      <Card m={2} maxW="sm">
        <CardBody>
          <Image
            src={props.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{props.title}</Heading>
            <Text>{props.desc}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${props.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        {/* <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter> */}
      </Card>
    </Center>
  );
}

export default MyCard;
