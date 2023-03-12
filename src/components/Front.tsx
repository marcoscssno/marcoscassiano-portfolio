import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "./Navbar";
import { Box } from "@mui/system";
import { Button, Link } from "@mui/material";

const containerStyle = {
    backgroundImage: 'linear-gradient(45deg, #00ffea, #00a396)'
}

const boxStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    pt: 12,
    pb: 12,
    px: 3
}

export default function Front() {
    return (
        <Container disableGutters maxWidth="xl" component="main" sx={containerStyle}>
            <Navbar />
            <Container maxWidth="lg">
                <Box sx={boxStyle}>
                    <Typography
                        component="h6"
                        variant="body1"
                        color="grey.800"
                        gutterBottom
                    >
                        Olá! Meu nome é:
                    </Typography>
                    <Typography
                        component="h2"
                        variant="h2"
                        color="text.primary"
                        sx={{ fontWeight: 700 }}
                    >
                        Marcos Cassiano
                    </Typography>
                    <Typography
                        component="h5"
                        variant="h5"
                        color="grey.800"
                        sx={{ my: 1 }}
                    >
                        Gosto de criar soluções em software que trazem resultado ao seu trabalho.
                    </Typography>
                    <Typography
                        component="p"
                        variant="body1"
                        color="grey.800"
                        sx={{ my: 1 }}
                    >
                        Sou um <Box component="span" sx={{ color: "text.secondary" }}>Desenvolvedor Full Stack Node.js React</Box> 🖥️.
                        <br />
                        Vamos conversar!
                    </Typography>
                    <Button sx={{ my: 6, width: { xs: '100%', sm: 'auto' } }} variant="contained" color="secondary" size="large" component={Link} href="mailto:marcoscssno@gmail.com">
                        Enviar mensagem
                    </Button>
                </Box>
            </Container>
        </Container >
    )
}