import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Button,
  Stack,
  Text,
  Icon,
  Link,
  PopoverContent,
  useColorModeValue,
  Popover,
  PopoverTrigger,
} from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import { useSidebar } from '../../hooks/useSidebar';
import { Filters, Sort, useFilter } from '../../hooks/useFilter';

function Navbar() {
  const { isOpen, onOpen, onClose } = useSidebar();
  const { filter, setFilter } = useFilter();

  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    setFilter({
      sort: Sort.random,
      filter: Filters.none,
    });
  }, []);

  function setFilters(option: Filters | Sort): void {
    if (Object.values(Filters).some((col: string) => col === option)) {
      let castFilter: Filters = option as Filters;
      setFilter({ sort: filter.sort, filter: castFilter });
    } else {
      let castSort: Sort = option as Sort;
      setFilter({ sort: castSort, filter: filter.filter });
    }

    console.log(`Filter :: ${filter.filter}\nSort :: ${filter.sort}`);
  }

  return (
    <Box>
      <Flex
        minH={'60px'}
        py={{ base: 4 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        direction={'row'}
        spacing={4}
      >
        <Stack
          flex={{ base: 1, md: '1' }}
          verticalAlign={'center'}
          direction={'row'}
          spacing={6}
          justifyContent={'space-between'}
        >
          <Button
            onClick={onOpen}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'orange.400'}
            href={'#'}
            _hover={{
              bg: 'orange.300',
            }}
          >
            Search
          </Button>
          <Stack direction={'row'} verticalAlign={'center'}>
            <Box>
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href="#"
                    fontSize={'lg'}
                    fontWeight={600}
                    display={{ base: 'none', md: 'inline-flex' }}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}
                  >
                    Filter
                  </Link>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    <DesktopSubNav
                      title={Filters.none}
                      label={''}
                      setFilters={setFilters}
                    />
                    <DesktopSubNav
                      title={Filters.picture}
                      label={''}
                      setFilters={setFilters}
                    />
                    <DesktopSubNav
                      title={Filters.video}
                      label={''}
                      setFilters={setFilters}
                    />
                    <DesktopSubNav
                      title={Filters.albumns}
                      label={''}
                      setFilters={setFilters}
                    />
                  </Stack>
                </PopoverContent>
              </Popover>
            </Box>
            <Box>
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href="#"
                    fontSize={'lg'}
                    fontWeight={600}
                    display={{ base: 'none', md: 'inline-flex' }}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}
                  >
                    Sort
                  </Link>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    <DesktopSubNav
                      title={Sort.random}
                      label={''}
                      setFilters={setFilters}
                    />
                    <DesktopSubNav
                      title={Sort.top}
                      label={''}
                      setFilters={setFilters}
                    />
                    <DesktopSubNav
                      title={Sort.hot}
                      label={''}
                      setFilters={setFilters}
                    />
                    <DesktopSubNav
                      title={Sort.new}
                      label={''}
                      setFilters={setFilters}
                    />
                  </Stack>
                </PopoverContent>
              </Popover>
            </Box>
          </Stack>
          <Avatar
            size={'sm'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
        </Stack>
      </Flex>
    </Box>
  );
}

interface NavItem {
  title: Filters | Sort;
  label: string;
  setFilters: (filters: Filters | Sort) => void;
}

const DesktopSubNav = ({ title, label, setFilters }: NavItem) => {
  return (
    <Link
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('orange.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box onClick={() => setFilters(title)}>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'orange.400' }}
            fontWeight={500}
          >
            {title}
          </Text>
          <Text fontSize={'sm'}>{label}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'orange.400'} w={5} h={5} as={BsFilter} />
        </Flex>
      </Stack>
    </Link>
  );
};

export { Navbar };
