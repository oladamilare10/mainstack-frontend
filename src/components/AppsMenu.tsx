import { 
  Box, 
  VStack, 
  HStack, 
  Text, 
  Flex,
  useOutsideClick
} from '@chakra-ui/react';
import { useRef } from 'react';

interface AppMenuItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const apps: AppMenuItem[] = [
  {
    id: 'link-in-bio',
    name: 'Link in Bio',
    description: 'Manage your Link in Bio',
    icon: '🔗',
    color: '#FF6B6B'
  },
  {
    id: 'store',
    name: 'Store',
    description: 'Manage your Store activities',
    icon: '🛍️',
    color: '#FF9966'
  },
  {
    id: 'media-kit',
    name: 'Media Kit',
    description: 'Manage your Media Kit',
    icon: '📊',
    color: '#4ECDC4'
  },
  {
    id: 'invoicing',
    name: 'Invoicing',
    description: 'Manage your Invoices',
    icon: '📄',
    color: '#95E1D3'
  },
  {
    id: 'bookings',
    name: 'Bookings',
    description: 'Manage your Bookings',
    icon: '📅',
    color: '#6C5CE7'
  }
];

interface AppsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppsMenu({ isOpen, onClose }: AppsMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  
  useOutsideClick({
    ref: menuRef,
    handler: onClose,
  });

  if (!isOpen) return null;

  return (
    <Box
      ref={menuRef}
      position="absolute"
      top="calc(100% + 8px)"
      right={0}
      bg="white"
      borderRadius="16px"
      boxShadow="0px 8px 24px rgba(0, 0, 0, 0.12)"
      minW="340px"
      p={2}
      zIndex={1000}
    >
      <VStack spacing={0} align="stretch">
        {apps.map((app, index) => (
          <Flex
            key={app.id}
            align="center"
            gap={3}
            p={4}
            borderRadius="12px"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{ bg: '#F7F8FA' }}
            role="button"
            tabIndex={0}
          >
            {/* Icon */}
            <Flex
              align="center"
              justify="center"
              w="40px"
              h="40px"
              borderRadius="10px"
              bg={app.color}
              fontSize="20px"
              flexShrink={0}
            >
              {app.icon}
            </Flex>

            {/* Text Content */}
            <VStack align="start" spacing={0} flex={1}>
              <Text fontSize="15px" fontWeight="600" color="#131316" lineHeight="1.3">
                {app.name}
              </Text>
              <Text fontSize="13px" color="#56616B" lineHeight="1.4">
                {app.description}
              </Text>
            </VStack>

            {/* Arrow/Indicator (optional) */}
            <Box color="#DBDEE5" fontSize="18px" opacity={0} _groupHover={{ opacity: 1 }}>
              →
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
