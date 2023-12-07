import {
  Avatar,
  Box,
  Flex,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Lateral from "./components/Lateral/Lateral";
import { Github, Linkedin } from "./components/icons";

function App() {
  return (
    <Flex height="100vh" bg="melro.100">
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
            Engineer and React aficionado with a decade of tech adventures. From
            support gigs to software crafting, I groove through the development
            cycle, using agile magic to build scalable solutions and untangle
            business puzzles.
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
  );
}

export default App;
