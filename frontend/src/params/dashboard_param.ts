export const DASHBOARD_TITLE = 'Happy Lucene Day 2024';
export const EMOJI_DASHBOARD_TITLE = '💕'

export const DASHBOARD_NAVIGATION_COLOR = '#000';
export const DASHBOARD_PAGINATION_COLOR = '#fff';


// Dashboard img
export const DASHBOARD_IMG_1 = '/dashboard/1.webp';
export const DASHBOARD_IMG_2 = '/dashboard/2.webp';
export const DASHBOARD_IMG_3 = '/dashboard/3.webp';
export const DASHBOARD_IMG_4 = '/dashboard/4.webp';
export const DASHBOARD_IMG_5 = '/dashboard/5.webp';
export const DASHBOARD_IMG_6 = '/dashboard/6.webp';
export const DASHBOARD_IMG_7 = '/dashboard/7.webp';

// Dashboard img description
export const DASHBOARD_IMG_1_DESC = 'ลุ้นดวงกับเน่~ กิจกรรมท้าชะตา ฟ้าลิขิต คนที่ถูกขอให้เปนช้านนนน'
export const DASHBOARD_IMG_2_DESC = 'ไลฟ์ Party 3 ไลฟ์ติดอย่างนั้นเหรอ!!'
export const DASHBOARD_IMG_3_DESC = 'Lucene In TAIPEI!! (2024 Taipei Book Exhibition)'
export const DASHBOARD_IMG_4_DESC = 'ไลฟ์ valentine กับเน่ ดูกันอ๊ะยาง ดูกันอ๊ะยางงง'
export const DASHBOARD_IMG_5_DESC = 'เหยยย แบบนี้จะพลาดได้หรือไม่~'
export const DASHBOARD_IMG_6_DESC = 'ขอบคุณคุณ F สำหรับงาน ART น่ารักๆนะครับ!'
export const DASHBOARD_IMG_7_DESC = ''

export const ENABLE_CAROUSEL_THUMBS = false;

// Dashboard total img (picture name must be 1.webp, 2.webp, 3.webp, ... n.webp)
const DASHBOARD_TOTAL_IMG = 6;


// Don't have to change anything below this line
const allDashboardDesc = [
  DASHBOARD_IMG_1_DESC,
  DASHBOARD_IMG_2_DESC,
  DASHBOARD_IMG_3_DESC,
  DASHBOARD_IMG_4_DESC,
  DASHBOARD_IMG_5_DESC,
  DASHBOARD_IMG_6_DESC,
  DASHBOARD_IMG_7_DESC,
];

const createDashboardImages = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const number = i + 1; 
      return {
        src: `/dashboard/${number}.webp`,
        alt: `Image ${number}`,
        description: allDashboardDesc[i]
      };
    });
  };
  
  export const dashboardImages = createDashboardImages(DASHBOARD_TOTAL_IMG);

