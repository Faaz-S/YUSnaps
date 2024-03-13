import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
// import usePostComment from "../../hooks/usePostComment";
// import useAuthStore from "../../store/authStore";
// import useLikePost from "../../hooks/useLikePost";
// import { timeAgo } from "../../utils/timeAgo";
// import CommentsModal from "../Modals/CommentsModal";

const PostFooter = ({ username, isProfilePage }) => {
  // temporary code
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  //   const { isCommenting, handlePostComment } = usePostComment();
  //   const [comment, setComment] = useState("");
  //   const authUser = useAuthStore((state) => state.user);
  //   const commentRef = useRef(null);
  //   const { handleLikePost, isLiked, likes } = useLikePost(post);
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  //   const handleSubmitComment = async () => {
  //     await handlePostComment(post.id, comment);
  //     setComment("");
  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize="sm" fontWeight={700}>
            {username}{" "}
            <Text as="span" fontWeight={400}>
              Feelinn good
            </Text>
          </Text>
          <Text
            fontSize="sm"
            color={"gray"}
            // cursor={"pointer"}
            // onClick={onOpen}
          >
            View all 1000 comments
          </Text>
        </>
      )}
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
            // onChange={(e) => setComment(e.target.value)}
            // value={comment}
            // ref={commentRef}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
              // onClick={handleSubmitComment}
              // isLoading={isCommenting}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
