import { Box, Container, HStack, Text, Button, Icon, Flex, IconButton, Image } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { BsBell, BsQuestionCircle, BsSearch, BsChatDots } from 'react-icons/bs';
import { HiCash, HiOutlineMenu } from 'react-icons/hi';
import AppsMenu from '../AppsMenu';
import UserMenu from '../UserMenu';
import { BiHome } from 'react-icons/bi';
import { MdInsertChartOutlined } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { IoAppsOutline } from 'react-icons/io5';

const Logo = () => (
	<Flex align="center" cursor="pointer" _hover={{ opacity: 0.85 }} transition="opacity 0.2s">
		<Image src="/logo.svg" alt="Mainstack Logo" width="32px" height="32px" />
	</Flex>
);

const NavLink = ({ children, active = false }: { children: ReactNode; active?: boolean }) => (
	<Button
		variant="ghost"
		fontWeight={active ? "600" : "500"}
		fontSize="14px"
		color={active ? 'white' : '#56616B'}
		bg={active ? '#131316' : 'transparent'}
		px={5}
		h="32px"
		borderRadius="20px"
		_hover={{ 
			bg: active ? '#2A2A2E' : '#EFF1F6',
			color: active ? 'white' : '#131316' 
		}}
		transition="all 0.2s"
	>
		{children}
	</Button>
);

export default function AppShell({ children }: { children: ReactNode }) {
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <Box minH="100vh" bg="#ffffffff">
      {/* Top Navigation */}
      <Box 
        as="nav" 
        bg="white" 
        borderBottom="1px" 
        borderColor="#EFF1F6" 
        borderRadius={50}
        mx={5}
        position="sticky" 
        top={0} 
        zIndex={100}
      >
        <Box maxW="100%" px={{ base: 4, md: 6, lg: 8 }}>
          <Flex justify="space-between" align="center" h="72px">
            {/* Left: Logo + Nav */}
            <Flex align="center" gap={{ base: 4, md: 8, lg: 12 }}>
              <Logo />
              <HStack spacing={1} display={{ base: 'none', lg: 'flex' }}>
                <Button
                  variant="ghost"
                  fontWeight="400"
                  fontSize="15px"
                  color="#56616B"
                  bg="transparent"
                  px={4}
                  h="36px"
                  leftIcon={<Box as="span" fontSize="16px"><Icon as={BiHome as any} /></Box>}
                  _hover={{ bg: '#F7F7F8' }}
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  fontWeight="400"
                  fontSize="15px"
                  color="#56616B"
                  bg="transparent"
                  px={4}
                  h="36px"
                  leftIcon={<Box as="span" fontSize="16px"><Icon as={MdInsertChartOutlined as any} /></Box>}
                  _hover={{ bg: '#F7F7F8' }}
                >
                  Analytics
                </Button>
                <Button
                  variant="solid"
                  fontWeight="500"
                  fontSize="15px"
                  color="white"
                  bg="#131316"
                  px={5}
                  h="36px"
                  borderRadius="full"
                  leftIcon={<Box as="span" fontSize="16px"><Icon as={HiCash as any} /></Box>}
                  _hover={{ bg: '#2A2A2E' }}
                >
                  Revenue
                </Button>
                <Button
                  variant="ghost"
                  fontWeight="400"
                  fontSize="15px"
                  color="#56616B"
                  bg="transparent"
                  px={4}
                  h="36px"
                  leftIcon={<Box as="span" fontSize="16px"><Icon as={FiUsers as any} /></Box>}
                  _hover={{ bg: '#F7F7F8' }}
                >
                  CRM
                </Button>
                <Box position="relative">
                  <Button
                    variant="ghost"
                    fontWeight="400"
                    fontSize="15px"
                    color="#56616B"
                    bg="transparent"
                    px={4}
                    h="36px"
                    leftIcon={<Box as="span" fontSize="16px"><Icon as={IoAppsOutline as any} /></Box>}
                    _hover={{ bg: '#F7F7F8' }}
                    onClick={() => setIsAppsOpen(!isAppsOpen)}
                  >
                    Apps
                  </Button>
                  {isAppsOpen && (
                    <AppsMenu 
                      isOpen={isAppsOpen} 
                      onClose={() => setIsAppsOpen(false)} 
                    />
                  )}
                </Box>
              </HStack>
            </Flex>

            {/* Right: Icons */}
            <HStack spacing={2}>
              <IconButton
                aria-label="Notifications"
                icon={<Icon as={BsBell as any} size={20} />}
                variant="ghost"
                size="md"
                color="#56616B"
                _hover={{ bg: '#F7F7F8', color: '#131316' }}
                display={{ base: 'none', md: 'flex' }}
              />
              <IconButton
                aria-label="Messages"
                icon={<Icon as={BsChatDots as any} size={20} />}
                variant="ghost"
                size="md"
                color="#56616B"
                _hover={{ bg: '#F7F7F8', color: '#131316' }}
                display={{ base: 'none', md: 'flex' }}
              />
              <Box position="relative">
                <Flex
                  as="button"
                  align="center"
                  gap={{ base: 2, md: 3 }}
                  cursor="pointer"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  _hover={{ opacity: 0.9 }}
                  transition="opacity 0.2s"
                  bg="#e4e4e4ff"
                  style={{
                    padding: 5,
                    paddingRight: 10,
                    borderRadius: 50
                  }}
                >
                  <Box 
                    w="26px" 
                    h="26px" 
                    bg="#131316"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="600"
                    fontSize="10px"
                    color="white"
                  >
                    OJ
                  </Box>
                  <Box color="#56616B">
                    <Icon as={HiOutlineMenu as any} size={22} />
                  </Box>
                </Flex>
                {isUserMenuOpen && (
                  <UserMenu 
                    isOpen={isUserMenuOpen} 
                    onClose={() => setIsUserMenuOpen(false)} 
                  />
                )}
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Box>

      {/* Main Content */}
      <Box mx="auto" maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 6, md: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
