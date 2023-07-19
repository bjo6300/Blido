import { Box, Button, FormControl, FormLabel, Input, Stack } from "@mui/joy";

type PresentationFormProps = {
  title: string;
  startAtDay: string;
  startAtTime: string;
  endAtDay: string;
  endAtTime: string;
  handleChangePresentationForm: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  createPresentation: () => void;
  disabled: boolean;
};

function PresentationForm({
  title,
  startAtDay,
  startAtTime,
  endAtDay,
  endAtTime,
  handleChangePresentationForm,
  createPresentation,
  disabled,
}: PresentationFormProps) {
  return (
    <Stack spacing={3}>
      <FormControl required size="sm">
        <FormLabel sx={{ fontSize: "2rem" }}>질문 생성</FormLabel>
        <Input
          placeholder="제목 입력해주세요"
          name="title"
          size="lg"
          value={title}
          onChange={handleChangePresentationForm}
        />
      </FormControl>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <FormControl sx={{ width: "100%" }} required size="sm">
          <FormLabel sx={{ fontSize: "1.5rem" }}>시작 시간</FormLabel>
          <Input
            type="date"
            name="startAtDay"
            value={startAtDay}
            onChange={handleChangePresentationForm}
          />
          <Input
            type="time"
            name="startAtTime"
            value={startAtTime}
            onChange={handleChangePresentationForm}
          ></Input>
        </FormControl>
        <FormControl sx={{ width: "100%" }} required size="sm">
          <FormLabel sx={{ fontSize: "1.5rem" }}>종료 시간</FormLabel>

          <Input
            type="date"
            name="endAtDay"
            value={endAtDay}
            onChange={handleChangePresentationForm}
          />
          <Input
            type="time"
            name="endAtTime"
            value={endAtTime}
            onChange={handleChangePresentationForm}
          ></Input>
        </FormControl>
      </Box>

      <Button disabled={disabled} type="submit" onClick={createPresentation}>
        질문 생성
      </Button>
    </Stack>
  );
}

export default PresentationForm;