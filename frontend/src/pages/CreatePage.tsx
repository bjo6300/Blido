import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Stack,
  } from "@mui/joy";
  import { PresentationType } from "../types/presentation";
  import { useEffect, useState } from "react";
  import { getPresentationList, postPresentation } from "../apis/presentation";
  import { isValidatePresentationForm } from "../utils/validation";
  import PresentationListBox from "../components/PresentationListBox";
  
  function CreatePage() {
    const [title, setTitle] = useState("");
    const [startAtDay, setStartAtDay] = useState("");
    const [startAtTime, setStartAtTime] = useState("");
    const [endAtDay, setEndAtDay] = useState("");
    const [endAtTime, setEndAtTime] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [presentations, setPresentations] = useState<PresentationType[]>([]);
    const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      switch (name) {
        case "title":
          setTitle(value);
          break;
        case "startAtDay":
          setStartAtDay(value);
          break;
        case "startAtTime":
          setStartAtTime(value);
          break;
        case "endAtDay":
          setEndAtDay(value);
          break;
        case "endAtTime":
          setEndAtTime(value);
          break;
        default:
          break;
      }
    };
  
    const resetForm = () => {
      setTitle("");
      setStartAtDay("");
      setStartAtTime("");
      setEndAtDay("");
      setEndAtTime("");
    };
  
    const createPresentation = async () => {
      const form: PresentationType = {
        title,
        startAt: `${startAtDay} ${startAtTime}`,
        endAt: `${endAtDay} ${endAtTime}`,
      };
  
      try {
        const res = await postPresentation(form);
        alert(`질문이 생성되었습니다.`);
        setPresentations((prev) => [...prev, res]);
        resetForm();
      } catch (error) {
        alert("질문 생성에 실패했습니다.");
      }
    };
  
    useEffect(() => {
      // 질문 리스트 받아오는 api 구현
      getPresentationList().then((res) => {
        setPresentations(res);
      });
    }, []);
  
    useEffect(() => {
      setDisabled(
        isValidatePresentationForm([
          title,
          startAtDay,
          startAtTime,
          endAtDay,
          endAtTime,
        ])
      );
    }, [title, startAtDay, startAtTime, endAtDay, endAtTime]);
  
    return (
      <Stack sx={{ width: "100%" }} spacing={4}>
        <FormControl required size="sm">
          <FormLabel sx={{ fontSize: "2rem" }}>질문 생성</FormLabel>
          <Input
            placeholder="제목 입력해주세요"
            name="title"
            size="lg"
            value={title}
            onChange={handleChangeForm}
          />
        </FormControl>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <FormControl sx={{ width: "100%" }} required size="sm">
            <FormLabel sx={{ fontSize: "1.5rem" }}>시작 시간</FormLabel>
            <Input
              type="date"
              name="startAtDay"
              value={startAtDay}
              onChange={handleChangeForm}
            />
            <Input
              type="time"
              name="startAtTime"
              value={startAtTime}
              onChange={handleChangeForm}
            ></Input>
          </FormControl>
          <FormControl sx={{ width: "100%" }} required size="sm">
            <FormLabel sx={{ fontSize: "1.5rem" }}>종료 시간</FormLabel>
  
            <Input
              type="date"
              name="endAtDay"
              value={endAtDay}
              onChange={handleChangeForm}
            />
            <Input
              type="time"
              name="endAtTime"
              value={endAtTime}
              onChange={handleChangeForm}
            ></Input>
          </FormControl>
        </Box>
  
        <Button disabled={disabled} type="submit" onClick={createPresentation}>
          질문 생성
        </Button>
        <Divider />
        <PresentationListBox
          presentations={presentations}
          setPresentations={setPresentations}
        />
      </Stack>
    );
  }
  
  export default CreatePage;