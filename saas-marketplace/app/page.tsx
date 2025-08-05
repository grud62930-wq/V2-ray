import { Button, Container, Typography, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" fontWeight={700} color="var(--primary)" fontFamily="Poppins, Arial, Helvetica, sans-serif">
          Empowering Teachers. Inspiring Learners.
        </Typography>
        <Typography variant="h5" color="text.secondary" mt={2} mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
          Buy and sell high-quality lesson plans and resources.
        </Typography>
        <Button href="/register" variant="contained" size="large" sx={{ backgroundColor: 'var(--primary)', color: '#fff', fontWeight: 600, fontFamily: 'Poppins', mr: 2 }}>
          Join as Teacher
        </Button>
        <Button href="/login" variant="outlined" size="large" sx={{ borderColor: 'var(--accent)', color: 'var(--accent)', fontWeight: 600, fontFamily: 'Poppins' }}>
          Browse as Buyer
        </Button>
      </Box>
    </Container>
  );
}
