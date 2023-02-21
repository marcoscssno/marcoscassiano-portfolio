import SectionHeader from '../components/SectionHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {
    return (
        <>
            <SectionHeader name="Contato" id="contato" />
            <Container component="section" maxWidth="sm">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <TextField label="Nome" variant="outlined" fullWidth>
                            Nome
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="E-mail" variant="outlined" fullWidth>
                            E-mail
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Telefone" variant="outlined" fullWidth>
                            Telefone
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Mensagem" variant="outlined" fullWidth multiline rows={4}>
                            Mensagem
                        </TextField>
                    </Grid>
                    <Grid container item xs={12} direction="row" justifyContent="flex-end">
                        <Button variant="contained">
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
