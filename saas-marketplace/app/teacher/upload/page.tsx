"use client";
import { Box, Button, Container, TextField, Typography, MenuItem, Alert } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadLessonPage() {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    grade: '',
    description: '',
    price: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // For MVP, we'll use a placeholder teacherId
      // In production, this would come from the authenticated session
      const teacherId = "placeholder-teacher-id";

      const response = await fetch('/api/lessons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          teacherId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Lesson plan uploaded successfully!');
        setFormData({
          title: '',
          subject: '',
          grade: '',
          description: '',
          price: '',
        });
        setTimeout(() => {
          router.push('/teacher/dashboard');
        }, 2000);
      } else {
        setError(data.error || 'Upload failed');
      }
    } catch (error) {
      setError('An error occurred during upload');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={700} color="var(--primary)" mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
        Upload Lesson Plan
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField 
          label="Title" 
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          fullWidth 
          margin="normal" 
          required 
        />
        <TextField 
          label="Subject" 
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          fullWidth 
          margin="normal" 
          required 
        />
        <TextField 
          label="Grade Level" 
          select 
          name="grade"
          value={formData.grade}
          onChange={handleInputChange}
          fullWidth 
          margin="normal" 
          required
        >
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(grade => (
            <MenuItem key={grade} value={grade}>{grade}</MenuItem>
          ))}
        </TextField>
        <TextField 
          label="Description" 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          fullWidth 
          margin="normal" 
          multiline 
          rows={4} 
          required 
        />
        <TextField 
          label="Price ($)" 
          type="number" 
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          fullWidth 
          margin="normal" 
          required 
        />
        <Button variant="contained" component="label" sx={{ mt: 2, backgroundColor: 'var(--accent)', color: '#fff', fontFamily: 'Poppins' }}>
          Upload File
          <input type="file" hidden />
        </Button>
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          disabled={loading}
          sx={{ mt: 3, backgroundColor: 'var(--primary)', color: '#fff', fontWeight: 600, fontFamily: 'Poppins' }}
        >
          {loading ? 'Uploading...' : 'Submit'}
        </Button>
      </Box>
    </Container>
  );
}