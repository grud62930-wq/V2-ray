import { Box, Button, Container, Typography, Card, CardContent, Grid } from '@mui/material';

export default function TeacherDashboard() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={700} color="var(--primary)" mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
        Teacher Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>Upload Lesson Plan</Typography>
              <Button href="/teacher/upload" variant="contained" sx={{ mt: 2, backgroundColor: 'var(--primary)', color: '#fff', fontFamily: 'Poppins' }}>Upload</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>My Listings</Typography>
              <Button href="/teacher/listings" variant="outlined" sx={{ mt: 2, borderColor: 'var(--accent)', color: 'var(--accent)', fontFamily: 'Poppins' }}>Manage</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>Sales & Earnings</Typography>
              <Button href="/teacher/sales" variant="outlined" sx={{ mt: 2, borderColor: 'var(--primary)', color: 'var(--primary)', fontFamily: 'Poppins' }}>View Sales</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}