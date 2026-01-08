import {
  Leaf,
  Droplets,
  Clock,
  Award,
  Shield,
  Heart
} from "lucide-react";

const CONFIG = {
  brand: {
    name: "Morning Heaven Tea",
    tagline: "Start Your Day in Heaven",
    logo: "/navlogo.png",
    navlogo:"/navlogo.png",
    heroLogo:"/herologo.png",
    heroBackground:
      "linear-gradient(135deg, #2d5016 0%, #4a7c2c 50%, #6b9d3e 100%)",
  },

  about: {
  title: "Our Story",
  description:
    "Morning Heaven Tea was founded with a simple belief — every day deserves a perfect beginning. Born in the heart of Assam, our brand focuses on delivering pure, high-quality tea sourced directly from trusted gardens.",

  highlight:
    "As a growing tea brand, we work closely with experienced tea growers and processors to bring you fresh, strong, and aromatic tea. Every batch is carefully selected, traditionally processed, and packed to preserve its natural flavor and freshness.",

  stats: [
    { value: "Assam", label: "Origin" },
    { value: "Premium", label: "Quality Focus" },
    { value: "100%", label: "Natural Tea" }
  ]
},


 products: [
  {
    id: 1,
    name: "Morning Heaven Premium Tea",
    description:
      "Our signature Assam tea crafted for a strong, refreshing cup.",
    image: "/teapacket.jpeg",
    sizes: ["1 kg", "500 g", "250 g"],
    features: ["Strong Taste", "Fresh Aroma"],
    comingSoon: false
  },
  {
  id: 2,
  name: "New Flavours Coming Soon",
  description:
    "We’re working on exciting new tea blends with traditional spices and refreshing notes. Crafted with the same quality and care you love.",

  image: "🌿",

  features: [
    "Masala Chai",
    "Ginger Tea",
    "Elaichi Blend",
    "More to Come"
  ],

  comingSoon: true
}

],


  features: [
    {
      icon: Leaf,
      title: "Premium Quality",
      description:
        "Handpicked tea leaves from the finest estates, ensuring superior taste and aroma in every cup."
    },
    {
      icon: Droplets,
      title: "Strong Taste",
      description:
        "Rich, full-bodied flavor that awakens your senses and energizes your morning routine."
    },
    {
      icon: Clock,
      title: "Fresh Packing",
      description:
        "Sealed at source to lock in freshness. From our gardens to your cup in perfect condition."
    },
    {
      icon: Award,
      title: "Certified Quality",
      description:
        "Quality tested and certified. Meeting international standards for purity and excellence."
    },
    {
      icon: Shield,
      title: "100% Natural",
      description:
        "No artificial flavors or preservatives. Just pure, natural tea goodness in every packet."
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description:
        "Rich in antioxidants and natural compounds that support your overall health and wellness."
    }
  ],

  contact: {
    phone: "+91 6000831233",
    email: "morningheaven02@gmail.com",
    address:
      "Biswanath Chariali,Assam, India"
  }
};

export default CONFIG;
