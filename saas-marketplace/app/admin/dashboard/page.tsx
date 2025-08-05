import { Box, Button, Container, Typography, Card, CardContent, Grid } from '@mui/material';

export default function AdminDashboard() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={700} color="var(--primary)" mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
        Admin Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>Approve/Reject Listings</Typography>
              <Button href="/admin/listings" variant="contained" sx={{ mt: 2, backgroundColor: 'var(--primary)', color: '#fff', fontFamily: 'Poppins' }}>Review Listings</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>Manage Users</Typography>
              <Button href="/admin/users" variant="outlined" sx={{ mt: 2, borderColor: 'var(--accent)', color: 'var(--accent)', fontFamily: 'Poppins' }}>Manage</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>Track Commission</Typography>
              <Button href="/admin/commission" variant="outlined" sx={{ mt: 2, borderColor: 'var(--primary)', color: 'var(--primary)', fontFamily: 'Poppins' }}>View</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}