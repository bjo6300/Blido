import { Alert, Stack } from "@mui/joy";
import CommentBox from "./CommentBox";
import { CommentType } from "../../types/comment";

type CommentListBoxProps = {
  comments: CommentType[];
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
};

function CommentListBox({ comments, setComments }: CommentListBoxProps) {
  if (comments.length === 0)
    return (
      <Alert size="lg" sx={{ marginTop: "1rem" }}>
        댓글이 없습니다. 댓글을 달아주세요.
      </Alert>
    );

  return (
    <Stack spacing={2}>
      {comments.map((comment) => (
        <CommentBox
          comment={comment}
          setComments={setComments}
          key={comment.commentId}
        />
      ))}
    </Stack>
  );
}

export default CommentListBox;