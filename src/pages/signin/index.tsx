import { Button, ButtonLink } from '@/atoms/button';
import FlexBox from '@/atoms/flex';
import { H4 } from '@/atoms/heading';
import { Input, InputContainer, Label } from '@/atoms/input';
import { theme } from '@/atoms/utils/color';
import { CardContainer } from '@/molecules/card';
import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
  return (
    <FlexBox justify="center" direction="column" align="center">
      <FlexBox justify="center" direction="row">
        <Image
          alt="Logo"
          src={'/logo2.svg'}
          width={420}
          height={100}
          style={{ marginBottom: '20px', marginTop: '80px' }}
        />
      </FlexBox>
      <FlexBox justify="center" direction="row">
        <CardContainer width="500px">
          <H4
            style={{ textAlign: 'center', color: `${theme.colors.blue[600]}` }}
          >
            Login
          </H4>
          <form>
            <InputContainer>
              <Label sizeInput="md">Email</Label>
              <Input
                type="email"
                sizeInput="md"
                name="email"
                placeholder="john@email.com"
              />
            </InputContainer>

            <InputContainer>
              <Label sizeInput="md">Password</Label>
              <Input
                type="password"
                sizeInput="md"
                name="password"
                placeholder="*******"
              />
            </InputContainer>
            <FlexBox justify="center" style={{ marginBottom: '20px' }}>
              <Link
                href="#"
                style={{
                  textDecoration: 'none',
                  color: `${theme.colors.blue[500]}`,
                  textAlign: 'center'
                }}
              >
                Forgot Password?
              </Link>
            </FlexBox>
            <FlexBox justify="space-around" gap="35px">
              <Button
                sizeButton="md"
                typeButton="primary"
                type="submit"
                style={{ width: '50%' }}
              >
                Login
              </Button>
              <ButtonLink
                sizeButton="md"
                typeButton="secondary"
                href="#"
                style={{ width: '50%' }}
              >
                Register
              </ButtonLink>
            </FlexBox>
          </form>
        </CardContainer>
      </FlexBox>
    </FlexBox>
  );
}
