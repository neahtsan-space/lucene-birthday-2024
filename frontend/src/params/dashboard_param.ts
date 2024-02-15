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
export const DASHBOARD_IMG_1_DESC = 'Mock Image 1 '
export const DASHBOARD_IMG_2_DESC = 'Mock Image 2 '
export const DASHBOARD_IMG_3_DESC = 'Mock Image 3 '
export const DASHBOARD_IMG_4_DESC = 'Mock Image 4 '
export const DASHBOARD_IMG_5_DESC = 'Mock Image 5 '
export const DASHBOARD_IMG_6_DESC = 'Mock Image 6 '
export const DASHBOARD_IMG_7_DESC = 'Mock Image 7 '

export const ENABLE_CAROUSEL_THUMBS = false;

// Dashboard total img (picture name must be 1.webp, 2.webp, 3.webp, ... n.webp)
const DASHBOARD_TOTAL_IMG = 7;


// Don't have to change anything below this line
const createDashboardImages = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const number = i + 1; 
      return {
        src: `/dashboard/${number}.webp`,
        alt: `Image ${number}`,
        description: `Mock Image ${number}`
      };
    });
  };
  
  export const dashboardImages = createDashboardImages(DASHBOARD_TOTAL_IMG);

