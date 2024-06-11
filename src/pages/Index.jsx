import { Container, Box, Flex, Heading, Text, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const articles = [
  {
    title: "Global Markets Rally as Optimism Returns",
    summary: "Stock markets around the world saw significant gains today as investor confidence returns.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Release Quarterly Earnings",
    summary: "The latest earnings reports from leading tech companies show mixed results.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "New Innovations in Renewable Energy",
    summary: "Advancements in solar and wind technologies are paving the way for a greener future.",
    image: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="2xl">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link href="#" isExternal>
            <FaTwitter />
          </Link>
          <Link href="#" isExternal>
            <FaFacebook />
          </Link>
          <Link href="#" isExternal>
            <FaLinkedin />
          </Link>
        </HStack>
      </Flex>
      <Flex justifyContent="space-between" mb={8}>
        <Box w="70%">
          {articles.map((article, index) => (
            <Box key={index} mb={8}>
              <Image src={article.image} alt={article.title} mb={4} />
              <Heading as="h2" size="lg" mb={2}>
                {article.title}
              </Heading>
              <Text>{article.summary}</Text>
            </Box>
          ))}
        </Box>
        <Box w="25%">
          <Heading as="h3" size="md" mb={4}>
            Latest News
          </Heading>
          <VStack spacing={4} align="start">
            {articles.map((article, index) => (
              <Link key={index} href="#" color="blue.500">
                {article.title}
              </Link>
            ))}
          </VStack>
        </Box>
      </Flex>
      <Box textAlign="center" py={5} borderTop="1px" borderColor="gray.200">
        <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
      </Box>
    </Container>
  );
};

export default Index;