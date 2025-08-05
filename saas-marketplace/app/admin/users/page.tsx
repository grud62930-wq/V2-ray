import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

export default function AdminUsersPage() {
  // Placeholder data
  const users = [
    { id: 1, name: 'Alice', role: 'Teacher', status: 'Active' },
    { id: 2, name: 'Bob', role: 'Buyer', status: 'Active' },
  ];
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={700} color="var(--primary)" mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
        Manage Users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" sx={{ borderColor: 'var(--primary)', color: 'var(--primary)', fontFamily: 'Poppins', mr: 1 }}>Edit</Button>
                  <Button variant="outlined" sx={{ borderColor: 'var(--accent)', color: 'var(--accent)', fontFamily: 'Poppins' }}>Deactivate</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}