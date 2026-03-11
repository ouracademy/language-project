import { Box, Button, Typography } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";

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
          <Link href="/home" passHref>
            <Button         
            variant="contained"
            sx={{ background: "rgba(26, 45, 31,1)", color: "#ffff" }}
          >
            Ven y aprende
          </Button>
          </Link>
          
        </Box>
      </main>
    </div>
  );
}

  //          sx={{ background: "#3C8D80", color: "#ffff" }}
