import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface AppoitmentDetailsProps {
  children: ReactNode;
}

function AppoitmentDetails() {
  return (
    <Container>
      <Text>AppoitmentDetails</Text>
    </Container>
  );
}

export default AppoitmentDetails;
