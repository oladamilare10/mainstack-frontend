import { Box, SkeletonCircle, SkeletonText, VStack } from '@chakra-ui/react';

export function SkeletonUser() {
  return (
    <Box p="4" bg="white" borderRadius="md">
      <VStack align="start">
        <SkeletonCircle size="12" />
        <SkeletonText mt="4" noOfLines={2} spacing="4" />
      </VStack>
    </Box>
  );
}

export function SkeletonWallet() {
  return (
    <Box p="4" bg="white" borderRadius="md">
      <SkeletonText noOfLines={3} />
    </Box>
  );
}

export function SkeletonTransactions() {
  return (
    <Box p="4" bg="white" borderRadius="md">
      <SkeletonText noOfLines={6} />
    </Box>
  );
}
