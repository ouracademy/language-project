import { Box, Button, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Box>
          <Typography variant="h2" gutterBottom>
            Bienvenido a iSimi
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
            sx={{ background: "rgba(26, 45, 31,1)", color: "#ffff" }}

          >
            Ven y aprende
          </Button>
        </Box>
      </main>
    </div>
  );
}

  //          sx={{ background: "#3C8D80", color: "#ffff" }}
