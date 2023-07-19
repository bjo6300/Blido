import { Box, Stack } from "@mui/joy";
import TabBox from "../components/common/TabBox";
import CommentListBox from "../components/comment/CommentListBox";
import CommentFormBox from "../components/comment/CommentFormBox";
import { useEffect, useState } from "react";
import { getCommentListLatest } from "../apis/comment";
import { useParams } from "react-router-dom";
import { CommentType } from "../types/comment";

function QnAPage() {
  // 경로 params 받아오기
  const { id } = useParams();
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    getCommentListLatest(+id!).then((res) => {
      setComments(res.data);
    });
  }, [id]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <Box sx={{ marginBottom: "2rem" }}>
          <CommentFormBox id={id!} setComments={setComments} />
        </Box>
        <TabBox setComments={setComments} id={id || "0"} />
        <CommentListBox comments={comments} setComments={setComments} />
      </Stack>
    </Box>
  );
}

export default QnAPage;