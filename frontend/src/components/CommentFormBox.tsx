import { Avatar, Box, Button, FormControl, Input, Textarea } from "@mui/joy";
import { CommentType } from "../types/comment";
import { useState } from "react";
import { postComment } from "../apis/comment";

type CommentFormBoxProps = {
  id: string;
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
};

function CommentFormBox({ id, setComments }: CommentFormBoxProps) {
  const [commentForm, setCommentForm] = useState({
    content: "",
    writer: "",
  });

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommentForm({
      ...commentForm,
      [name]: value,
    });
  };

  const createComment = async () => {
    const form: CommentType = {
      presentationId: id ? Number(id) : 0,
      writer: commentForm.writer,
      isChecked: false,
      content: commentForm.content,
    };

    const res = await postComment(form);
    setComments((prev) => [...prev, res.data]);
    setCommentForm({
      content: "",
      writer: "",
    });
  };

  return (
    <FormControl>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        name="content"
        value={commentForm.content}
        onChange={handleChangeForm}
        endDecorator={
          <Box
            sx={{
              display: "flex",
              gap: "var(--Textarea-paddingBlock)",
              pt: "var(--Textarea-paddingBlock)",
              borderTop: "1px solid",
              borderColor: "divider",
              flex: "auto",
              padding: "var(--Textarea-paddingBlock)",
            }}
          >
            <Avatar aria-hidden="true" variant="solid"></Avatar>
            <Input
              placeholder="작성자 ( 필수 X )"
              variant="soft"
              name="writer"
              value={commentForm.writer}
              onChange={handleChangeForm}
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
            <Button
              disabled={commentForm.content === ""}
              sx={{ marginLeft: "auto" }}
              onClick={createComment}
            >
              댓글 달기
            </Button>
          </Box>
        }
      />
    </FormControl>
  );
}

export default CommentFormBox;