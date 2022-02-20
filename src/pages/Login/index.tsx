import { Container, Form, SocialMediaWrapper, ForgotPasswordWrapper } from "./styles";
import { Button, GoogleButton, FacebookButton, Link, InputText, InputGroup, InputIcon, Box, Title, Image } from '../../components'
import assets from '../../assets';
import { colors } from "../../styles/colors";
import { useNavigate } from "react-router-dom";

export function Login() {
  let navigate = useNavigate();

  function handleRedirectForgotPassword() {
    navigate("/reset-password")
  }

  return (
    <Container>
      <Box>
        <Image src={assets.login} alt="Login" />
        <Form>
          <Title>Welcome Back!</Title>
          <InputGroup style={{ marginTop: '2rem' }}>
            <InputIcon src={assets.contactIcon} />
            <InputText placeholder="example@email.com" type="email" id="login-email" />
          </InputGroup>
          <InputGroup style={{ marginTop: '2rem' }}>
            <InputIcon src={assets.lockIcon} />
            <InputText placeholder="password" type="password" />
          </InputGroup>
          <ForgotPasswordWrapper>
            <Link 
              type="button"
              onClick={handleRedirectForgotPassword}
            >Forgot Password?</Link>
          </ForgotPasswordWrapper>
          <Button style={{ margin: '2rem 0rem' }}type="submit">LOG IN</Button>
          <span style={{ color: colors.secondaryFont, marginBottom: '2rem' }}>Or connect with social</span>
          <SocialMediaWrapper>
            <FacebookButton style={{ marginRight: '0.25rem' }} type="button">Facebook</FacebookButton>
            <GoogleButton style={{ marginLeft: '0.25rem' }} type="button">Google</GoogleButton>
          </SocialMediaWrapper>
        </Form>
      </Box>
    </Container>
  )
}
