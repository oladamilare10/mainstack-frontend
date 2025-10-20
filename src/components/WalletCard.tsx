import { Box, Text, HStack, VStack, Button, Flex } from '@chakra-ui/react';
import type { Wallet } from '../lib/api';

export default function WalletCard({ wallet }: { wallet?: Wallet | null }) {
	if (!wallet) return null;
	
	return (
		<Box bg="white" p={{ base: 5, md: 7 }} borderRadius="20px" boxShadow="sm">
			<VStack align="stretch" spacing={{ base: 4, md: 5 }}>
				<Text color="#56616B" fontSize="14px" fontWeight="400">
					Available Balance
				</Text>
				<Flex align="center" alignItems="center" justify="flex-start" gap={100} flexWrap="wrap">
					<Text fontSize={{ base: '30px', md: '35px' }} fontWeight="700" color="#131316" lineHeight="1" letterSpacing="-0.02em">
						USD {wallet.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
					</Text>
					<Button 
						bg="#131316" 
						color="white"
						size="lg"
						h={{ base: '48px', md: '56px' }}
						w="300px"
						borderRadius="full"
						fontWeight="600"
						fontSize="16px"
						_hover={{ bg: '#2A2A2E' }}
						_active={{ bg: '#0A0A0A' }}
						mt={1}
					>
						Withdraw
					</Button>
				</Flex>
			</VStack>
		</Box>
	);
}
