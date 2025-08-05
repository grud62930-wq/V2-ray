import { Box, Button, Container, Typography, Card, CardContent, Divider } from '@mui/material';

export default function CheckoutPage() {
  // Placeholder data
  const lesson = {
    title: 'Sample Lesson Plan',
    price: 10.0,
  };
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" fontWeight={700} color="var(--primary)" fontFamily="Poppins, Arial, Helvetica, sans-serif">
            Checkout
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1">{lesson.title}</Typography>
          <Typography variant="h6" color="var(--accent)" fontWeight={700}>
            ${lesson.price.toFixed(2)}
          </Typography>
          <Button variant="contained" fullWidth sx={{ mt: 3, backgroundColor: 'var(--primary)', color: '#fff', fontFamily: 'Poppins' }}>
            Complete Purchase
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}