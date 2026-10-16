// Curated, fashion-relevant photos from the Unsplash CDN (free to use).
// Swap any URL with your own AI-generated assets in /public when ready.

const base = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  // Hero — save your poster (Image 1) to /public/hero-poster.jpg to use it.
  // Until that file exists, this falls back to a colorful placeholder.
  heroModel: base("1483985988355-763728e1935b", 900),
  heroRunway: base("1490481651871-ab68de25d43d", 600),
  // Women models
  womenA: base("1469334031218-e382a71b716b", 500),
  womenB: base("1524504388940-b1c1722653e1", 500),
  womenC: base("1496747611176-843222e1e57c", 500),
  womenD: base("1539109136881-3be0616acf4b", 500),
  womenE: base("1515886657613-9f3515b0c78f", 500),
  womenF: base("1485462537746-965f33f7f6a7", 500),
  womenG: base("1492707892479-7bc8d5a4ee93", 500),
  womenH: base("1534528741775-53994a69daeb", 500),
  // Men models
  menA: base("1507003211169-0a1dd7228f2d", 500),
  menB: base("1503342217505-b0a15ec3261c", 500),
  menC: base("1488161628813-04466f872be2", 500),
  menD: base("1506794778202-cad84cf45f1d", 500),
  // Boutiques / stores
  boutiqueA: base("1441986300917-64674bd600d8", 500),
  boutiqueB: base("1539008835657-9e8e9680c956", 500),
  // Salon / beauty
  salonA: base("1560066984-138dadb4c035", 500),
  salonB: base("1522335789203-aabd1fc54bc9", 500),
  makeupA: base("1487412720507-e7ab37603c6f", 500),
  makeupB: base("1596462502278-27bfdc403348", 500),
  // Products
  shoes: base("1542291026-7eec264c27ff", 500),
  bag: base("1584917865442-de89df76afd3", 500),
  dress: base("1572804013309-59a88b7e92f1", 500),
  accessory: base("1611652022419-a9419f74343d", 500),
  // Avatars
  avatar1: base("1500648767791-00dcc994a43e", 200),
  avatar2: base("1494790108377-be9c29b29330", 200),
  avatar3: base("1527980965255-d3b416303d12", 200),
  avatar4: base("1438761681033-6461ffad8d80", 200),
};

// Branded "fashly.co — 20 November 2026" assets saved in /public.
export const local = {
  heroPoster: "/hero-poster.jpg",
  heroBanner: "/some.png", // wide pink hero — model + live-shopping collage
  showcaseRunway: "/showcase-runway.jpg", // ornate gown, purple studio
  eventHotel: "/event-hotel.jpg", // green gown at podium, hotel lobby
  eventLuxury: "/event-luxury.jpg", // navy/gold dress, marble lobby
  designerBlack: "/designer-black.jpg", // black gown, warm studio
  designerFloral: "/designer-floral.jpg", // cream floral jacket, pastel pool
  boutiquePastel: "/boutique-pastel.jpg", // pink kurta, pastel poolside
  boutiqueLilac: "/boutique-lilac.jpg", // lilac suit in boutique w/ flowers
  boutiqueLilac2: "/boutique-lilac2.jpg", // lilac suit, boutique standees
  boutiqueSage: "/boutique-sage.jpg", // sage green suit, roll-up banners
  boutiqueWine: "/boutique-wine.jpg", // wine suit, boutique banners
  everydayStore: "/everyday-store.jpg", // embroidered denim, supermarket
  communityStore: "/community-store.jpg", // embroidered top, fashly box
  liveStream: "/livestream.jpg", // live shopping shoot, ring light
  studioPink: "/studio-pink.jpg", // pink "fashly.co" boutique, LOOK FEEL SLAY
} as const;

export type ImgKey = keyof typeof img;
export type LocalImgKey = keyof typeof local;
