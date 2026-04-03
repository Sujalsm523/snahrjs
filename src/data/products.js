export const products = [
  {
    id: "hearaa",
    name: "HEARANA",
    tagline: "Fresh Energy",
    description:
      "Fresh, vibrant, and energizing — HEARANA captures the essence of nature in a bottle. The crisp green tones reflect a refreshing blend of herbal and citrus notes, designed for everyday confidence.",
    price: 89,
    image: "/bottles/img1.png",
    notes: {
      top: ["Jasmine"],
      heart: ["Ylang Ylang"],
      base: ["Geranium"],
    },
    featured: true,
  },
  {
    id: "solmani",
    name: "SOLMANI",
    tagline: "Golden Warmth",
    description:
      "Warm, radiant, and inviting — SOLMANI is a fragrance that glows with elegance. The golden-yellow essence hints at rich floral and subtle woody undertones, creating a balanced and comforting scent.",
    price: 94,
    image: "/bottles/img2.png",
    notes: {
      top: ["Lemon"],
      heart: ["Cedarwood", "Juniper"],
      base: ["Ginger", "Lemongrass"],
    },
    featured: true,
  },
  {
    id: "thirjna",
    name: "THIRJNA",
    tagline: "Ocean Depth",
    description:
      "Cool, bold, and sophisticated — THIRJNA delivers a refreshing aquatic experience. Its deep teal hue reflects a blend of oceanic freshness and smooth aromatic notes.",
    price: 99,
    image: "/bottles/img5.png",
    notes: {
      top: ["Rosemary"],
      heart: ["Cedarwood"],
      base: ["Clary Sage", "Patchouli"],
    },
    featured: true,
  },
  {
    id: "croasra",
    name: "CROASRA",
    tagline: "Mystic Elegance",
    description:
      "Mysterious, deep, and captivating — CROASRA embodies elegance with intensity. The rich purple tone symbolizes a fusion of exotic florals and sensual musky notes.",
    price: 119,
    image: "/bottles/img6.png",
    notes: {
      top: ["Frankincense"],
      heart: ["Rosewood"],
      base: ["Myrrh", "Sandalwood", "Lavender"],
    },
    featured: true,
  },
  {
    id: "rodhara",
    name: "RODHARA",
    tagline: "Bold Passion",
    description:
      "Passionate, powerful, and unforgettable — RODHARA is a statement fragrance. The intense red hue represents a rich blend of spicy and sweet notes, designed to stand out.",
    price: 109,
    image: "/bottles/img7.png",
    notes: {
      top: ["Vetiver"],
      heart: ["Frankincense"],
      base: ["Myrrh", "Patchouli", "Black Pepper"],
    },
    featured: true,
  },
  {
    id: "sacisth",
    name: "SACISTH",
    tagline: "Timeless Luxury",
    description:
      "Classic, rich, and timeless — SACISTH reflects pure luxury. The deep golden tone hints at warm amber and woody accords, creating a sophisticated and long-lasting fragrance.",
    price: 129,
    image: "/bottles/img4.png",
    notes: {
      top: ["Rose"],
      heart: ["Patchouli"],
      base: ["Orange", "Clary Sage"],
    },
    featured: false,
  },
  {
    id: "troudha",
    name: "TROUDHA",
    tagline: "Balanced Freshness",
    description:
      "Smooth, refined, and modern — TROUDHA blends freshness with depth. Its unique tone represents a fusion of cool aquatic and earthy notes, offering a balanced and versatile fragrance.",
    price: 95,
    image: "/bottles/img3.png",
    notes: {
      top: ["Chamomile"],
      heart: ["Peppermint"],
      base: ["Cypress", "Bergamot"],
    },
    featured: false,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
