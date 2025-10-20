import { Box, VStack, HStack, Text, Flex, Icon } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import { 
  BsGear, 
  BsClockHistory, 
  BsGift, 
  BsGrid3X3Gap, 
  BsBug, 
  BsArrowLeftRight,
  BsBoxArrowRight
} from 'react-icons/bs';
import { useUser } from '../hooks/useUser';

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  id: string;
  icon: any;
  label: string;
  isDivider?: boolean;
}

const menuItems: MenuItem[] = [
  { id: 'settings', icon: BsGear, label: 'Settings' },
  { id: 'purchase', icon: BsClockHistory, label: 'Purchase History' },
  { id: 'refer', icon: BsGift, label: 'Refer and Earn' },
  { id: 'integrations', icon: BsGrid3X3Gap, label: 'Integrations' },
  { id: 'report', icon: BsBug, label: 'Report Bug' },
  { id: 'switch', icon: BsArrowLeftRight, label: 'Switch Account' },
  { id: 'signout', icon: BsBoxArrowRight, label: 'Sign Out', isDivider: true },
];

export default function UserMenu({ isOpen, onClose }: UserMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Box
      ref={menuRef}
      position="absolute"
      top="calc(100% + 12px)"
      right={0}
      w="320px"
      bg="white"
      borderRadius="12px"
      boxShadow="0px 6px 16px rgba(0, 0, 0, 0.12)"
      border="1px solid #EFF1F6"
      py={2}
      zIndex={1000}
    >
      <VStack spacing={0} align="stretch">
        {/* User Info Section */}
        <Box px={4} py={3} borderBottom="1px solid #EFF1F6">
          <Flex align="center" gap={3}>
            <Box 
              w="40px" 
              h="40px" 
              bg="#131316"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="600"
              fontSize="14px"
              color="white"
              flexShrink={0}
            >
              {user ? user.first_name[0] + user.last_name[0] : 'OJ'}
            </Box>
            <Box flex={1} overflow="hidden">
              <Text
                fontSize="15px"
                fontWeight="600"
                color="#131316"
                lineHeight="1.3"
                noOfLines={1}
              >
                {user ? `${user.first_name} ${user.last_name}` : 'Olivier Jones'}
              </Text>
              <Text
                fontSize="12px"
                fontWeight="400"
                color="#56616B"
                lineHeight="1.3"
                noOfLines={1}
              >
                {user ? user.email : 'olivier@mainstack.co'}
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <Box key={item.id}>
            {item.isDivider && index > 0 && (
              <Box h="1px" bg="#EFF1F6" my={2} />
            )}
            <Flex
              as="button"
              align="center"
              gap={3}
              px={4}
              py={3}
              w="100%"
              transition="all 0.15s"
              _hover={{ bg: '#F7F7F8' }}
              cursor="pointer"
              onClick={() => {
                console.log(`Clicked: ${item.label}`);
                if (item.id === 'signout') {
                  // Handle sign out
                }
                onClose();
              }}
            >
              <Icon
                as={item.icon as any}
                fontSize="18px"
                color="#56616B"
              />
              <Text
                fontSize="15px"
                fontWeight="400"
                color="#131316"
                flex={1}
                textAlign="left"
              >
                {item.label}
              </Text>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
