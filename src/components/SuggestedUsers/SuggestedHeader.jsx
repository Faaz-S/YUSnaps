import { Avatar, Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
// import useLogout from "../../hooks/useLogout";
// import useAuthStore from "../../store/authStore";
import { Link, Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Programmer" size={"lg"} src="/profilepic.png" />
        <Text fontSize={13} fontWeight={"bold"} color={"blue.400"}>
          asaprogrammerlol
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
        color={"blue.400"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
