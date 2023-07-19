import { Box, Button, Typography } from "@mui/joy";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "600px",
        margin: "4rem auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ marginBottom: "1rem" }} level="h2">
          QnA
        </Typography>
        {useLocation().pathname.includes("qna") && (
          <Button
            onClick={() => {
              navigate("/");
            }}
            sx={{
              position: "absolute",
              right: 0,
              top: 5,
            }}
          >
            질문 리스트
          </Button>
        )}
      </Box>

      <Outlet />
    </Box>
  );
}

export default App;