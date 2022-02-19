import { Box, Container, Image, InputText, Form, MainText, Link, Button, InputGroup, InputIcon, FacebookButton, SocialMediaWrapper, GoogleButton } from "./styles";
import assets from '../../assets';

export function Login() {
  return (
    <Container>
      <Box>
        <Image src={assets.login} alt="Login" />
        <Form>
          <MainText>Welcome Back!</MainText>
          <InputGroup>
            <InputIcon src={assets.contactIcon} />
            <InputText placeholder="example@email.com" type="email" id="login-email" />
          </InputGroup>
          <InputGroup>
            <InputIcon src={assets.lockIcon} />
            <InputText placeholder="password" type="password" />
          </InputGroup>
          <Link type="button">Forgot Password?</Link>
          <Button type="submit">LOG IN</Button>
          <span>Or connect with social</span>
          <SocialMediaWrapper>
            <FacebookButton type="button">Facebook</FacebookButton>
            <GoogleButton type="button">Google</GoogleButton>
          </SocialMediaWrapper>
        </Form>
      </Box>
    </Container>
  )
}
