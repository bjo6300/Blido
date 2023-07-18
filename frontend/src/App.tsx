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
        margin: "0 auto",
        marginTop: "5rem",
      }}
    >
      <h1>QnA</h1>
      <Outlet />
    </Box>
  );
}

export default App;
