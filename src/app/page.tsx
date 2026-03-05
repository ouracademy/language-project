import { Box, Button, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Box>
          <Typography variant="h2" gutterBottom>Welcome to iLangue</Typography>
          <Typography sx={{ fontSize: "20px", paddingBottom: "20px" }}>Looking for learning natives languages ?</Typography>
        </Box>
        <Box style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
          <Button variant="contained" style={{ color: "#000"}} sx={{ background: "#ffff" }}>Enter and watch</Button>
        </Box>        
      </main>
    </div>
  );
}
