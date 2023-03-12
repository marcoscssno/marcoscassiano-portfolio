import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import profile from '../assets/profile.jpg';

export default function About() {
    return (
        <Container component="main" maxWidth="lg" sx={{ position: 'static', marginTop: -10 }} id="sobre-mim">
            <Paper sx={{ p: 3 }}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Typography component="h6" variant="subtitle2">
                            SOBRE MIM
                        </Typography>
                        <Typography component="p" variant="body1" sx={{ mt: 1 }}>
                            Sou formado em <Box component="span" sx={{ color: "#00a396" }}>Análise e Desenvolvimento de Sistemas</Box> pela Faculdade Pitágoras.
                        </Typography>
                        <Typography component="p" variant="body1" sx={{ mt: 1 }}>
                            Moro em Groaíras, Ceará, Brasil. Sou casado e tenho dois filhos (um casal).
                        </Typography>
                        <Typography component="p" variant="body1" sx={{ mt: 1 }}>
                            Quando não estou trabalhando, gosto de aprender novos idiomas.
                        </Typography>
                        <Typography component="p" variant="body1" sx={{ mt: 1 }}>
                            Durante meu trabalho como Técnico de Suporte, decidi estudar e criar soluções em software para resolver problemas de registro e gerenciamento de dados, melhorando o trabalho e a produtividade dos usuários.
                        </Typography>
                        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={{ xs: 'center', md: 'flex-start' }} spacing={2} mt={2}>
                            <Button variant="contained" color="primary" size="small" startIcon={<LinkedInIcon />} component={Link} href="https://www.linkedin.com/in/marcoscssno/" target="__blank">
                                LinkedIn
                            </Button>
                            <Button variant="contained" color="primary" size="small" startIcon={<InstagramIcon />} component={Link} href="https://www.instagram.com/marcoscssno/" target="__blank">
                                Instagram
                            </Button>
                            <Button variant="contained" color="primary" size="small" startIcon={<FacebookIcon />} component={Link} href="https://www.facebook.com/marcoscssno" target="__blank">
                                Facebook
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item container justifyContent={{ md: 'end', xs: 'center' }} xs={12} md={4} sx={{ my: { md: 0, xs: 3 } }}>
                        <Avatar alt="Profile" src={profile} sx={{ width: 256, height: 256 }} />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}