import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { Input } from '@chakra-ui/input';
import { Box, Divider, VStack } from '@chakra-ui/layout';
import { Alert, AlertIcon, Button, FormControl, FormLabel } from '@chakra-ui/react';

import { sleep } from '../../shared/client/sleep';
import * as UI from './login.styles';

const fakeRequest = async () => {
  await sleep(100);
  const isError = Math.random() > 0.5;
  if (isError) {
    throw new Error('');
  }
  await sleep(2000);
  return true; // some response
};

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);
      await fakeRequest();
    } catch (error) {
      setError('Ошибка авторизации!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <UI.PageOuter>
      <UI.FormLogin>
        <form onSubmit={submitHandler}>
          <VStack spacing="1rem">
            <Box className="logo" width="80%" />

            <Box width="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
            </Box>

            <Box width="100%">
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input isRequired type="password" placeholder="Enter your password" />
              </FormControl>
            </Box>

            <Button isFullWidth colorScheme="blue" type="submit" isLoading={loading}>
              Log In
            </Button>
            <Button isFullWidth colorScheme="green">
              Sign Up
            </Button>
            <Divider />
            <Button isFullWidth variant="outline" leftIcon={<FcGoogle />} textAlign="left">
              Log In with Google
            </Button>
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
          </VStack>
        </form>
      </UI.FormLogin>
    </UI.PageOuter>
  );
};
