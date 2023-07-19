import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/joy";
import { PresentationType } from "../types/presentation";
import { useNavigate } from "react-router-dom";
import { deletePresentation } from "../apis/presentation";

type PresentationListBoxProps = {
  presentations: PresentationType[];
  setPresentations: React.Dispatch<React.SetStateAction<PresentationType[]>>;
};

function PresentationListBox({
  presentations,
  setPresentations,
}: PresentationListBoxProps) {
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    await deletePresentation(id);
    setPresentations((prev) =>
      prev.filter((presentation) => presentation.id !== id)
    );
  };

  return (
    <Box>
      <Typography sx={{ marginBottom: "0.5rem" }} level="h2">
        질문 리스트
      </Typography>
      <List sx={{ gap: "1rem" }}>
        {presentations?.map((presentation) => (
          <ListItem
            key={presentation.id}
            endAction={
              <IconButton
                onClick={(e) => {
                  // 이벤트 버블링 막기
                  e.stopPropagation();
                  handleDelete(presentation.id!);
                }}
                aria-label="Delete"
                size="sm"
                color="danger"
              >
                X
              </IconButton>
            }
          >
            <ListItemButton
              variant="soft"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/qna/${presentation.id}`);
              }}
              sx={{ fontSize: "1.5rem" }}
            >
              Q. {presentation.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PresentationListBox;