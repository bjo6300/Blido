import { Divider, Stack } from "@mui/joy";
import { PresentationType } from "../types/presentation";
import { useEffect, useState } from "react";
import { getPresentationList, postPresentation } from "../apis/presentation";
import { isValidatePresentationForm } from "../utils/validation";
import PresentationListBox from "../components/Presentation/PresentationListBox";
import PresentationForm from "../components/Presentation/PresentationForm";

function PresentationCreatePage() {
  const [title, setTitle] = useState("");
  const [startAtDay, setStartAtDay] = useState("");
  const [startAtTime, setStartAtTime] = useState("");
  const [endAtDay, setEndAtDay] = useState("");
  const [endAtTime, setEndAtTime] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [presentations, setPresentations] = useState<PresentationType[]>([]);

  const handleChangePresentationForm = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
    const form: Omit<PresentationType, "id"> = {
      title,
      startAt: `${startAtDay} ${startAtTime}`,
      endAt: `${endAtDay} ${endAtTime}`,
    };

    try {
      const res = await postPresentation(form);
      alert(`질문이 생성되었습니다.`);
      setPresentations((prev) => [...prev, res.data]);
      resetForm();
    } catch (error) {
      alert("질문 생성에 실패했습니다.");
    }
  };

  useEffect(() => {
    // 질문 리스트 받아오는 api
    getPresentationList().then((res) => setPresentations(res.data));
  }, []);

  useEffect(() => {
    // 질문 생성 버튼 활성화 여부 (유효성 검사)
    setDisabled(
      isValidatePresentationForm({
        title,
        startAtDay,
        startAtTime,
        endAtDay,
        endAtTime,
      })
    );
  }, [title, startAtDay, startAtTime, endAtDay, endAtTime]);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <PresentationForm
        title={title}
        startAtDay={startAtDay}
        startAtTime={startAtTime}
        endAtDay={endAtDay}
        endAtTime={endAtTime}
        handleChangePresentationForm={handleChangePresentationForm}
        createPresentation={createPresentation}
        disabled={disabled}
      />
      <Divider />
      <PresentationListBox
        presentations={presentations}
        setPresentations={setPresentations}
      />
    </Stack>
  );
}

export default PresentationCreatePage;