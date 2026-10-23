export type Solution = {
  slug: "stellar" | "atmos" | "cosmic";
  name: string;
  subtitle: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  capabilities: { title: string; description: string }[];
  note?: string;
  heroSummary?: { kicker: string; paragraphs: string[] };
  diffuserGallery?: { title: string; src: string; alt: string; width: number; height: number }[];
  fragranceNotes?: { description: string; cards: { name: string; family: string; notes: string; image: string; alt: string }[] };
};

export const solutions: Record<Solution["slug"], Solution> = {
  stellar: {
    slug: "stellar",
    name: "Stellar",
    subtitle: "Technical Services",
    title: "Water quality, thoughtfully managed.",
    intro: "Explore filtration, purification and water quality solutions shaped around your building, people and process.",
    image: "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Clear water moving through a modern water feature",
    capabilities: [
      { title: "Filtration", description: "Explore systems selected to suit your water source, application and site requirements." },
      { title: "Purification", description: "Consider treatment approaches that support the water quality goals of your space." },
      { title: "Water quality", description: "Get guidance on practical solutions for monitoring and maintaining water quality." },
    ],
  },
  atmos: {
    slug: "atmos",
    name: "Atmos",
    subtitle: "Nano Bubble Solutions",
    title: "A new perspective on pool water.",
    intro: "Discover nanobubble technology for swimming pools, with system options considered alongside your pool design and existing water care routine.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Bright blue swimming pool in a landscaped garden",
    capabilities: [
      { title: "Nanobubble technology", description: "Learn how fine bubbles can be introduced into a pool system as part of a considered water management approach." },
      { title: "Pool integration", description: "Explore equipment options and how they may fit with your pool’s circulation and filtration setup." },
      { title: "Balanced water care", description: "Discuss potential chemical use considerations alongside regular testing and appropriate disinfection." },
    ],
    note: "Nanobubble technology does not replace appropriate pool disinfection. Water treatment and chemical requirements depend on the specific installation and must follow applicable guidance.",
  },
  cosmic: {
    slug: "cosmic",
    name: "Cosmic",
    subtitle: "Scent Diffuser",
    title: "A signature atmosphere for every space.",
    intro: "Create a more welcoming feel with scent diffuser systems selected for homes, offices, hotels and commercial environments.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Warm, refined interior with natural light and comfortable seating",
    capabilities: [
      { title: "For the home", description: "Bring a subtle, considered scent experience to living spaces and residences." },
      { title: "For hospitality", description: "Create a consistent welcome across hotel lobbies, guest areas and shared spaces." },
      { title: "For work and retail", description: "Explore diffuser options for offices, showrooms and other commercial environments." },
    ],
    heroSummary: {
      kicker: "About Cosmic",
      paragraphs: [
        "Cosmic brings scent marketing into the experience of a space. A distinctive fragrance can reinforce your brand identity, create a warm welcome and help customers form positive memories of the places they visit.",
        "We consider your brand story, your customers and the feeling you want to create, then pair a tailored fragrance with a diffuser suited to your environment. The result is a consistent scent identity that makes your space more recognisable and memorable.",
        "Fragrance oils are concentrated blends of volatile aroma compounds, often inspired by botanicals. Because smell is closely connected to emotion and memory, a carefully chosen scent can shape how a space feels long after someone leaves.",
      ],
    },
    diffuserGallery: [
      { title: "Small area diffusers", src: "/cosmic/diffusers/small.jpg", alt: "Compact aroma diffusers styled in a warm, neutral home interior", width: 1878, height: 839 },
      { title: "Medium area diffusers", src: "/cosmic/diffusers/medium.jpg", alt: "Cylinder and tabletop aroma diffusers in a refined hotel lounge", width: 1878, height: 839 },
      { title: "Large area diffusers", src: "/cosmic/diffusers/large.jpg", alt: "Commercial scent diffuser units in an elegant hotel lobby", width: 1878, height: 839 },
    ],
    fragranceNotes: {
      description: "Explore fresh, floral, woody and classic fragrance profiles. We can help match a scent to the mood and identity you want your space to express.",
      cards: [
        { name: "Water Lily", family: "Fresh floral", notes: "Lotus · water notes · ozone", image: "/cosmic/fragrance/water-lily.jpg", alt: "Pink water lily floating on water" },
        { name: "Jasmine", family: "Fresh floral", notes: "Jasmine · tuberose · lily of the valley", image: "/cosmic/fragrance/jasmine.jpg", alt: "White jasmine blossoms and glossy leaves" },
        { name: "Rose Garden", family: "Floral", notes: "Grapefruit · blackberry · rose · violet · white musk", image: "/cosmic/fragrance/rose-garden.jpg", alt: "Red rose with blackberries and petals" },
        { name: "Ocean", family: "Fresh", notes: "Cyclamen · rose · citrus · pear · fruit", image: "/cosmic/fragrance/ocean.jpg", alt: "Bright citrus peel splashing through water" },
        { name: "Classic Cologne", family: "Classic", notes: "Bergamot · saffron · rose · geranium · patchouli · leather", image: "/cosmic/fragrance/classic-cologne.jpg", alt: "Bergamot, saffron and dark fragrance woods" },
        { name: "Lavender", family: "Floral", notes: "Lavender · soft herbal notes", image: "/cosmic/fragrance/lavender.jpg", alt: "Purple lavender flowers" },
        { name: "Eaglewood", family: "Woody", notes: "Rose · lily of the valley · cedar · musk", image: "/cosmic/fragrance/eaglewood.jpg", alt: "Textured eaglewood chips" },
        { name: "Shangrila White Tea", family: "Fresh floral", notes: "Rose · lily of the valley · cedar · musk", image: "/cosmic/fragrance/white-tea.jpg", alt: "Delicate white tea leaves with jasmine" },
        { name: "Dior", family: "Fresh fruit", notes: "Bergamot · apple · rose · jasmine · orange blossom · vanilla", image: "/cosmic/fragrance/dior.jpg", alt: "Apple, rose and jasmine blossoms" },
        { name: "New White Tea", family: "Fresh fruit", notes: "Bergamot · apple · rose · jasmine · orange blossom · musk", image: "/cosmic/fragrance/new-white-tea.jpg", alt: "Bergamot, rose and pale blossoms" },
        { name: "Ginger", family: "Floral", notes: "Citrus · ginger · woody incense", image: "/cosmic/fragrance/ginger.jpg", alt: "Ginger root with citrus slices" },
        { name: "Wishing Elf", family: "Floral", notes: "Ice flower · hawthorne · bergamot · vanilla · white amber", image: "/cosmic/fragrance/wishing-elf.jpg", alt: "Vanilla pods and pale blossoms with a violet flower" },
      ],
    },
  },
};
