import { Box, Button, Container, Typography, Card, CardContent } from '@mui/material';

export default function LessonDetailsPage() {
  // Placeholder data
  const lesson = {
    title: 'Sample Lesson Plan',
    subject: 'Mathematics',
    grade: '5',
    description: 'A comprehensive lesson plan covering fractions and decimals.',
    price: 10.0,
    fileUrl: '#',
  };
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" fontWeight={700} color="var(--primary)" fontFamily="Poppins, Arial, Helvetica, sans-serif">
            {lesson.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mt={1}>
            Subject: {lesson.subject} | Grade: {lesson.grade}
          </Typography>
          <Typography variant="body1" mt={2} mb={2}>
            {lesson.description}
          </Typography>
          <Typography variant="h6" color="var(--accent)" fontWeight={700}>
            ${lesson.price.toFixed(2)}
          </Typography>
          <Button variant="contained" sx={{ mt: 2, backgroundColor: 'var(--primary)', color: '#fff', fontFamily: 'Poppins' }}>
            Purchase & Download
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}