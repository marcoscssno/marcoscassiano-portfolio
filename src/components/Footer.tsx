import Container from '@mui/material/Container';
import Copyright from './Copyright';


export default function Footer() {
    return (
        <Container
            maxWidth="lg"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                py: 3,
            }}
        >
            <Copyright />
        </Container>
    )
}
