import { Box, Avatar, Text, VStack, HStack } from '@chakra-ui/react';
import type { User } from '../lib/api';

export default function UserCard({ user }: { user?: User | null }) {
	if (!user) return null;
	return (
		<Box bg="white" p={4} borderRadius="md" boxShadow="sm">
			<HStack spacing={4} align="center">
				<Avatar name={user.name} src={user.avatar} size="lg" />
				<VStack align="start" spacing={0}>
					<Text fontWeight={700} fontSize="16px">
						{user.name}
					</Text>
					<Text fontSize="12px" color="gray.500">
						{user.email}
					</Text>
				</VStack>
			</HStack>
		</Box>
	);
}
