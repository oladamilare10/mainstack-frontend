import { VStack, IconButton, Box } from '@chakra-ui/react';
import { BsLink45Deg, BsFileText, BsFolder, BsBox } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <Box
      position="fixed"
      left={0}
      top="70px"
      h="calc(100vh - 70px)"
      w="60px"
      bg="white"
      borderRight="1px"
      borderColor="#E7E9FB"
      py={6}
      zIndex={50}
    >
      <VStack spacing={4}>
        <IconButton
          aria-label="Links"
          icon={<BsLink45Deg size={20} />}
          variant="ghost"
          size="md"
          color="#56616B"
          borderRadius="8px"
          _hover={{ bg: '#EFF1F6', color: '#131316' }}
        />
        <IconButton
          aria-label="Documents"
          icon={<BsFileText size={18} />}
          variant="ghost"
          size="md"
          color="#56616B"
          borderRadius="8px"
          _hover={{ bg: '#EFF1F6', color: '#131316' }}
        />
        <IconButton
          aria-label="Folders"
          icon={<BsFolder size={18} />}
          variant="ghost"
          size="md"
          color="#56616B"
          borderRadius="8px"
          _hover={{ bg: '#EFF1F6', color: '#131316' }}
        />
        <IconButton
          aria-label="Archive"
          icon={<BsBox size={18} />}
          variant="ghost"
          size="md"
          color="#56616B"
          borderRadius="8px"
          _hover={{ bg: '#EFF1F6', color: '#131316' }}
        />
      </VStack>
    </Box>
  );
}
