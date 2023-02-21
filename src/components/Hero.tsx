import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Hero() {
    return (
        <Container disableGutters maxWidth="md" component="main" sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', py: 12 }}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
            >
                Olá! Sou <span style={{ fontWeight: 700 }}>Marcos Cassiano</span>!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
                Desenvolvedor Full Stack Node.js React
            </Typography>
            <Button sx={{ my: 8 }} variant="contained" size="large" component={Link} href="mailto:marcoscssno@gmail.com">
                Entrar em Contato
            </Button>
        </Container>
    )
}
