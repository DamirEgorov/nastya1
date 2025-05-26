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
    title: "Summer Wedding Collection",
    category: "Wedding",
    imageSrc: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A handcrafted wedding album featuring elegant layouts and premium materials."
  },
  {
    id: 2,
    title: "Family Heritage",
    category: "Family",
    imageSrc: "https://images.pexels.com/photos/1974692/pexels-photo-1974692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Multi-generational family album designed to preserve precious memories for years to come."
  },
  {
    id: 3,
    title: "World Travel Memories",
    category: "Travel",
    imageSrc: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Adventure-themed travel album with custom maps and journal entries."
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
