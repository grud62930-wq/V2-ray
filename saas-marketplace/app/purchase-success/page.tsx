import { Box, Button, Container, Typography, Card, CardContent } from '@mui/material';
import Link from 'next/link';

export default function PurchaseSuccessPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="var(--primary)" fontFamily="Poppins, Arial, Helvetica, sans-serif" mb={2}>
            Purchase Successful!
          </Typography>
          <Typography variant="body1" mb={4}>
            Thank you for your purchase. Your lesson plan is now available for download.
          </Typography>
          <Box>
            <Button 
              variant="contained" 
              component={Link}
              href="/marketplace"
              sx={{ backgroundColor: 'var(--primary)', color: '#fff', fontFamily: 'Poppins', mr: 2 }}
            >
              Browse More Lessons
            </Button>
            <Button 
              variant="outlined" 
              component={Link}
              href="/"
              sx={{ borderColor: 'var(--accent)', color: 'var(--accent)', fontFamily: 'Poppins' }}
            >
              Go Home
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}