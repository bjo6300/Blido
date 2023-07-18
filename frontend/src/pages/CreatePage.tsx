import { Box, Button, FormControl, FormLabel, Input, Stack } from "@mui/joy";

function CreatePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <FormControl required size="sm">
          <FormLabel sx={{ fontSize: "2rem" }}>제목</FormLabel>
          <Input placeholder="제목을 입력해주세요" />
          <Input
            type="date"
            slotProps={{
              input: {
                min: "2018-06-07T00:00",
                max: "2018-06-14T00:00",
              },
            }}
          />
          <Input
            type="date"
            slotProps={{
              input: {
                min: "2018-06-07T00:00",
                max: "2018-06-14T00:00",
              },
            }}
          />
        </FormControl>

        <Button>질문 생성</Button>
      </Stack>
    </Box>
  );
}

export default CreatePage;