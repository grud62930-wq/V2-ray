"use client";
import { Box, Button, Container, TextField, Typography, Link, Alert } from '@mui/material';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        // Redirect based on user role (will be implemented with session)
        router.push('/');
      }
    } catch (error) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="xs" sx={{ py: 8 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight={700} color="var(--primary)" fontFamily="Poppins, Arial, Helvetica, sans-serif">
          Login
        </Typography>
      </Box>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField 
          label="Email" 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth 
          margin="normal" 
          required 
        />
        <TextField 
          label="Password" 
          type="password" 
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          fullWidth 
          margin="normal" 
          required 
        />
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          disabled={loading}
          sx={{ mt: 2, backgroundColor: 'var(--primary)', color: '#fff', fontWeight: 600, fontFamily: 'Poppins' }}
        >
          {loading ? 'Logging in...' : 'Login'}
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