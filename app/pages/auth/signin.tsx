import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAuth } from '../../lib/useAuth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, signIn } = useAuth();

  const onSubmit = async (event) => {
    event.preventDefault();
    signIn(email, password);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <form onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <Typography variant="h4">Sign In</Typography>
          <Box pb={2.5} />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            label="Email"
            required
          />
          <Box pb={2.5} />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            label="Password"
            required
          />
          <Box pb={2.5} />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
}