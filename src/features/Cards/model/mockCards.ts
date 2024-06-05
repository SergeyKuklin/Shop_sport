import NikeDefyAllDay_1 from '../image/Nike_Defy_All_Day_black.png';
import NikeVarsityRoyal_1 from '../image/Nike_Varsity_Royal_blue.png';
import NikeAirMaxTWSE_1 from '../image/Nike_Air_Max_TW_SE_white.png';
import NikeACGShirt_1 from '../image/Nike_AC_T_shirt.png';
import NikeSocks_1 from '../image/Nike_socks_white.png';
import JordanSShot_1 from '../image/Jordan_sweatshot_black.png';
import { Card } from "features/shared/types/card";

export const mockCards: Card [] = [
{
    id: 1,
    section: 'sneakers',
    pagination: 'Лучшая цена',
    name: 'Nike Defy All Day',
    coverImage: NikeDefyAllDay_1,
    image_1: '',
    fullPrice: 12990,
    currency: 32,
    salePrice: 9000,
  },
  {
    id: 2,
    section: 'sneakers',
    pagination: 'Хит сезона',
    name: 'Nike Varsity Royal',
    coverImage: NikeVarsityRoyal_1,
    image_1: '',
    fullPrice: 22990,
    currency: 17,
    salePrice: 12000,
  },
  {
    id: 3,
    section: 'sneakers',
    pagination: 'Топ продаж',
    name: 'Nike Air Max TW SE',
    coverImage: NikeAirMaxTWSE_1,
    image_1: '',
    fullPrice: 12990,
    currency: 12,
    salePrice: 10000,
  },
  {
    id: 4,
    section: 'shirt',
    pagination: '',
    name: 'Футболка Nike ACG',
    coverImage: NikeACGShirt_1,
    image_1: '',
    fullPrice: 12990,
    currency: 12,
    salePrice: 10000,
  },
  {
    id: 5,
    section: 'socks',
    pagination: 'Лучшая цена',
    name: 'Носки Nike',
    coverImage: NikeSocks_1,
    image_1: '',
    fullPrice: 12990,
    currency: 12,
    salePrice: 10000,
  },
  {
    id: 6,
    section: 'sweatshot',
    pagination: 'Хит сезона',
    name: 'Толстовка Jordan',
    coverImage: JordanSShot_1,
    image_1: '',
    fullPrice: 12990,
    currency: 12,
    salePrice: 10000,
  },
];