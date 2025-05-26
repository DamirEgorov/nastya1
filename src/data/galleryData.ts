export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  {
  id: 1,
  images: [
    '/wed1.jpg',   // обложка
    '/wed2.jpg',   // первая страница
    '/wed3.jpg',   // вторая страница
    '/wed4.jpg',   // третья страница
    '/wed5.jpg',   // четвертая страница
    '/wed6.jpg',   // пятая страница
    '/wed7.jpg',   // шестая страница
    '/wed8.jpg'    // седьмая страница
  ],
  title: 'Свадьба Игоря и Насти',
  description: 'Три странички из свадебного альбома',
  category: 'Свадьбы'
  },
  {
    id: 2,
    imageSrc: '/wedding2.jpg',
    title: 'Роман и Юля',
    description: 'Фотокнига в светлых тонах',
    category: 'Свадьбы'
  },
  {
    id: 3,
    title: "World Travel Memories",
    category: "Путешествия",
    imageSrc: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Adventure-themed travel album with custom maps and journal entries."
  },
  {
    id: 4,
    title: "Baby's First Year",
    category: "Ребенок",
    imageSrc: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Milestone-focused baby album capturing all the special moments of the first year."
  },
  {
    id: 5,
    title: "Vintage Collection",
    category: "Ретро",
    imageSrc: "https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Restoration and preservation of vintage family photos in a classic album design."
  },
  {
    id: 6,
    title: "Anniversary Celebration",
    category: "Родители",
    imageSrc: "https://images.pexels.com/photos/1779492/pexels-photo-1779492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Romantic anniversary album celebrating decades of love and shared memories."
  }
];

export default galleryData;
