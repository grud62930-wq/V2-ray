"use client";
import { Box, Button, Container, Typography, Card, CardContent, Divider, Alert } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface Lesson {
  id: string;
  title: string;
  price: number;
}

export default function CheckoutPage() {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [purchasing, setPurchasing] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const lessonId = searchParams.get('lessonId');
    if (lessonId) {
      fetchLesson(lessonId);
    } else {
      setError('No lesson selected');
      setLoading(false);
    }
  }, [searchParams]);

  const fetchLesson = async (lessonId: string) => {
    try {
      const response = await fetch(`/api/lessons/${lessonId}`);
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

  const handlePurchase = async () => {
    if (!lesson) return;

    setPurchasing(true);
    try {
      // For MVP, we'll use placeholder buyerId
      const buyerId = "placeholder-buyer-id";

      const response = await fetch('/api/sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lessonId: lesson.id,
          buyerId,
          amount: lesson.price,
        }),
      });

      if (response.ok) {
        // Redirect to success page or show success message
        router.push('/purchase-success');
      } else {
        setError('Purchase failed');
      }
    } catch (error) {
      setError('An error occurred during purchase');
    } finally {
      setPurchasing(false);
    }
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
          <Typography variant="h5" fontWeight={700} color="var(--primary)" fontFamily="Poppins, Arial, Helvetica, sans-serif">
            Checkout
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1">{lesson.title}</Typography>
          <Typography variant="h6" color="var(--accent)" fontWeight={700}>
            ${lesson.price.toFixed(2)}
          </Typography>
          <Button 
            variant="contained" 
            fullWidth 
            onClick={handlePurchase}
            disabled={purchasing}
            sx={{ mt: 3, backgroundColor: 'var(--primary)', color: '#fff', fontFamily: 'Poppins' }}
          >
            {purchasing ? 'Processing...' : 'Complete Purchase'}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}