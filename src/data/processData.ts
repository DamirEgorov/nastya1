export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const processData: ProcessStep[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We'll discuss your vision, preferences, and the stories you want to tell through your photo album.",
    icon: "MessageSquare"
  },
  {
    id: 2,
    title: "Photo Selection",
    description: "I'll help you select the best photos that capture the essence of your memories and create a cohesive narrative.",
    icon: "Image"
  },
  {
    id: 3,
    title: "Design Concept",
    description: "Based on our consultation, I'll create a personalized design concept for your approval.",
    icon: "Palette"
  },
  {
    id: 4,
    title: "Album Creation",
    description: "Your album is handcrafted with premium materials and attention to every detail.",
    icon: "BookOpen"
  },
  {
    id: 5,
    title: "Review & Refinement",
    description: "You'll review a digital proof of your album and request any adjustments needed.",
    icon: "Edit"
  },
  {
    id: 6,
    title: "Final Delivery",
    description: "Your beautifully finished album is carefully packaged and delivered to your doorstep.",
    icon: "Package"
  }
];

export default processData;