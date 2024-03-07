import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
  color,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Box is like a simple div from chakra
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill in all the fields");
      return;
    }
    navigate("/");
  };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="YU Snaps" />
          <Input
            placeholder="Email"
            color="yellow"
            _placeholder={{ opacity: 2, color: "inherit" }}
            focusBorderColor="pink.400"
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          ></Input>
          <Input
            placeholder="Password"
            focusBorderColor="pink.400"
            color="yellow"
            _placeholder={{ opacity: 2, color: "inherit" }}
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          ></Input>
          {/*If not in the login page then show the extra input otherwise do not */}
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              focusBorderColor="pink.400"
              color="teal"
              _placeholder={{ opacity: 2, color: "inherit" }}
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            ></Input>
          ) : null}

          <Button
            w={"full"}
            colorScheme="teal"
            size={"sm"}
            fontSize={14}
            // onclick call the handleAuth function
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            {/* GOOGLE LOGO */}
            <Image src="/google.png" w={5} alt="Google logo" />
            <Text mx="2" color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
