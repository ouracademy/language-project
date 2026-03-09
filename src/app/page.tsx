import { Box, Button, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Box>
          <Typography variant="h2" gutterBottom>
            Bienvenido a iLangue
          </Typography>
          <Typography sx={{ fontSize: "20px", paddingBottom: "20px" }}>
            ¿Buscas aprender lenguas nativas ?
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            sx={{ background: "#3C8D80", color: "#ffff" }}
          >
            Enter and watch
          </Button>
        </Box>
      </main>
    </div>
  );
}
