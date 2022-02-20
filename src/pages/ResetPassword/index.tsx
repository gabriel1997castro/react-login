import assets from "../../assets";
import { Box, Button, Image, InputGroup, InputIcon, InputText, Link, Title } from "../../components";
import { colors } from "../../styles/colors";
import { Container, Form, LoginLinkWrapper } from "./styles";

export function ResetPassword() {
  return (
    <Container>
      <Box>
        <Image src={assets.forgotPassword} alt="Forgot Password" />
        <Form>
          <Title>Forgot Password?</Title>
          <InputGroup style={{ marginTop: '2rem' }}>
            <InputIcon src={assets.contactIcon} />
            <InputText placeholder="example@email.com" type="email" id="login-email" />
          </InputGroup>
          <Button style={{ margin: '2rem 0rem' }} type="submit">LOG IN</Button>
          <LoginLinkWrapper>
            <span style={{ color: colors.secondaryFont, marginRight: "0.5rem" }}>Already have an account?</span>
            <Link>Login here</Link>
          </LoginLinkWrapper>
        </Form>
      </Box>
    </Container>
  )
}
