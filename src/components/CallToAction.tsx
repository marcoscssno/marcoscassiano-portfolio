import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const containerStyle = {
    backgroundImage: 'linear-gradient(45deg, #00ffea, #00a396)',
    p: {
        xs: 5, md: 10
    },
    mt: 5
}

export default function CallToAction() {
    return (
        <Container disableGutters maxWidth={false} component="section" sx={containerStyle}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item container xs={12} sx={{ justifyContent: 'center' }}>
                        <Typography variant="h4" align="center">
                            Vamos construir algo interessante!
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} sx={{ justifyContent: 'center' }}>
                        <Button sx={{ mt: 3, width: { xs: '100%', sm: 'auto' } }} variant="contained" color="secondary" size="large" component={Link} href="mailto:marcoscssno@gmail.com">
                            Enviar mensagem
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}
