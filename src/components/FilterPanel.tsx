import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  HStack,
  IconButton,
  Input,
  Select,
  Tabs,
  TabList,
  Tab,
  useOutsideClick,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BiChevronDown } from 'react-icons/bi';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type DateRangeTab = 'today' | 'last7days' | 'thismonth' | 'last3months';

export default function FilterPanel({ isOpen, onClose }: FilterPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const statusDropdownRef = useRef<HTMLDivElement>(null);
  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);
  const [selectedDateRange, setSelectedDateRange] = useState<DateRangeTab>('today');
  const [startDate, setStartDate] = useState('17 Jul 2023');
  const [endDate, setEndDate] = useState('17 Aug 2023');
  const [transactionType, setTransactionType] = useState<string[]>([]);
  const [transactionStatus, setTransactionStatus] = useState<string[]>([]);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 6)); // July 2023
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(new Date(2023, 6, 17));
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(new Date(2023, 7, 17));

  // Close panel on outside click
  useOutsideClick({
    ref: panelRef,
    handler: () => {
      if (isOpen) onClose();
    },
  });

  // Close type dropdown on outside click
  useOutsideClick({
    ref: typeDropdownRef,
    handler: () => {
      if (isTypeDropdownOpen) setIsTypeDropdownOpen(false);
    },
  });

  // Close status dropdown on outside click
  useOutsideClick({
    ref: statusDropdownRef,
    handler: () => {
      if (isStatusDropdownOpen) setIsStatusDropdownOpen(false);
    },
  });

  // Close start calendar on outside click
  useOutsideClick({
    ref: startDateRef,
    handler: () => {
      if (isStartCalendarOpen) setIsStartCalendarOpen(false);
    },
  });

  // Close end calendar on outside click
  useOutsideClick({
    ref: endDateRef,
    handler: () => {
      if (isEndCalendarOpen) setIsEndCalendarOpen(false);
    },
  });

  const transactionTypes = [
    'Store Transactions',
    'Get Tipped',
    'Withdrawals',
    'Chargebacks',
    'Cashbacks',
    'Refer & Earn',
  ];

  const transactionStatuses = ['Successful', 'Pending', 'Failed'];

  const handleTypeToggle = (type: string) => {
    setTransactionType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleStatusToggle = (status: string) => {
    setTransactionStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const handleClear = () => {
    setSelectedDateRange('today');
    setStartDate('17 Jul 2023');
    setEndDate('17 Aug 2023');
    setTransactionType([]);
    setTransactionStatus([]);
  };

  const handleApply = () => {
    // Apply filters logic here
    console.log('Filters applied:', {
      dateRange: selectedDateRange,
      startDate,
      endDate,
      transactionType,
      transactionStatus,
    });
    onClose();
  };

  // Calendar helper functions
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const handleDateSelect = (day: number, isStart: boolean) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (isStart) {
      setSelectedStartDate(newDate);
      setStartDate(formatDate(newDate));
      setIsStartCalendarOpen(false);
    } else {
      setSelectedEndDate(newDate);
      setEndDate(formatDate(newDate));
      setIsEndCalendarOpen(false);
    }
  };

  const changeMonth = (increment: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment));
  };

  const renderCalendar = (isStart: boolean) => {
    const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
    const days = [];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const selectedDate = isStart ? selectedStartDate : selectedEndDate;

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<Box key={`empty-${i}`} />);
    }

    // Add day cells
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate?.getDate() === day && 
                        selectedDate?.getMonth() === currentMonth.getMonth() &&
                        selectedDate?.getFullYear() === currentMonth.getFullYear();
      days.push(
        <Flex
          key={day}
          align="center"
          justify="center"
          w="32px"
          h="32px"
          borderRadius="full"
          cursor="pointer"
          fontSize="14px"
          fontWeight={isSelected ? '600' : '400'}
          color={isSelected ? 'white' : '#131316'}
          bg={isSelected ? '#131316' : 'transparent'}
          _hover={{ bg: isSelected ? '#131316' : '#F7F7F8' }}
          onClick={() => handleDateSelect(day, isStart)}
        >
          {day}
        </Flex>
      );
    }

    return (
      <Box
        position="absolute"
        top="calc(100% + 4px)"
        left={0}
        bg="white"
        border="1px solid #EFF1F6"
        borderRadius="12px"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        zIndex={10}
        p={4}
        w="280px"
      >
        {/* Month/Year header */}
        <Flex justify="space-between" align="center" mb={4}>
          <IconButton
            aria-label="Previous month"
            icon={<Text fontSize="18px">‹</Text>}
            variant="ghost"
            size="sm"
            onClick={() => changeMonth(-1)}
          />
          <Text fontSize="14px" fontWeight="600" color="#131316">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </Text>
          <IconButton
            aria-label="Next month"
            icon={<Text fontSize="18px">›</Text>}
            variant="ghost"
            size="sm"
            onClick={() => changeMonth(1)}
          />
        </Flex>

        {/* Day labels */}
        <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={1} mb={2}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <Text key={day} fontSize="11px" fontWeight="600" color="#56616B" textAlign="center">
              {day}
            </Text>
          ))}
        </Box>

        {/* Calendar grid */}
        <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={1}>
          {days}
        </Box>
      </Box>
    );
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.4)"
          zIndex={999}
          transition="opacity 0.3s"
          opacity={isOpen ? 1 : 0}
        />
      )}

      {/* Filter Panel */}
      <Box
        ref={panelRef}
        position="fixed"
        top={2}
        right={2}
        bottom={5}
        w="400px"
        h="calc(100vh - 20px)"
        borderRadius="18px"
        bg="white"
        boxShadow="-4px 0 24px rgba(0, 0, 0, 0.15)"
        transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
        transition="transform 0.3s ease-in-out"
        zIndex={1000}
        overflowY="auto"
      >
        {/* Header */}
        <Flex
          align="center"
          justify="space-between"
          p={6}
          borderBottom="1px solid #EFF1F6"
        >
          <Text fontSize="18px" fontWeight="600" color="#131316">
            Filter
          </Text>
          <IconButton
            aria-label="Close filter"
            icon={<MdClose />}
            variant="ghost"
            size="sm"
            color="#56616B"
            onClick={onClose}
            _hover={{ bg: '#F7F7F8' }}
          />
        </Flex>

        {/* Content */}
        <VStack spacing={6} p={6} align="stretch">
          {/* Date Range */}
          <Box>
            <Text fontSize="14px" fontWeight="600" color="#131316" mb={3}>
              Date Range
            </Text>
            <Tabs
              variant="unstyled"
              index={
                ['today', 'last7days', 'thismonth', 'last3months'].indexOf(
                  selectedDateRange
                )
              }
              onChange={(index) => {
                const ranges: DateRangeTab[] = [
                  'today',
                  'last7days',
                  'thismonth',
                  'last3months',
                ];
                setSelectedDateRange(ranges[index]);
              }}
            >
              <TabList
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                gap={2}
              >
                <Tab
                  fontSize="13px"
                  fontWeight="500"
                  color="#56616B"
                  bg="#F7F7F8"
                  borderRadius="8px"
                  py={2}
                  _selected={{
                    color: 'white',
                    bg: '#131316',
                  }}
                >
                  Today
                </Tab>
                <Tab
                  fontSize="13px"
                  fontWeight="500"
                  color="#56616B"
                  bg="#F7F7F8"
                  borderRadius="8px"
                  py={2}
                  _selected={{
                    color: 'white',
                    bg: '#131316',
                  }}
                >
                  Last 7 days
                </Tab>
                <Tab
                  fontSize="13px"
                  fontWeight="500"
                  color="#56616B"
                  bg="#F7F7F8"
                  borderRadius="8px"
                  py={2}
                  _selected={{
                    color: 'white',
                    bg: '#131316',
                  }}
                >
                  This month
                </Tab>
                <Tab
                  fontSize="13px"
                  fontWeight="500"
                  color="#56616B"
                  bg="#F7F7F8"
                  borderRadius="8px"
                  py={2}
                  _selected={{
                    color: 'white',
                    bg: '#131316',
                  }}
                >
                  Last 3 months
                </Tab>
              </TabList>
            </Tabs>

            {/* Date Inputs */}
            <HStack spacing={3} mt={4}>
              <Box flex={1} position="relative" ref={startDateRef}>
                <Input
                  value={startDate}
                  placeholder="Start date"
                  fontSize="14px"
                  h="40px"
                  borderColor="#EFF1F6"
                  readOnly
                  cursor="pointer"
                  onClick={() => setIsStartCalendarOpen(!isStartCalendarOpen)}
                  _hover={{ borderColor: '#D0D5DD' }}
                  _focus={{ borderColor: '#131316', boxShadow: 'none' }}
                />
                <Box
                  position="absolute"
                  right="12px"
                  top="50%"
                  transform="translateY(-50%)"
                  pointerEvents="none"
                  color="#56616B"
                  fontSize="20px"
                >
                  <BiChevronDown />
                </Box>
                {isStartCalendarOpen && renderCalendar(true)}
              </Box>
              <Box flex={1} position="relative" ref={endDateRef}>
                <Input
                  value={endDate}
                  placeholder="End date"
                  fontSize="14px"
                  h="40px"
                  borderColor="#EFF1F6"
                  readOnly
                  cursor="pointer"
                  onClick={() => setIsEndCalendarOpen(!isEndCalendarOpen)}
                  _hover={{ borderColor: '#D0D5DD' }}
                  _focus={{ borderColor: '#131316', boxShadow: 'none' }}
                />
                <Box
                  position="absolute"
                  right="12px"
                  top="50%"
                  transform="translateY(-50%)"
                  pointerEvents="none"
                  color="#56616B"
                  fontSize="20px"
                >
                  <BiChevronDown />
                </Box>
                {isEndCalendarOpen && renderCalendar(false)}
              </Box>
            </HStack>
          </Box>

          {/* Transaction Type */}
          <Box position="relative" ref={typeDropdownRef}>
            <Text fontSize="14px" fontWeight="600" color="#131316" mb={3}>
              Transaction Type
            </Text>
            <Box position="relative">
              <Input
                value={transactionType.join(', ')}
                placeholder="Store Transactions, Get Tipped, Withdrawals, Chargebacks, Ca..."
                fontSize="14px"
                h="40px"
                borderColor="#EFF1F6"
                color="#56616B"
                pr="40px"
                readOnly
                cursor="pointer"
                onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                _hover={{ borderColor: '#D0D5DD' }}
                _focus={{ borderColor: '#131316', boxShadow: 'none' }}
              />
              <Box
                position="absolute"
                right="12px"
                top="50%"
                transform="translateY(-50%)"
                pointerEvents="none"
                color="#56616B"
                fontSize="20px"
              >
                <BiChevronDown />
              </Box>
              
              {/* Dropdown Menu */}
              {isTypeDropdownOpen && (
                <Box
                  position="absolute"
                  top="calc(100% + 4px)"
                  left={0}
                  right={0}
                  bg="white"
                  border="1px solid #EFF1F6"
                  borderRadius="8px"
                  boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
                  zIndex={10}
                  py={2}
                  maxH="240px"
                  overflowY="auto"
                >
                  {transactionTypes.map((type) => (
                    <Flex
                      key={type}
                      align="center"
                      px={3}
                      py={2}
                      cursor="pointer"
                      _hover={{ bg: '#F7F7F8' }}
                      onClick={() => handleTypeToggle(type)}
                    >
                      <Checkbox
                        isChecked={transactionType.includes(type)}
                        onChange={() => handleTypeToggle(type)}
                        colorScheme="blackAlpha"
                        iconColor="white"
                        size="md"
                        mr={3}
                        sx={{
                          '& .chakra-checkbox__control': {
                            borderColor: '#EFF1F6',
                            borderWidth: '1.5px',
                            _checked: {
                              bg: '#131316',
                              borderColor: '#131316',
                            },
                          },
                        }}
                      />
                      <Text fontSize="14px" color="#131316" flex={1}>
                        {type}
                      </Text>
                    </Flex>
                  ))}
                </Box>
              )}
            </Box>
          </Box>

          {/* Transaction Status */}
          <Box position="relative" ref={statusDropdownRef}>
            <Text fontSize="14px" fontWeight="600" color="#131316" mb={3}>
              Transaction Status
            </Text>
            <Box position="relative">
              <Input
                value={transactionStatus.join(', ')}
                placeholder="Successful, Pending, Failed"
                fontSize="14px"
                h="40px"
                borderColor="#EFF1F6"
                color="#56616B"
                pr="40px"
                readOnly
                cursor="pointer"
                onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                _hover={{ borderColor: '#D0D5DD' }}
                _focus={{ borderColor: '#131316', boxShadow: 'none' }}
              />
              <Box
                position="absolute"
                right="12px"
                top="50%"
                transform="translateY(-50%)"
                pointerEvents="none"
                color="#56616B"
                fontSize="20px"
              >
                <BiChevronDown />
              </Box>
              
              {/* Dropdown Menu */}
              {isStatusDropdownOpen && (
                <Box
                  position="absolute"
                  top="calc(100% + 4px)"
                  left={0}
                  right={0}
                  bg="white"
                  border="1px solid #EFF1F6"
                  borderRadius="8px"
                  boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
                  zIndex={10}
                  py={2}
                >
                  {transactionStatuses.map((status) => (
                    <Flex
                      key={status}
                      align="center"
                      px={3}
                      py={2}
                      cursor="pointer"
                      _hover={{ bg: '#F7F7F8' }}
                      onClick={() => handleStatusToggle(status)}
                    >
                      <Checkbox
                        isChecked={transactionStatus.includes(status)}
                        onChange={() => handleStatusToggle(status)}
                        colorScheme="blackAlpha"
                        iconColor="white"
                        size="md"
                        mr={3}
                        sx={{
                          '& .chakra-checkbox__control': {
                            borderColor: '#EFF1F6',
                            borderWidth: '1.5px',
                            _checked: {
                              bg: '#131316',
                              borderColor: '#131316',
                            },
                          },
                        }}
                      />
                      <Text fontSize="14px" color="#131316" flex={1}>
                        {status}
                      </Text>
                    </Flex>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </VStack>

        {/* Footer */}
        <Flex
          position="sticky"
          bottom={0}
          bg="white"
          p={6}
          gap={3}
          borderTop="1px solid #EFF1F6"
        >
          <Button
            flex={1}
            variant="outline"
            fontSize="14px"
            fontWeight="600"
            h="44px"
            borderColor="#EFF1F6"
            color="#131316"
            _hover={{ bg: '#F7F7F8' }}
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            flex={1}
            fontSize="14px"
            fontWeight="600"
            h="44px"
            bg="#131316"
            color="white"
            _hover={{ bg: '#2A2A2E' }}
            onClick={handleApply}
          >
            Apply
          </Button>
        </Flex>
      </Box>
    </>
  );
}
