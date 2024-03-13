import { Flex, VStack, Text, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name="Faaz" followers="100000" avatar="" />
      <SuggestedUser name="Areeb" followers="0" avatar="" />
      <SuggestedUser name="Mamma" followers="10000000000" avatar="" />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link
          href="https://faaz.netlify.app/"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Faaz
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
