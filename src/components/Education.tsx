import SectionHeader from '../components/SectionHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Education() {
    return (
        <>
            <SectionHeader name="Formação" id="formacao" />
            <Container component="section">
                <Grid container spacing={8} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas
                        </Typography>
                        <Typography variant="body1">
                            Faculdade Pitágoras
                            <br />
                            2020 a 2022
                            <br />
                            Sobral - CE
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
