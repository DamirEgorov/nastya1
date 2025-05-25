export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer Martinez",
    role: "Wedding Client",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The wedding album Sarah created for us exceeded all our expectations. She captured the essence of our special day in the most beautiful way. Every time we open it, we relive those precious moments all over again.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Family Portrait Client",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Our family album is a treasured keepsake. Sarah's attention to detail and ability to tell our family's story through photos is remarkable. The quality of the album is outstanding and will last for generations.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Travel Album Client",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "I wanted a special way to commemorate my year of travel, and Sarah delivered beyond my wildest dreams. The album perfectly captures the adventure and emotion of my journey. It's like having my travels come to life on paper.",
    rating: 5
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Anniversary Gift Client",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "I surprised my wife with one of Sarah's albums for our 25th anniversary, filled with photos from our years together. The tears of joy in my wife's eyes when she opened it said it all. This gift was priceless.",
    rating: 5
  }
];

export default testimonialData;