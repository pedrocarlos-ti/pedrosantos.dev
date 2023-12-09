import { MoonIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Circle,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Square,
  Stack,
  StackDivider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Lateral from "./components/Lateral/Lateral";
import { ChakraIcon, Github, Linkedin } from "./components/icons";

function App2() {
  return (
    <Box maxW="7xl" bg="melro.200">
      <Flex height="100vh">
        <Flex
          flex={[1, 1, 1.25]}
          color="gray.100"
          direction="column"
          justify="space-evenly"
          m={12}
        >
          <Box>
            <Text fontSize="6xl" fontWeight="bold">
              Pedro Santos
            </Text>
            <Text fontSize="xl" fontWeight="medium">
              Software Engineer and React / React Native
            </Text>
          </Box>

          <Box>
            <Text textAlign="justify" lineHeight="taller">
              👋 Hey there, I'm <b>Pedro Santos</b> – your friendly Software
              Engineer and React aficionado with a decade of tech adventures.
              From support gigs to software crafting, I groove through the
              development cycle, using agile magic to build scalable solutions
              and untangle business puzzles.
            </Text>

            <Text fontWeight="bold" lineHeight="taller">
              Let's bring your ideas to life! 💻 ✨
            </Text>
          </Box>

          <Box as="nav">
            <List fontWeight="medium">
              <ListItem my={3}>Projects</ListItem>
              <ListItem my={3}>Skills</ListItem>
              <ListItem my={3}>Contact</ListItem>
            </List>
          </Box>

          <Flex align="center" gap={6}>
            <Avatar
              pointerEvents="none"
              size="md"
              name="Pedro Santos"
              src="https://avatars.githubusercontent.com/u/18473317?v=4"
            />
            <List display="flex" gap={6}>
              <ListItem>
                <Link
                  display="flex"
                  href="https://github.com/pedrocarlos-ti"
                  isExternal
                  alignItems="center"
                >
                  <Github fontSize={20} mr={2} />
                  Github
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  display="flex"
                  href="https://www.linkedin.com/in/pedro-santos/"
                  isExternal
                  alignItems="center"
                >
                  <Linkedin fontSize={22} mr={2} />
                  LinkedIn
                </Link>
              </ListItem>
            </List>
          </Flex>
        </Flex>

        <Lateral />
      </Flex>
    </Box>
  );
}

function App1() {
  return (
    <Box h="100vh" bg="bg.canvas">
      <Box shadow="md">
        <Container px={4} py={6} maxW="7xl">
          <Flex>
            <HStack flex={1} color="gray.700" gap={3}>
              <Button variant="text" as={Link} href="/">
                <ChakraIcon />
              </Button>

              <ButtonGroup color="gray.600" variant="text" isAttached>
                <Popover trigger="hover">
                  <PopoverTrigger>
                    <Button color="inherit" variant="text">
                      Components
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>
                      Are you sure you want to have that milkshake?
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Button color="inherit" variant="text">
                  Pricing
                </Button>
                <Button color="inherit" variant="text">
                  Marketplace
                </Button>
                <Button color="inherit" variant="text">
                  Support
                </Button>
              </ButtonGroup>
            </HStack>

            <HStack gap={3}>
              <IconButton
                colorScheme="gray"
                variant="tertiary"
                icon={<SearchIcon />}
                aria-label="Search"
                _hover={{ bg: "gray.100" }}
              ></IconButton>
              <IconButton
                variant="tertiary"
                colorScheme="gray"
                icon={<MoonIcon stroke="currentcolor" />}
                aria-label="Change Theme"
                _hover={{ bg: "gray.100" }}
              ></IconButton>
              <Button size="md" variant="outline">
                Sign in
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    function onScroll(e) {
      if (window.scrollY > 80) {
        if (!scrollY) setScrollY(true);
      } else if (scrollY) {
        if (window.scrollY < 80) setScrollY(false);
      }
    }
    addEventListener("scroll", onScroll);
    return () => removeEventListener("scroll", onScroll);
  }, [scrollY]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Box h="200vh">
      {/* <Box
        top={0}
        position="sticky"
        transition="all 0.5s ease-in-out"
        shadow={scrollY ? "md" : "none"}
      >
        <Container maxW="7xl" py={6}>
          <HStack>
            <HStack flex={1}>
              <Button onClick={scrollToTop} fontSize="2xl" variant="text">
                Melro.io
              </Button>

              <ButtonGroup>
                <Button variant="ghost">Components</Button>
                <Button variant="ghost">Pricing</Button>
                <Button variant="ghost">Marketplace</Button>
                <Button variant="ghost">Support</Button>
              </ButtonGroup>
            </HStack>

            <HStack>
              <ButtonGroup>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="Search"
                  icon={<SearchIcon />}
                  _hover={{ bg: "gray.100" }}
                />
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  onClick={toggleColorMode}
                  icon={<MoonIcon stroke="currentcolor" />}
                  aria-label="Change Theme"
                  _hover={{ bg: "gray.100" }}
                />
                <Button variant="ghost">Sign in</Button>
              </ButtonGroup>
            </HStack>
          </HStack>
        </Container>
      </Box>
      <HStack>
        <Text>
          Toggle Color Mode {colorMode === "light" ? "Dark" : "Light"}
        </Text>
      </HStack> */}
      <Box p={8}>
        <Stack spacing={2} divider={<StackDivider />}>
          <Button onClick={toggleColorMode}>Change Theme</Button>
          <Button>Stack</Button>
          <Button>Stack</Button>
        </Stack>

        <Flex gap={2} mt={2}>
          <ButtonGroup isAttached size="sm" variant="outline">
            <Button>Flex</Button>
            <Button>Flex</Button>
            <Button>Flex</Button>
          </ButtonGroup>
        </Flex>

        <Stack direction="row" mt={2}>
          <Feature
            title="Plan Money"
            desc="The future can be even brighter but a goal without a plan is just a wish"
          />
          <Feature
            title="Save Money"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
          />
        </Stack>

        <HStack spacing={2} alignItems="normal">
          <Feature
            title="Plan Money"
            desc="The future can be even brighter but a goal without a plan is just a wish"
          />
          <Feature
            title="Save Money"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
          />
        </HStack>

        <Center
          h={100}
          mt={4}
          bg="blackAlpha.100"
          _dark={{
            bg: "whiteAlpha.100",
          }}
        >
          Center
        </Center>

        <Circle
          // minH={100}
          size={100}
          mt={4}
          bg="blackAlpha.100"
          _dark={{
            bg: "whiteAlpha.100",
          }}
        >
          Circle
        </Circle>
        <Square
          size={100}
          mt={4}
          bg="blackAlpha.100"
          _dark={{
            bg: "whiteAlpha.100",
          }}
        >
          Square
        </Square>
      </Box>
    </Box>
  );
}

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export default App;
