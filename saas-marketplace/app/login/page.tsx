import { Box, Button, Container, TextField, Typography, Link } from '@mui/material';

export default function LoginPage() {
  return (
    <Container maxWidth="xs" sx={{ py: 8 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight={700} color="var(--primary)" fontFamily="Poppins, Arial, Helvetica, sans-serif">
          Login
        </Typography>
      </Box>
      <Box component="form" noValidate autoComplete="off">
        <TextField label="Email" type="email" fullWidth margin="normal" required />
        <TextField label="Password" type="password" fullWidth margin="normal" required />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: 'var(--primary)', color: '#fff', fontWeight: 600, fontFamily: 'Poppins' }}>
          Login
        </Button>
      </Box>
      <Box textAlign="center" mt={2}>
        <Typography variant="body2">
          Don&apos;t have an account?{' '}
          <Link href="/register" color="var(--accent)">
            Register
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}