import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";

function App() {
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
      <h1>QnA</h1>
      <Outlet />
    </Box>
  );
}

export default App;