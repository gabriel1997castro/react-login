import assets from "../../assets";
import { Box, Button, Image, InputGroup, InputIcon, InputText, Link, Title } from "../../components";
import { colors } from "../../styles/colors";
import { Container, InternalContainer, LoginLinkWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export function ResetPassword() {
  let navigate = useNavigate();

  function handleRedirectToLogin() {
    navigate("/login")
  }

  return (
    <Container>
      <Box>
        <Image src={assets.forgotPassword} alt="Forgot Password" />
        <form>
          <InternalContainer>
            <Title>Forgot Password?</Title>
            <InputGroup style={{ marginTop: '2rem' }}>
              <InputIcon src={assets.contactIcon} />
              <InputText placeholder="example@email.com" type="email" id="login-email" required />
            </InputGroup>
            <Button style={{ margin: '2rem 0rem' }} type="submit">RESET</Button>
            <LoginLinkWrapper>
              <span style={{ color: colors.secondaryFont, marginRight: "0.5rem" }}>Already have an account?</span>
              <Link type="button" onClick={handleRedirectToLogin}>Login here</Link>
            </LoginLinkWrapper>
          </InternalContainer>
        </form>
      </Box>
    </Container>
  )
}
