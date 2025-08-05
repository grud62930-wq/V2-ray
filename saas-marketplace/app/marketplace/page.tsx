"use client";
import { Box, Button, Container, Typography, Card, CardContent, Grid, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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

export default function MarketplacePage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    subject: '',
    grade: '',
  });
  const router = useRouter();

  useEffect(() => {
    fetchLessons();
  }, [filters]);

  const fetchLessons = async () => {
    try {
      const params = new URLSearchParams();
      if (filters.subject) params.append('subject', filters.subject);
      if (filters.grade) params.append('grade', filters.grade);

      const response = await fetch(`/api/lessons?${params}`);
      const data = await response.json();

      if (response.ok) {
        setLessons(data);
      }
    } catch (error) {
      console.error('Error fetching lessons:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={700} color="var(--primary)" mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
        Browse Lesson Plans
      </Typography>
      
      {/* Filters */}
      <Box mb={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Subject"
              value={filters.subject}
              onChange={(e) => handleFilterChange('subject', e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Grade Level</InputLabel>
              <Select
                value={filters.grade}
                label="Grade Level"
                onChange={(e) => handleFilterChange('grade', e.target.value)}
              >
                <MenuItem value="">All Grades</MenuItem>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(grade => (
                  <MenuItem key={grade} value={grade}>{grade}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Lessons Grid */}
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={3}>
          {lessons.map((lesson) => (
            <Grid item xs={12} md={4} key={lesson.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {lesson.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {lesson.subject} • Grade {lesson.grade} • By {lesson.teacher.name}
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    {lesson.description.length > 100 
                      ? `${lesson.description.substring(0, 100)}...` 
                      : lesson.description}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" color="var(--accent)" fontWeight={700}>
                      ${lesson.price.toFixed(2)}
                    </Typography>
                    <Button 
                      variant="contained" 
                      size="small"
                      onClick={() => router.push(`/lesson/${lesson.id}`)}
                      sx={{ backgroundColor: 'var(--primary)', color: '#fff', fontFamily: 'Poppins' }}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {!loading && lessons.length === 0 && (
        <Typography textAlign="center" color="text.secondary">
          No lessons found matching your criteria.
        </Typography>
      )}
    </Container>
  );
}