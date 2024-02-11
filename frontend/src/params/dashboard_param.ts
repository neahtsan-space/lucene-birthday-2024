export const DASHBOARD_TITLE = 'Happy Lucene Day 2024';

// Dashboard img
export const DASHBOARD_IMG_1 = '/dashboard/1.jpg';
export const DASHBOARD_IMG_2 = '/dashboard/2.jpg';
export const DASHBOARD_IMG_3 = '/dashboard/3.jpg';
export const DASHBOARD_IMG_4 = '/dashboard/4.jpg';
export const DASHBOARD_IMG_5 = '/dashboard/5.jpg';
export const DASHBOARD_IMG_6 = '/dashboard/6.jpg';
export const DASHBOARD_IMG_7 = '/dashboard/7.jpg';

// Dashboard img description
export const DASHBOARD_IMG_1_DESC = 'Mock Image 1 '
export const DASHBOARD_IMG_2_DESC = 'Mock Image 2 '
export const DASHBOARD_IMG_3_DESC = 'Mock Image 3 '
export const DASHBOARD_IMG_4_DESC = 'Mock Image 4 '
export const DASHBOARD_IMG_5_DESC = 'Mock Image 5 '
export const DASHBOARD_IMG_6_DESC = 'Mock Image 6 '
export const DASHBOARD_IMG_7_DESC = 'Mock Image 7 '

// Dashboard total img (picture name must be 1.jpg, 2.jpg, 3.jpg, ... n.jpg)
const DASHBOARD_TOTAL_IMG = 7;


// Don't have to change anything below this line
const createDashboardImages = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const number = i + 1; 
      return {
        src: `/dashboard/${number}.jpg`,
        alt: `Image ${number}`,
        description: `Mock Image ${number}`
      };
    });
  };
  
  export const dashboardImages = createDashboardImages(DASHBOARD_TOTAL_IMG);

