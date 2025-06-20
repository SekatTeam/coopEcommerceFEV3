"use client"

import { Box, Flex, VStack, Text, Badge, HStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { AutomobileIcon, BannerProductImg, ComputerIcon, ElectronicsIcon, GamingIcon, GroceriesIcon, HeroImage1, HouseIcon, ShirtIcon } from '@/app/constants/media';
import Image from 'next/image';

const categories = [
  { label: 'Fashion', icon: ShirtIcon },
  { label: 'Groceries', icon: GroceriesIcon },
  { label: 'Automobile', icon: AutomobileIcon },
  { label: 'Computing', icon: ComputerIcon },
  { label: 'Gaming', icon: GamingIcon },
  { label: 'House and Office', icon: HouseIcon },
  { label: 'Electronics', icon: ElectronicsIcon },
];

export default function Hero() {
  return (
    <Flex w="full" justify="center" align="flex-start" py={8} gap={6}>
      <div className="hidden md:block">
        <VStack align="flex-start" minW="200px" spacing={4}>
          <Text fontWeight="bold" fontSize="xl" mb={2}>Categories</Text>
          {categories.map((cat) => (
            <HStack key={cat.label} spacing={3}>
              <Image
                src={cat.icon}
                width={15}
                height={15}
                alt="icon"
              />
              <Text fontSize="sm">{cat.label}</Text>
            </HStack>
          ))}
        </VStack>
      </div>

      <Box flex={1} maxW="700px" h="100%" borderRadius="lg" overflow="hidden" bg="red.700" position="relative" display="flex" alignItems="center" justifyContent="center">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          style={{ width: '100%', height: '100%' }}
        >
          <SwiperSlide>
            <Image 
              src={HeroImage1} 
              alt="Nike Hero" 
              width={1000} 
              height={700}
              className='object-cover w-full h-full'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src={HeroImage1} 
              alt="Shoes" 
              width={500} 
              height={500}
              className='object-cover w-full h-full'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src={HeroImage1} 
              alt="Nike Hero 2" 
              width={500} 
              height={500}
              className='object-cover w-full h-full'
            />
          </SwiperSlide>
        </Swiper>
      </Box>

      <div className='hidden md:block bg-[color:var(--main-color)]  min-w-[250px] max-w-[270px] rounded-t-2xl font-publicSans'>
        <div className='flex items-center gap-4 p-4'>
          <p className='text-white text-2xl font-publicSans'>Latest Deals</p>
          <Badge colorScheme="yellow" borderRadius="full" px={2}>HOT</Badge>
        </div>
        <div className='bg-white pt-5 shadow-md shadow-shadow-color overflow-hidden h-full'>
          <Image
            src={BannerProductImg}
            alt="Man Anthracite" 
            width={100} 
            height={100}
            className='h-[200px] w-[250px] object-cover'
          />
          <div className='px-5 pt-3 pb-4'>
            <p className='text-base font-semibold'>Man Anthracite</p>
            <p className='line-through text-sm my-1'>NGN 18.95</p>
            <div className="flex items-center gap-5">
              <p className='text-base font-semibold'>NGN 13.95</p>
              <button className='rounded-full py-1 px-2 bg-[color:var(--main-color)]  text-white text-sm'>-25%</button>
            </div>
          </div>
        </div>
      </div>
    </Flex>
  );
}
