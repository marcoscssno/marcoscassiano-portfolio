import SectionHeader from '../components/SectionHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import sistemaDeVideoconferencia from '../assets/sistema-de-videoconferencia.png';
import cleanNodeAPI from '../assets/clean-node-api.png';

export default function Works() {
    return (
        <>
            <SectionHeader name="Trabalhos" id="trabalhos" />
            <Container component="section">
                <Grid container spacing={{ xs: 2, md: 8 }} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Box component={Link} href="https://sivic.vercel.app/" target="_blank">
                            <Box component="img" sx={{ width: '100%', boxShadow: 3, borderRadius: 1 }} alt="sistema de videoconferencia" src={sistemaDeVideoconferencia} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">
                            Sivic
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Sistema de Agendamento de Videoconferência
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Sistema de agendamento de videoconferência designado para uso em unidade prisional, permitindo ao usuário agendar chamadas de videoconferência e organizar por sala, data e horário. Além disto, o sistema exibe uma página com os links para ingressar nas chamadas de videoconferência. O sistema também possui autenticação, emite relatórios em PDF e XLSX.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Tecnologias utilizadas:
                        </Typography>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} sx={{ mt: 2 }}>
                            <Chip label="Next.js" />
                            <Chip label="React" />
                            <Chip label="Redux" />
                            <Chip label="MongoDB" />
                            <Chip label="Socket.io" />
                            <Chip label="Docker" />
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} sx={{ mt: 2 }}>
                            <Button variant="contained" size="small" component={Link} href="https://sivic.vercel.app/" target="_blank" endIcon={<PublicIcon />}>
                                Ver Demo
                            </Button>
                            <Button variant="outlined" size="small" component={Link} href="https://github.com/marcoscssno/sivic" target="_blank" endIcon={<GitHubIcon />}>
                                Ver Código
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Container component="section">
                <Grid container spacing={{ xs: 2, md: 8 }} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">
                            Clean Architecture Node.js API
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            API de usuários
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            API construída seguindo os padrões de Clean Architecture, TDD (Test-driven Development), utilizando Node.js, Express, TypeScript.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Tecnologias utilizadas:
                        </Typography>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} sx={{ mt: 2 }}>
                            <Chip label="Node.js" />
                            <Chip label="Express" />
                            <Chip label="Vite" />
                            <Chip label="Vitest" />
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} sx={{ mt: 2 }}>
                            <Button variant="contained" size="small" component={Link} href="https://github.com/marcoscssno/clean-node-api" target="_blank" endIcon={<GitHubIcon />}>
                                Ver Código
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                        <Box component={Link} href="https://github.com/marcoscssno/clean-node-api" target="_blank">
                            <Box component="img" sx={{ width: '100%', boxShadow: 3, borderRadius: 1 }} alt="sistema de videoconferencia" src={cleanNodeAPI} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
