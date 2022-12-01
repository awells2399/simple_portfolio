import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <div>
      <VStack
        backgroundColor="white"
        borderRadius="lg"
        align="left"
        pb={4}
        spacing={4}
      >
        <Image src={imageSrc} alt={description} borderRadius="lg"></Image>
        <Heading color="black" size="md" pl={3}>
          {title}
        </Heading>
        <Text color="gray.600" pl={3}>
          {description}
        </Text>

        <Text color="black" pl={3}>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </VStack>
    </div>
  );
};

export default Card;
