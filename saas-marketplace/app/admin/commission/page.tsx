import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function AdminCommissionPage() {
  // Placeholder data
  const commissions = [
    { id: 1, lesson: 'Math Fractions', sale: 10, commission: 1 },
    { id: 2, lesson: 'Science Lab', sale: 12, commission: 1.2 },
  ];
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={700} color="var(--primary)" mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
        Track Commission
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lesson</TableCell>
              <TableCell>Sale Amount ($)</TableCell>
              <TableCell>Commission (10%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commissions.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.lesson}</TableCell>
                <TableCell>{item.sale.toFixed(2)}</TableCell>
                <TableCell>{item.commission.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}