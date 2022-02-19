import { Box, Container } from "./styles";
import assets from '../../assets';

export function Login() {
  return (
    <Container>
      <Box>
        <img src={assets.login} alt="Login" />
        <h1>login</h1>
        <input placeholder="example@email.com" type="email"/>
        <input placeholder="password" type="password"/>
        <button type="button">Forgot Password?</button>
        <button type="submit">LOG IN</button>
        <span>Or connect with social</span>
        <div>
        <button type="button">Facebook</button>
        <button type="button">Google</button>
        </div>
      </Box>
    </Container>
  )
}
