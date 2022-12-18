import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  console.log(imageSrc)
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      style={{
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
      <Image src={`${imageSrc}`} alignSelf='center' alt='Avatar' borderRadius={8} />
      <VStack p={4} spacing={4} alignItems='flex-start'>
        <Heading size='sm'>{title}</Heading>
        <Text color='grey'>{description}</Text>
        <HStack>
          <Text as='samp' >See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
