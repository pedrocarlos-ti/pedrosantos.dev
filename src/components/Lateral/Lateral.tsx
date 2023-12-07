import { Box, Flex, Text, chakra } from "@chakra-ui/react";

type Props = {};

const StyledBox = chakra(Box, {
  baseStyle: {
    pt: 5,
    direction: "column",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: `rgba(0, 0, 0, 0.05)`,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "20px",
      backgroundColor: "melro.100",
    },
  },
});

const Lateral = (props: Props) => {
  return (
    <StyledBox bg="melro.500" flex={1.25}>
      <Flex
        as="article"
        direction="row"
        wrap="wrap"
        align="center"
        justify="center"
        h="100vh"
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <Flex
              direction="column"
              justify="center"
              align="center"
              borderRadius={6}
              border="1px solid transparent"
              transform={
                index % 2 === 0 ? "translateY(-45px)" : "translateY(0px)"
              }
              transition="all 0.22s ease-in-out"
              _hover={{
                transform: `scale(1.1) translateY(-${
                  index % 2 === 0 ? 45 : 0
                }px)`,
                zIndex: "1",
                border: `1px solid`,
                borderColor: "melro.500",
              }}
              m={index % 2 === 0 ? "0" : "4px"}
              w={180}
              h={230}
              bg="melro.300"
              color="gray.100"
            >
              <Text>TypeScript</Text>
              <Text> Projeto XYZ </Text>
              <Text> Description</Text>
            </Flex>
          ))}
      </Flex>

      <Flex
        m={5}
        direction="row"
        wrap="wrap"
        align="center"
        justify="space-around"
        gap={5}
      >
        <Box w={150} bg="melro.100" h={150} borderRadius={6}>
          Techs
        </Box>
        <Box w={150} bg="melro.100" h={150} borderRadius={6}>
          Techs
        </Box>
        <Box w={150} bg="melro.100" h={150} borderRadius={6}>
          Techs
        </Box>
        <Box w={150} bg="melro.100" h={150} borderRadius={6}>
          Techs
        </Box>
      </Flex>
    </StyledBox>
  );
};

export default Lateral;
