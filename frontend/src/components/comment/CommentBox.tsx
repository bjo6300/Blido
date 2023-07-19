import { Avatar, Box, Button, Checkbox, Input, Typography } from "@mui/joy";
import { CommentType } from "../../types/comment";
import { deleteComment, putComment, putCommentCheck } from "../../apis/comment";
import { useState } from "react";

type CommentBoxProps = {
  comment: CommentType;
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
};

function CommentBox({ comment, setComments }: CommentBoxProps) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

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

  const handleUpdate = async (id: number) => {
    const form: Omit<CommentType, "commentId" | "createdDate"> = {
      presentationId: comment.presentationId,
      content: editContent,
      writer: comment.writer,
      isChecked: comment.isChecked,
    };
    const res = await putComment(id, form);
    console.log(res);
    setComments((prev) =>
      prev.map((comment) =>
        comment.commentId === id ? { ...res.data } : comment
      )
    );
    setIsUpdate((pre) => !pre);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid #B9B9C6",
        borderRadius: "1rem",
        padding: "1.3rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Avatar aria-hidden="true" variant="solid"></Avatar>
        <Typography level="h4">{comment.writer}</Typography>

        <Checkbox
          variant="soft"
          sx={{ marginLeft: "auto" }}
          size="lg"
          checked={comment.isChecked}
          onChange={() => handleCheck(comment.commentId!)}
        />
      </Box>
      {isUpdate ? (
        <Input
          placeholder="Type in here…"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          variant="soft"
          sx={{
            "--Input-radius": "0px",
            borderBottom: "2px solid",
            borderColor: "neutral.outlinedBorder",
            "&:hover": {
              borderColor: "neutral.outlinedHoverBorder",
            },
            "&::before": {
              border: "1px solid var(--Input-focusedHighlight)",
              transform: "scaleX(0)",
              left: 0,
              right: 0,
              bottom: "-2px",
              top: "unset",
              transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
              borderRadius: 0,
            },
            "&:focus-within::before": {
              transform: "scaleX(1)",
            },
          }}
        />
      ) : (
        <Typography level="body1">{comment.content}</Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          alignSelf: "end",
        }}
      >
        <Typography level="body2">
          {new Date(comment.createdDate).toLocaleTimeString().slice(0, -3)}
        </Typography>
        {isUpdate ? (
          <>
            <Button
              color="success"
              onClick={() => {
                handleUpdate(comment.commentId!);
              }}
            >
              완료
            </Button>
            <Button
              color="warning"
              onClick={() => {
                setEditContent(comment.content);
                setIsUpdate((pre) => !pre);
              }}
            >
              취소
            </Button>
          </>
        ) : (
          <>
            <Button
              color="primary"
              onClick={() => {
                setIsUpdate((pre) => !pre);
              }}
            >
              수정
            </Button>
            <Button
              color="danger"
              onClick={() => {
                handleDelete(comment.commentId!);
              }}
            >
              삭제
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}

export default CommentBox;