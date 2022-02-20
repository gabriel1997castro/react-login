import { useNavigate } from "react-router-dom";
import { Box, Button, Title } from "../../components";
import { Container } from "./styles";

export function Main() {
  let navigate = useNavigate();

  return (
    <Container>
      <Box>
        <Title style={{ marginTop: '3rem' }}>Welcome!</Title>
        <Button onClick={() => navigate('/login')} style={{ marginTop: '2rem' }}>LOGIN PAGE</Button>
        <Button onClick={() => navigate('/upgrade')} style={{ marginTop: '2rem' }}>UPGRADE</Button>
        <Button onClick={() => navigate('/reset-password')} style={{ marginTop: '2rem' }}>RESET PASSWORD</Button>
      </Box>
    </Container>
  )
}