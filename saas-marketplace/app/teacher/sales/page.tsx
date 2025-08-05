import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function TeacherSalesPage() {
  // Placeholder data
  const sales = [
    { id: 1, lesson: 'Math Fractions', amount: 10, date: '2024-06-01' },
    { id: 2, lesson: 'Science Lab', amount: 12, date: '2024-06-02' },
  ];
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={700} color="var(--primary)" mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
        Sales & Earnings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lesson</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map(sale => (
              <TableRow key={sale.id}>
                <TableCell>{sale.lesson}</TableCell>
                <TableCell>{sale.date}</TableCell>
                <TableCell>{sale.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}