import Head from 'next/head';
import AppShell from '../components/layout/AppShell';
import WalletCard from '../components/WalletCard';
import RevenueChart from '../components/RevenueChart';
import TransactionsList from '../components/TransactionsList';
import { useWallet } from '../hooks/useWallet';
import { SkeletonWallet } from '../components/Skeletons';
import { Grid, GridItem, VStack, HStack, Box, Text } from '@chakra-ui/react';

export default function Home() {
  const { wallet, isLoading: walletLoading } = useWallet();

  return (
    <>
      <Head>
        <title>Revenue Dashboard - Mainstack</title>
      </Head>
      <AppShell>
      {/* Top Section: Balance + Chart on left, Stats on right */}
      <Grid 
        templateColumns={{ base: '1fr', lg: '1fr 340px' }} 
        gap={{ base: 4, md: 6 }} 
        mb={{ base: 6, md: 8 }}
      >
        {/* Left: Balance Card + Revenue Chart stacked */}
        <VStack spacing={{ base: 4, md: 6 }} align="stretch">
          {/* Balance Card */}
          {walletLoading ? (
            <SkeletonWallet />
          ) : (
            <WalletCard wallet={wallet} />
          )}
          
          {/* Revenue Chart */}
          <RevenueChart />
        </VStack>
        
        {/* Right: Stats Card (separate) */}
        <VStack spacing={{ base: 4, md: 6 }} align="stretch">
          {!walletLoading && wallet && (
            <StatsCard wallet={wallet} />
          )}
        </VStack>
      </Grid>
      
      {/* Bottom Section: Transactions List */}
      <TransactionsList />
      </AppShell>
    </>
  );
}

// Stats Card Component
function StatsCard({ wallet }: { wallet: any }) {
  const formatCurrency = (amount: number) => {
    const formatted = amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return `USD ${formatted}`;
  };

  const StatItem = ({ label, value }: { label: string; value: string }) => (
    <Box py={5}>
      <HStack spacing={2} justify="space-between" align="center" mb={2}>
        <Text color="#56616B" fontSize="14px" fontWeight="400">
          {label}
        </Text>
        <Box 
          as="span" 
          w="16px" 
          h="16px" 
          borderRadius="full" 
          border="1px" 
          borderColor="#DBDEE5"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          cursor="help"
          fontSize="10px"
          color="#56616B"
          fontWeight="400"
        >
          i
        </Box>
      </HStack>
      <Text fontSize="24px" fontWeight="700" color="#131316" lineHeight="1.2">
        {value}
      </Text>
    </Box>
  );

  return (
    <Box bg="white" p={7} borderRadius="20px" boxShadow="sm" h="fit-content">
      <VStack align="stretch" spacing={0} divider={<Box h="1px" bg="#F5F5F5" />}>
        <StatItem label="Ledger Balance" value={formatCurrency(wallet.ledger_balance || 0)} />
        <StatItem label="Total Payout" value={formatCurrency(wallet.total_payout || 0)} />
        <StatItem label="Total Revenue" value={formatCurrency(wallet.total_revenue || 0)} />
        <StatItem label="Pending Payout" value={formatCurrency(wallet.pending_payout || 0)} />
      </VStack>
    </Box>
  );
}
