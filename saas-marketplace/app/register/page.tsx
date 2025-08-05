"use client";
import { Box, Button, Container, TextField, Typography, Link, FormControl, InputLabel, Select, MenuItem, Alert } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [role, setRole] = useState('teacher');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred during registration');
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
          Register
        </Typography>
      </Box>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField 
          label="Name" 
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth 
          margin="normal" 
          required 
        />
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
        <FormControl fullWidth margin="normal">
          <InputLabel id="role-label">Role</InputLabel>
          <Select 
            labelId="role-label" 
            value={role} 
            label="Role" 
            onChange={e => setRole(e.target.value)}
          >
            <MenuItem value="teacher">Teacher</MenuItem>
            <MenuItem value="buyer">Buyer</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: 'var(--primary)', color: '#fff', fontWeight: 600, fontFamily: 'Poppins' }}>
          Register
        </Button>
      </Box>
      <Box textAlign="center" mt={2}>
        <Typography variant="body2">
          Already have an account?{' '}
          <Link href="/login" color="var(--accent)">
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}