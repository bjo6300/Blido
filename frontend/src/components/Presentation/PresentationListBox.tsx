import {
  Alert,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { PresentationType } from "../../types/presentation";
import { useNavigate } from "react-router-dom";
import { deletePresentation } from "../../apis/presentation";
import { Delete, QuestionAnswer } from "@mui/icons-material";

type PresentationListBoxProps = {
  presentations: PresentationType[];
  setPresentations: React.Dispatch<React.SetStateAction<PresentationType[]>>;
};

function PresentationListBox({
  presentations,
  setPresentations,
}: PresentationListBoxProps) {
  const navigate = useNavigate();

  const handleClickDeletePresentation = async (id: number) => {
    const res = await deletePresentation(id);
    alert(res.data);

    setPresentations((prev) =>
      prev.filter((presentation) => presentation.id !== id)
    );
  };

  return (
    <Box>
      <Typography sx={{ marginBottom: "0.5rem" }} level="h3">
        발표 리스트
      </Typography>
      {presentations.length === 0 ? (
        <Alert size="lg" sx={{ marginTop: "1rem" }}>
          발표가 없습니다. 질문을 생성해주세요.
        </Alert>
      ) : (
        <List sx={{ gap: "1rem" }}>
          {presentations?.map((presentation) => (
            <ListItem key={presentation.id}>
              <ListItemButton
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  paddingTop: "0.5rem",
                }}
                variant="soft"
                onClick={() => {
                  navigate(`/qna/${presentation.id}`);
                }}
              >
                <Box sx={{ display: "flex", width: "100%" }}>
                  <ListItemDecorator sx={{ alignSelf: "start" }}>
                    <QuestionAnswer />
                  </ListItemDecorator>
                  <ListItemContent sx={{ alignSelf: "center", fontSize: "lg" }}>
                    {presentation.title}
                  </ListItemContent>
                  <IconButton
                    sx={{ marginLeft: "auto", alignSelf: "start" }}
                    aria-label="Delete"
                    size="sm"
                    color="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClickDeletePresentation(presentation.id);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Box>
                <Typography>
                  {`${new Date(
                    presentation.startAt
                  ).toLocaleDateString()} ~ ${new Date(
                    presentation.endAt
                  ).toLocaleDateString()}`}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default PresentationListBox;