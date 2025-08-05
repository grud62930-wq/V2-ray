"use client";
import { Box, Button, Container, Typography, Card, CardContent, Alert } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface Lesson {
  id: string;
  title: string;
  subject: string;
  grade: number;
  description: string;
  price: number;
  teacher: {
    name: string;
  };
}

export default function LessonDetailsPage() {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      fetchLesson();
    }
  }, [params.id]);

  const fetchLesson = async () => {
    try {
      const response = await fetch(`/api/lessons/${params.id}`);
      const data = await response.json();

      if (response.ok) {
        setLesson(data);
      } else {
        setError('Lesson not found');
      }
    } catch (error) {
      setError('Error loading lesson');
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = () => {
    // For MVP, redirect to checkout
    router.push(`/checkout?lessonId=${lesson?.id}`);
  };

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (error || !lesson) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Alert severity="error">{error || 'Lesson not found'}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" fontWeight={700} color="var(--primary)" fontFamily="Poppins, Arial, Helvetica, sans-serif">
            {lesson.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mt={1}>
            Subject: {lesson.subject} | Grade: {lesson.grade} | By {lesson.teacher.name}
          </Typography>
          <Typography variant="body1" mt={2} mb={2}>
            {lesson.description}
          </Typography>
          <Typography variant="h6" color="var(--accent)" fontWeight={700}>
            ${lesson.price.toFixed(2)}
          </Typography>
          <Button 
            variant="contained" 
            onClick={handlePurchase}
            sx={{ mt: 2, backgroundColor: 'var(--primary)', color: '#fff', fontFamily: 'Poppins' }}
          >
            Purchase & Download
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}