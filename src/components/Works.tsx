import SectionHeader from '../components/SectionHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Works() {
    return (
        <>
            <SectionHeader name="Trabalhos" id="trabalhos" />
            <Container component="section">
                <Grid container spacing={8} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Box component={Link} href="https://sivic.vercel.app/" target="_blank">
                            <Box component="img" sx={{ width: '100%', boxShadow: 3, borderRadius: 1 }} alt="sistema de videoconferencia" src="/public/sistema-de-videoconferencia.png" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">
                            Sivic
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Sistema de Videoconferência
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Sistema de agendamento de videoconferência designado para uso em unidade prisional, permitindo ao usuário agendar chamadas de videoconferência e definir quais salas serão utilizadas em data e horário determinados. Além disto, o sistema exibe uma página com os links para ingressar nas chamadas de videoconferência. O sistema também emite relatórios em PDF e XLSX.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
