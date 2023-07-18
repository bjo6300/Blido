import { Avatar, Box, Button, Checkbox, Typography } from "@mui/joy";
import { CommentType } from "../types/comment";
import { deleteComment, putComment, putCommentCheck } from "../apis/comment";

type CommentBoxProps = {
  comment: CommentType;
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
};

function CommentBox({ comment, setComments }: CommentBoxProps) {
  const handleCheck = async (id: number) => {
    const res = await putCommentCheck(id);
    setComments((prev) =>
      prev.map((comment) =>
        comment.commentId === id ? { ...res.data } : comment
      )
    );
  };

  const handleDelete = async (id: number) => {
    const res = await deleteComment(id);
    console.log(res);
    setComments((prev) => prev.filter((comment) => comment.commentId !== id));
  };

  const handleUpdate = async (id: number) => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid #B9B9C6",
        borderRadius: "1rem",
        padding: "2rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Avatar aria-hidden="true" variant="solid"></Avatar>
        <Typography level="h4">{comment.writer}</Typography>
        <Checkbox
          sx={{ marginLeft: "auto" }}
          size="lg"
          checked={comment.isChecked}
          onChange={() => handleCheck(comment.commentId!)}
        />
      </Box>
      <Typography level="body1">{comment.content}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          alignSelf: "end",
        }}
      >
        <Button color="primary">수정</Button>
        <Button
          color="danger"
          onClick={() => {
            handleDelete(comment.commentId!);
          }}
        >
          삭제
        </Button>
      </Box>
    </Box>
  );
}

export default CommentBox;