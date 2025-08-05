import { Box, Button, Container, TextField, Typography, Link, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function RegisterPage() {
  const [role, setRole] = useState('teacher');
  return (
    <Container maxWidth="xs" sx={{ py: 8 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight={700} color="var(--primary)" fontFamily="Poppins, Arial, Helvetica, sans-serif">
          Register
        </Typography>
      </Box>
      <Box component="form" noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" required />
        <TextField label="Email" type="email" fullWidth margin="normal" required />
        <TextField label="Password" type="password" fullWidth margin="normal" required />
        <FormControl fullWidth margin="normal">
          <InputLabel id="role-label">Role</InputLabel>
          <Select labelId="role-label" value={role} label="Role" onChange={e => setRole(e.target.value)}>
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