import { Box, Text, HStack } from '@chakra-ui/react';

export default function RevenueChart() {
  return (
    <Box bg="white" p={{ base: 5, md: 6, lg: 7 }} borderRadius="20px" boxShadow="sm">
      {/* Chart Container */}
      <Box position="relative" w="full">
        {/* SVG Chart */}
        <Box h={{ base: '280px', md: '320px', lg: '350px' }} position="relative" mb={6}>
          <svg width="100%" height="100%" viewBox="0 0 900 350" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF5403', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#FF5403', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            {/* Filled area under the curve */}
            <path
              d="M 0 220 Q 150 120, 300 170 Q 450 220, 600 120 Q 750 70, 900 150 L 900 350 L 0 350 Z"
              fill="url(#chartGradient)"
              stroke="none"
            />
            {/* The curve line */}
            <path
              d="M 0 220 Q 150 120, 300 170 Q 450 220, 600 120 Q 750 70, 900 150"
              fill="none"
              stroke="#FF5403"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
        
        {/* Date labels */}
        <HStack justify="space-between" px={2}>
          <Text fontSize="13px" color="#56616B" fontWeight="400">
            Apr 1, 2022
          </Text>
          <Text fontSize="13px" color="#56616B" fontWeight="400">
            Apr 30, 2022
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}
