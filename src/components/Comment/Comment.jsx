import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Comment = ({ createdAt, username, profilePic, text }) => {
  return (
    <Flex gap={4}>
      {/* <Link to={`/${userProfile.username}`}> */}
      <Avatar
        //   src={userProfile.profilePicURL}
        src={profilePic}
        name={username}
        size={"sm"}
      />
      {/* </Link> */}
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          {/* <Link to={`/${userProfile.username}`}> */}
          <Text fontWeight={"bold"} fontSize={12}>
            {/* {userProfile.username} */}
            {username}
          </Text>
          {/* </Link> */}
          <Text fontSize={14}>
            {text}
            {/* {comment.comment} */}
          </Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {/* {timeAgo(comment.createdAt)} */}
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
