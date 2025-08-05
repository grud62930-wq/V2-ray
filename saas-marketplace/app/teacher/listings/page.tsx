import { Box, Button, Container, Typography, Card, CardContent, Grid } from '@mui/material';

export default function TeacherListingsPage() {
  // Placeholder data
  const listings = [
    { id: 1, title: 'Math Fractions', status: 'Pending' },
    { id: 2, title: 'Science Lab', status: 'Approved' },
  ];
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={700} color="var(--primary)" mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
        My Listings
      </Typography>
      <Grid container spacing={3}>
        {listings.map(listing => (
          <Grid item xs={12} md={6} key={listing.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{listing.title}</Typography>
                <Typography variant="body2" color="text.secondary">Status: {listing.status}</Typography>
                <Box mt={2}>
                  <Button variant="outlined" sx={{ borderColor: 'var(--primary)', color: 'var(--primary)', fontFamily: 'Poppins', mr: 1 }}>Edit</Button>
                  <Button variant="outlined" sx={{ borderColor: 'var(--accent)', color: 'var(--accent)', fontFamily: 'Poppins' }}>Delete</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}