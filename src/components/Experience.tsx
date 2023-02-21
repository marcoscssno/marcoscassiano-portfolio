import SectionHeader from '../components/SectionHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Experience() {
    return (
        <>
            <SectionHeader name="Experiência" id="experiencia" />
            <Container component="section">
                <Grid container spacing={8} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Técnico de Suporte
                        </Typography>
                        <Typography variant="body1">
                            Secretaria de Administração Penitenciária do Estado do Ceará
                            <br />
                            2013 a 2016 e 2019 a 2023
                            <br />
                            Sobral - CE
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
