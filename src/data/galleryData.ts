export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  images?: string[];
  imageSrc?: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Свадьба Ани и Серёжи',
    description: 'Лёгкий светлый стиль, 50 страниц',
    category: 'Свадьбы',
    images: [
      '/wed1.JPG',
      '/wed2.JPG',
      '/wed3.JPG',
      '/wed4.JPG',
      '/wed5.JPG',
      '/wed6.JPG',
      '/wed7.JPG',
      '/wed8.JPG',
      ]
  },
  {
    id: 2,
    title: 'Свадьба Марии и Игоря',
    description: 'Романтика осеннего парка',
    category: 'Свадьбы',
    images: [
      '/wed11.jpg',
      '/wed12.jpg',
      '/wed13.jpg',
      '/wed14.jpg',
      '/wed15.jpg',
      '/wed16.jpg',
      ]
  },
  {
    id: 3,
    title: 'Свадьба Николая и Елены',
    description: 'Весенняя история любви',
    category: 'Свадьбы',
    images: [
      '/wed18.jpg',
      '/wed19.jpg',
      '/wed20.jpg',
      '/wed21.jpg',
      '/wed22.jpg',
            ]
  },
  {
    id: 4,
    title: "Baby's First Year",
    category: "Baby",
    imageSrc: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Milestone-focused baby album capturing all the special moments of the first year."
  },
  {
    id: 5,
    title: "Vintage Collection",
    category: "Vintage",
    imageSrc: "https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Restoration and preservation of vintage family photos in a classic album design."
  },
  {
    id: 6,
    title: "Anniversary Celebration",
    category: "Anniversary",
    imageSrc: "https://images.pexels.com/photos/1779492/pexels-photo-1779492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Romantic anniversary album celebrating decades of love and shared memories."
  }
];

export default galleryData;
