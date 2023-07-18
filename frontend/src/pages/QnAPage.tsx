import { Box, Stack } from "@mui/joy";
import TabBox from "../components/TabBox";
import CommentListBox from "../components/CommentListBox";
import CommentFormBox from "../components/CommentFormBox";
import { useEffect, useState } from "react";
import { getCommentListLatest } from "../apis/comment";
import { useParams } from "react-router-dom";
import { CommentType } from "../types/comment";

function QnAPage() {
  // 경로 params 받아오기
  const { id } = useParams();

  const [comments, setComments] = useState<CommentType[]>([
    {
      commentId: 1,
      presentationId: 0,
      content: "",
      writer: "",
      isChecked: false,
      createdDate: "",
    },
  ]);

  console.log(comments);
  useEffect(() => {
    getCommentListLatest(+id!).then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <CommentFormBox id={id || "0"} setComments={setComments} />
        <TabBox setComments={setComments} id={id || "0"} />
        <CommentListBox comments={comments} setComments={setComments} />
      </Stack>
    </Box>
  );
}

export default QnAPage;