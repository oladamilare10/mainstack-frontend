import { Box, Text, HStack, VStack, Button, Circle, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useTransactions } from '../hooks/useTransactions';
import { SkeletonTransactions } from './Skeletons';
import { BsArrowDownLeft, BsCheck as CheckIcon } from 'react-icons/bs';
import { BsFilter as FilterIcon } from 'react-icons/bs';
import { BsDownload as DownloadIcon } from 'react-icons/bs';
import FilterPanel from './FilterPanel';

export default function TransactionsList() {
	const { transactions, isLoading, error, page, setPage, total, pageSize } = useTransactions();
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	if (isLoading) return <SkeletonTransactions />;
	if (error) return <Box p={6}>Error loading transactions</Box>;

	return (
		<Box bg="white" p={{ base: 4, md: 6 }} borderRadius="16px" boxShadow="0px 2px 4px rgba(0, 0, 0, 0.04)">
			<VStack align="stretch" spacing={{ base: 4, md: 6 }}>
				{/* Header */}
				<HStack justify="space-between" align="start" flexWrap={{ base: 'wrap', md: 'nowrap' }} gap={{ base: 3, md: 0 }}>
					<VStack align="start" spacing={1}>
						<Text fontSize={{ base: '20px', md: '24px' }} fontWeight="700" color="#131316" lineHeight="1.2">
							{total} Transaction{total !== 1 ? 's' : ''}
						</Text>
						<Text color="#56616B" fontSize="14px" lineHeight="1.5">
							Your transactions for the last 7 days
						</Text>
					</VStack>
					<HStack spacing={3} flexShrink={0}>
						<Button 
							variant="outline" 
							size="sm"
							leftIcon={<FilterIcon />}
							borderColor="#DBDEE5"
							color="#131316"
							fontWeight="600"
							fontSize="14px"
							px={4}
							h="40px"
							_hover={{ bg: '#EFF1F6' }}
							onClick={() => setIsFilterOpen(true)}
						>
							Filter
						</Button>
						<Button 
							variant="outline"
							size="sm"
							leftIcon={<DownloadIcon />}
							borderColor="#DBDEE5"
							color="#131316"
							fontWeight="600"
							fontSize="14px"
							px={4}
							h="40px"
							_hover={{ bg: '#EFF1F6' }}
							display={{ base: 'none', sm: 'flex' }}
						>
							Export list
						</Button>
					</HStack>
				</HStack>

				{/* Transaction List */}
				<VStack spacing={0} align="stretch">
					{transactions.map((t, index) => {
						const isSuccessful = t.status === 'successful';
						const isPending = t.status === 'pending';
						const isFailed = t.status === 'failed';
						const isDeposit = t.type === 'deposit';
						const isWithdrawal = t.type === 'withdrawal';
						
						return (
							<Box key={t.id}>
								<Flex py={{ base: 3, md: 4 }} align="center" gap={{ base: 3, md: 4 }} flexWrap={{ base: 'wrap', sm: 'nowrap' }}>
									{/* Status Icon */}
									<Circle 
										size={{ base: '40px', md: '48px' }} 
										bg={isDeposit ? '#E3FCF2' : isPending ? '#FEF5E6' : '#FFE5E5'} 
										flexShrink={0}
									>
										{isDeposit && (
											<Circle size={{ base: '20px', md: '24px' }} bg="transparent" >
												<BsArrowDownLeft color="#00AC56" size={14} fontWeight="bold" />
											</Circle>
										)}
										{isWithdrawal && (
											<Circle size={{ base: '20px', md: '24px' }} bg="transparent">
												<BsArrowDownLeft color="#DC2626" size={14} fontWeight="bold" style={{ transform: 'rotate(180deg)' }} />
											</Circle>
										)}
										{isPending && (
											<Box color="#FF8A00" fontSize={{ base: '18px', md: '20px' }} fontWeight="bold">
												↻
											</Box>
										)}
										{isFailed && (
											<Box color="#DC2626" fontSize={{ base: '18px', md: '20px' }} fontWeight="bold">
												×
											</Box>
										)}
									</Circle>

									{/* Transaction Details */}
									<VStack flex={1} align="start" spacing={0.5} minW="0">
										<Text fontWeight="500" fontSize={{ base: '15px', md: '16px' }} color="#131316" lineHeight="1.4" noOfLines={1}>
											{t.metadata?.product_name || t.description || 'Transaction'}
										</Text>
										<Text fontSize="14px" color="#56616B" lineHeight="1.5" noOfLines={1}>
											{t.metadata?.name || t.metadata?.email || t.type}
										</Text>
									</VStack>

									{/* Amount and Date */}
									<VStack align="end" spacing={0.5} flexShrink={0}>
										<Text fontWeight="600" fontSize={{ base: '15px', md: '16px' }} color="#131316" lineHeight="1.4">
											USD {t.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
										</Text>
										<Text fontSize="13px" color="#56616B" lineHeight="1.5">
											{new Date(t.date).toLocaleDateString('en-US', { 
												month: 'short', 
												day: 'numeric',
												year: 'numeric'
											})}
										</Text>
									</VStack>
								</Flex>
								{index < transactions.length - 1 && <Box h="1px" bg="#EFF1F6" />}
							</Box>
						);
					})}
				</VStack>

				{/* Pagination */}
				{total > pageSize && (
					<HStack justify="center" spacing={4} pt={2}>
						<Button
							size="sm"
							variant="ghost"
							onClick={() => setPage(Math.max(1, page - 1))}
							isDisabled={page === 1}
							color="#56616B"
							fontWeight="600"
						>
							Previous
						</Button>
						<Text fontSize="14px" color="#56616B" fontWeight="500">
							Page {page} of {Math.ceil(total / pageSize)}
						</Text>
						<Button
							size="sm"
							variant="ghost"
							onClick={() => setPage(page + 1)}
							isDisabled={page * pageSize >= total}
							color="#56616B"
							fontWeight="600"
						>
							Next
						</Button>
					</HStack>
				)}
			</VStack>

			{/* Filter Panel */}
			<FilterPanel isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
		</Box>
	);
}
