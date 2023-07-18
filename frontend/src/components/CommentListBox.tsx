import { Stack } from "@mui/joy";
import CommentBox from "./CommentBox";
import { CommentType } from "../types/comment";

type CommentListBoxProps = {
  comments: CommentType[];
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
};

function CommentListBox({ comments, setComments }: CommentListBoxProps) {
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