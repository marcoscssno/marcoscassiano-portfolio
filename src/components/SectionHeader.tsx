import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function SectionHeader(props: { name: string, id: string }) {
    const { name, id } = props;
    return (
        <Container component="header" sx={{ mt: 4, mb: 1, py: 1 }} id={id}>
            <Typography variant="button">
                {name}
            </Typography>
        </Container>
    )
}
