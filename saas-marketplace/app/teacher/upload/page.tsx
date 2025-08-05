import { Box, Button, Container, TextField, Typography, MenuItem } from '@mui/material';

export default function UploadLessonPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={700} color="var(--primary)" mb={4} fontFamily="Poppins, Arial, Helvetica, sans-serif">
        Upload Lesson Plan
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField label="Title" fullWidth margin="normal" required />
        <TextField label="Subject" fullWidth margin="normal" required />
        <TextField label="Grade Level" select fullWidth margin="normal" required>
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(grade => (
            <MenuItem key={grade} value={grade}>{grade}</MenuItem>
          ))}
        </TextField>
        <TextField label="Description" fullWidth margin="normal" multiline rows={4} required />
        <TextField label="Price ($)" type="number" fullWidth margin="normal" required />
        <Button variant="contained" component="label" sx={{ mt: 2, backgroundColor: 'var(--accent)', color: '#fff', fontFamily: 'Poppins' }}>
          Upload File
          <input type="file" hidden />
        </Button>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, backgroundColor: 'var(--primary)', color: '#fff', fontWeight: 600, fontFamily: 'Poppins' }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}