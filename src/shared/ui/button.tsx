import { Button as ChakraButton, ButtonProps } from '@chakra-ui/button';

type Props = {
  loading?: boolean;
};

// Chakra button has trouble with loading flag, when state change all page page crushing

export const FixedButton = ({ loading = false, children, ...rest }: Props & ButtonProps) => {
  if (loading) {
    return <ChakraButton {...rest} isLoading={true} />;
  }

  return <ChakraButton {...rest}>{children}</ChakraButton>;
};
