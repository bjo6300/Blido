import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControl,
    Stack,
    Textarea,
    Typography,
  } from "@mui/joy";
  
  function QnAPage() {
    return (
      <Box sx={{ width: "100%" }}>
        <Stack>
          <FormControl>
            <Textarea
              placeholder="Type something here…"
              minRows={3}
              endDecorator={
                <Box
                  sx={{
                    display: "flex",
                    gap: "var(--Textarea-paddingBlock)",
                    pt: "var(--Textarea-paddingBlock)",
                    borderTop: "1px solid",
                    borderColor: "divider",
                    flex: "auto",
                  }}
                >
                  <Button sx={{ marginLeft: "auto" }}>댓글 달기</Button>
                </Box>
              }
            />
          </FormControl>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Avatar aria-hidden="true" variant="solid"></Avatar>
            <Typography level="h4">익명의 사람</Typography>
            <Checkbox sx={{ marginLeft: "auto" }} />
          </Box>
          <Typography level="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            consectetur, quas harum delectus laudantium ipsum iusto quos quasi
            optio amet eveniet reprehenderit distinctio rem vitae velit nihil eos
            voluptas odio.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Button color="primary">수정</Button>
            <Button color="danger">삭제</Button>
          </Box>
        </Stack>
      </Box>
    );
  }
  
  export default QnAPage;