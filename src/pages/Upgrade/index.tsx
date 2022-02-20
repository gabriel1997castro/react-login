import { ChangeEvent, useState } from "react";
import assets from "../../assets";
import { Box, Button, Image, InputGroup, InputText, Title } from "../../components";
import { Container, InternalContainer, MonthAndCvvWrapper } from "./styles";

export function Upgrade() {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardMonth, setCreditCardMonth] = useState("");
  const [creditCardCvv, setCreditCardCvv] = useState("");

  const handleCreditCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value.replace(/\D/g, '');
    if (num.length > 4 && num.length <= 8) setCreditCardNumber(num.replace(/(\d{4})(\d{1,4})/, '$1 $2'));
    else if (num.length > 8 && num.length <= 12) setCreditCardNumber(num.replace(/(\d{4})(\d{4})(\d{1,4})/, '$1 $2 $3'));
    else if (num.length > 12 && num.length <= 16) setCreditCardNumber(num.replace(/(\d{4})(\d{4})(\d{4})(\d{1,4})/, '$1 $2 $3 $4'));
    else if (num.length > 16) return
    else setCreditCardNumber(num)
  }

  const handleCreditCardMonth = (e: ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value.replace(/\D/g, '');
    if (num.length > 2 && num.length <= 8) setCreditCardMonth(num.replace(/(\d{2})(\d{1,4})/, '$1/$2'));
    else if (num.length > 6) return
    else setCreditCardMonth(num)
  }

  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length <= 3) setCreditCardCvv(e.target.value)
  }

  return (
    <Container>
      <Box>
        <form>
          <InternalContainer>
            <Title>Get Pro Account</Title>
            <Image src={assets.undrawOnlinePayments} alt="Upgrade to pro account" />
            <InputGroup>
              <InputText
                value={creditCardNumber}
                placeholder="Card Number"
                type="text"
                onChange={handleCreditCardNumber}
                required
              />
            </InputGroup>
            <MonthAndCvvWrapper>
              <InputGroup>
                <InputText
                  value={creditCardMonth}
                  placeholder="MM/YY"
                  type="text"
                  onChange={handleCreditCardMonth}
                  pattern="^(0[1-9]|1[0-2])(\/|-)([0-9]{4})$"
                  required
                />
              </InputGroup>
              <InputGroup>
                <InputText
                 value={creditCardCvv}
                 placeholder="CVV"
                 type="number"
                 onChange={handleCvvChange}
                 pattern="\d\d\d" 
                 required
                />
              </InputGroup>
            </MonthAndCvvWrapper>
            <InputGroup>
              <InputText placeholder="ZIP/Postal Code" name="number" type="text" required />
            </InputGroup>
            <Button style={{ margin: '2rem 0rem' }} backgroundColor="secondary" type="submit">Upgrade</Button>
          </InternalContainer>
        </form>
      </Box>
    </Container >
  )
}
