import { PortfolioItem, ServiceItem, Testimonial } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'Cinematic Travel Vlog: Himalayan Drift',
    category: 'vlogs',
    categoryLabel: 'Cinematic Vlog / Short Film',
    subtitle: '4K Color Graded in DaVinci Resolve Studio (60 FPS)',
    description: 'Complete post-production pipeline including S-Log3 conversion, film print emulation (Kodak 2383 LUT), sound design with whooshes and ambient mountain atmosphere, speed ramps, and pacing.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    software: ['DaVinci Resolve', 'Premiere Pro', 'FilmConvert'],
    specs: {
      turnaround: '24-48 Hours',
      aspectRatio: '16:9 (4K UHD 60fps)',
      tools: 'DaVinci Resolve 19 Colorist Suite',
      clientType: 'Travel Creator (450K Subs)'
    },
    featured: true
  },
  {
    id: 'work-2',
    title: 'High-Retention Fitness & Lifestyle Viral Reel Batch',
    category: 'videos',
    categoryLabel: 'Shorts & Reels',
    subtitle: 'Kinetic Dynamic Typography & Pop Sound FX',
    description: 'Dynamic pacing, custom pop-up emojis, sound cues on every cut, zooms, motion tracking, and color punch optimized for 80%+ TikTok, Instagram Reels, and YouTube Shorts retention rates.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    software: ['CapCut Pro', 'Premiere Pro', 'After Effects'],
    specs: {
      turnaround: '24 Hours Express',
      aspectRatio: '9:16 Vertical (1080x1920)',
      tools: 'Auto-Captions, Sound Design FX',
      clientType: 'Fitness Influencer'
    },
    featured: true
  },
  {
    id: 'work-3',
    title: 'Royal Indian Wedding: Anand & Meera Teaser',
    category: 'photography',
    categoryLabel: 'Wedding & Marriage',
    subtitle: 'Emotional Storytelling & Traditional Aesthetics',
    description: 'Candid photography and cinematic teaser highlight reel capturing the vibrant Haldi, Sangeet, and Royal Mandap ceremonies. True-to-life skin tones, warm gold grading, and emotional music timing.',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    software: ['Lightroom Classic', 'Photoshop', 'DaVinci Resolve'],
    specs: {
      turnaround: '48-72 Hours',
      aspectRatio: '3:2 & 16:9 Ultra HD',
      tools: 'Sony A7IV, G-Master 85mm f/1.4',
      clientType: 'Wedding Couple & Studio'
    },
    featured: true
  },
  {
    id: 'work-4',
    title: 'Luxury Marriage Album Design (36 Spreads)',
    category: 'albums',
    categoryLabel: 'Marriage Album Design',
    subtitle: 'Premium Gloss & Velvet Photobook Spreads',
    description: 'Custom designed high-resolution 12x36 inch wedding photobook spreads. Includes skin frequency separation, jewelry shine enhancement, traditional borders, and minimalist typography.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    software: ['Adobe Photoshop', 'Indesign', 'Lightroom'],
    specs: {
      turnaround: '2-3 Days',
      aspectRatio: '12x36 in (300 DPI Print Ready)',
      tools: 'Color Correction & High-End Retouching',
      clientType: 'Bridal Studio'
    },
    featured: true
  },
  {
    id: 'work-5',
    title: 'High-CTR YouTube Thumbnails: Tech & Finance',
    category: 'thumbnails',
    categoryLabel: 'Thumbnails & Creatives',
    subtitle: 'High Click-Through Rate Visual Engineering',
    description: 'Thumbnails crafted for 12%+ CTR with 3-point contrast lighting, facial expression pop, clean bold 3D text styling, visual storytelling hooks, and vibrant color separation.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    software: ['Photoshop', 'Lightroom', 'Illustrator'],
    specs: {
      turnaround: '12-24 Hours Express',
      aspectRatio: '16:9 (1920x1080)',
      tools: 'Smart Shadows, Color Harmony',
      clientType: 'YouTube Creators (500K+ Subs)'
    },
    featured: true
  },
  {
    id: 'work-6',
    title: 'Moody Cyberpunk Short Film: "Midnight Protocol"',
    category: 'vlogs',
    categoryLabel: 'Short Film & Color Grade',
    subtitle: 'DaVinci Resolve Teal & Orange Neon Palette',
    description: 'Color grading on Arri LogC / Blackmagic RAW footage with halation, film grain, anamorphic flare highlights, and deep shadow contrast for indie short film festival submission.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    software: ['DaVinci Resolve Studio', 'After Effects'],
    specs: {
      turnaround: '3-4 Days',
      aspectRatio: '2.39:1 Anamorphic Cinema',
      tools: 'Node-based Colorist Suite',
      clientType: 'Indie Film Director'
    },
    featured: false
  },
  {
    id: 'work-7',
    title: 'Fashion & Portrait Editorial: Golden Hour Dusk',
    category: 'photography',
    categoryLabel: 'Portrait Photography',
    subtitle: 'Natural Light & Studio Strobe Blend',
    description: 'Urban outdoor portrait session focusing on dynamic composition, creamy bokeh, rim lighting, and subtle magazine retouching preserving natural skin textures.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    software: ['Lightroom Classic', 'Capture One'],
    specs: {
      turnaround: '24 Hours',
      aspectRatio: '4:5 (Instagram Portrait)',
      tools: 'Canon EOS R6 + 50mm f/1.2',
      clientType: 'Model Portfolio'
    },
    featured: false
  },
  {
    id: 'work-8',
    title: 'Podcast Highlights & Talking Head Shorts',
    category: 'videos',
    categoryLabel: 'Shorts & Reels',
    subtitle: 'Multi-Cam Switching & Clean Sound Levelling',
    description: 'Fast-paced podcast video editing with multi-cam angle cuts, animated soundwaves, speaker spotlights, high-energy B-roll overlays, and crisp sound mastering.',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    software: ['Premiere Pro', 'DaVinci Resolve', 'Audition'],
    specs: {
      turnaround: '24 Hours Express',
      aspectRatio: '9:16 Vertical HD',
      tools: 'Multi-Cam Editing, Audio Denoising',
      clientType: 'Podcast Host'
    },
    featured: false
  },
  {
    id: 'work-9',
    title: 'Traditional South Indian Marriage Photobook',
    category: 'albums',
    categoryLabel: 'Marriage Album Design',
    subtitle: 'Rich Silk Textures & Gold Embossing Spreads',
    description: 'A 50-spread heritage wedding album designed with symmetry, temple architecture backdrop integration, gold foil lettering accents, and flawless color correction.',
    imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80',
    software: ['Adobe Photoshop', 'Lightroom'],
    specs: {
      turnaround: '3-4 Days',
      aspectRatio: '14x40 in Panoramic (300 DPI)',
      tools: 'Photoshop Actions & Manual Retouch',
      clientType: 'Wedding Photography Agency'
    },
    featured: false
  }
];

export const colorGradingComparison = [
  {
    id: 'cg-1',
    title: 'Cinematic Mountain Sunrise (S-Log3 to Film Look)',
    camera: 'Sony FX3 - S-Log3 10-bit 4:2:2',
    gradedWith: 'DaVinci Resolve Studio (Kodak 2383 Emulation)',
    beforeImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=40&sat=-80&con=-40', // simulated flat log
    afterImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=90', // rich golden grade
    highlight: 'Recovered highlight rolloff, warm amber sky tones, and rich pine greens.'
  },
  {
    id: 'cg-2',
    title: 'Wedding Portrait Glow & Skin Tone Harmony',
    camera: 'Canon R5 - C-Log2',
    gradedWith: 'DaVinci Resolve Color Wheels & Frequency Separation',
    beforeImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=40&sat=-75&con=-30',
    afterImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=90',
    highlight: 'Clean Indian skin tones, vibrant bridal reds, and soft glowing bokeh.'
  },
  {
    id: 'cg-3',
    title: 'Moody Night Urban Cinema Look',
    camera: 'Blackmagic Pocket 6K - BRAW',
    gradedWith: 'DaVinci Resolve Fusion & Custom Teal-Orange Curve',
    beforeImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=40&sat=-85&con=-50',
    afterImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=90',
    highlight: 'Deep inky blacks without crushing shadow detail, vivid neon accents.'
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-video',
    title: 'Freelance Video Editing',
    subtitle: 'Shorts, Reels, Vlogs & Short Films',
    description: 'Transform raw footage into viral, cinematic stories. Mastered using DaVinci Resolve, Premiere Pro, and CapCut with engaging pacing, sound effects, dynamic captions, and motion graphics.',
    features: [
      'YouTube Shorts, TikTok & IG Reels (Retention-focused)',
      'Cinematic Travel Vlogs & YouTube Long-form',
      'Indie Short Films & Documentary Edits',
      'Dynamic Subtitles & Kinetic Typography',
      'Custom Sound Design & Mixed Audio FX',
      '4K 60fps & Vertical 9:16 Exports'
    ],
    software: ['DaVinci Resolve', 'Premiere Pro', 'CapCut Pro', 'After Effects'],
    iconName: 'Film',
    startingPrice: '₹1,200',
    turnaround: '24 - 48 Hours',
    badge: 'Most Popular'
  },
  {
    id: 'srv-photo',
    title: 'Professional Photography',
    subtitle: 'Portraits, Events, Weddings & Commercial',
    description: 'Capturing unforgettable moments with creative composition, studio lighting, and genuine human emotion. Every click is tailored to tell your unique story.',
    features: [
      'Outdoor & Studio Fashion Portraits',
      'Traditional & Candid Wedding Photography',
      'Birthday, Anniversaries & Cultural Events',
      'Commercial Brand & Product Photography',
      'High-Resolution Raw Deliverables & Edited Previews'
    ],
    software: ['Lightroom Classic', 'Capture One', 'Photoshop'],
    iconName: 'Camera',
    startingPrice: '₹3,500',
    turnaround: '2 - 3 Days',
    badge: 'Creative Passion'
  },
  {
    id: 'srv-color',
    title: 'DaVinci Resolve Color Grading',
    subtitle: 'S-Log / D-Log / RAW Colorist Service',
    description: 'Turn flat, washed-out log camera footage into breathtaking Hollywood-level visuals. Proper color management, film stock emulation, and skin-tone perfection.',
    features: [
      'S-Log3, C-Log, D-Log, V-Log & Apple ProRes LOG conversion',
      'Shot-to-Shot Color Matching & Balancing',
      'Custom Film Emulation (Kodak 2383 & Fuji Grain)',
      'Precision Skin Tone Protection & Softening',
      'Day-for-Night & Stylized Moody Grading'
    ],
    software: ['DaVinci Resolve Studio 19', 'Dehancer Pro', 'FilmConvert'],
    iconName: 'Sparkles',
    startingPrice: '₹1,800',
    turnaround: '24 - 48 Hours',
    badge: 'Pro Quality'
  },
  {
    id: 'srv-album',
    title: 'Marriage Album & Photobook Design',
    subtitle: '12x36 & Panoramic High-End Spreads',
    description: 'Luxury wedding photobook and marriage album page layouts designed with elegant negative space, photo retouching, color coordination, and print-ready 300 DPI exports.',
    features: [
      '12x36, 12x30, 10x24 & Custom Spread Formats',
      'High-End Skin Retouching & Jewelry Shine',
      'Minimalist, Royal & Contemporary Themes',
      'Print-ready PDF / TIFF files for any album lab',
      'Fast Review & Revision Cycles'
    ],
    software: ['Adobe Photoshop', 'Lightroom Classic', 'Indesign'],
    iconName: 'BookOpen',
    startingPrice: '₹2,800',
    turnaround: '3 - 4 Days',
    badge: 'High Demand'
  },
  {
    id: 'srv-design',
    title: 'YouTube Thumbnails & Social Creatives',
    subtitle: 'Click-Worthy Visuals & Brand Graphics',
    description: 'Eye-catching graphic design for content creators, influencers, and businesses. Designed to stand out on mobile screens and drive clicks and engagement.',
    features: [
      'High CTR YouTube Thumbnails (Tech, Gaming, Vlogs, Finance)',
      'Social Media Flyers, Event Posters & Banners',
      'Instagram Carousel Spreads & Story Creatives',
      'Vector Logos & Brand Identity Graphics',
      'Source PSD Files & Ultra HD JPEGs Included'
    ],
    software: ['Photoshop', 'Illustrator', 'Lightroom'],
    iconName: 'Image',
    startingPrice: '₹800',
    turnaround: '12 - 24 Hours',
    badge: 'Quick Delivery'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Vikram Joshi',
    role: 'Tech & Lifestyle YouTuber (180K Subs)',
    project: 'Weekly YouTube Long-form & 15 Shorts',
    content: 'Mahi transformed my channel pacing! The DaVinci Resolve color grading is top notch and the Shorts sound design got my retention from 45% up to 78%. Super quick turnaround and very budget friendly in rupees.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    clientName: 'Ananya & Karthik Reddy',
    role: 'Newly Married Couple (Hyderabad)',
    project: 'Wedding Album (45 Spreads) & Cinematic Teaser',
    content: 'Our marriage album designed by Mahi Clickz looks like a Vogue magazine! Every page is balanced with beautiful royal tones, and the 2-minute video teaser made our whole family emotional.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    clientName: 'Devansh Roy',
    role: 'Indie Film Director',
    project: 'Short Film Color Grading & Teaser Cut',
    content: 'Mahi understands color theory and film tone deeply. Handled our flat log footage in DaVinci Resolve with so much finesse. For the budget and speed, it is unmatched quality in the freelance market.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-4',
    clientName: 'Pooja Sharma',
    role: 'Travel & Lifestyle Creator (95K Followers)',
    project: '4K Cinematic Travel Vlogs (Ladakh & Bali)',
    content: 'The pacing, kinetic captions, and seamless speed ramps are unbelievable. Delivered complete 4K master files in 48 hours without needing any rework. Mahi is my permanent editor now!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-5',
    clientName: 'Rohit Kulkarni',
    role: 'Commercial Brand Manager',
    project: 'Social Ads Campaign & High-CTR Thumbnails',
    content: 'Our campaign CTR jumped by 34% with Mahi’s thumbnail design and punchy 9:16 short ads. The workflow was super smooth and direct over WhatsApp with exact INR milestone billing.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-6',
    clientName: 'Sneha & Arun Varma',
    role: 'Bridal Studio Owners (Bangalore)',
    project: '12x36 Wedding Photobook Suite & Highlights',
    content: 'The skin tone frequency separation and gold jewelry highlight pop are perfection. Our bridal clients are in love with the physical albums. Outstanding craftsmanship at affordable Indian rates.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  }
];

export const packageTiers = [
  {
    name: 'Starter Creator Pack',
    target: 'Reels, Shorts & Thumbnails',
    price: '₹3,200',
    turnaround: '24 Hours Express',
    description: 'Perfect for creators looking to consistently publish high-retention vertical content.',
    includes: [
      '5 Viral Shorts / Reels (with sound FX & subtitles)',
      '2 High-CTR YouTube Thumbnails',
      'Fast 24-Hour Turnaround',
      'DaVinci Resolve / CapCut Color Grading',
      '2 Rounds of Quick Revisions'
    ],
    recommended: false
  },
  {
    name: 'Pro Creator & Storyteller',
    target: 'Full Vlogs & Short Films',
    price: '₹7,500',
    turnaround: '48 Hours Delivery',
    description: 'Complete post-production for YouTube videos, travel vlogs, brand stories, or short films.',
    includes: [
      '1 Full Cinematic Video / Vlog (up to 15 min)',
      'Complete DaVinci Resolve Color Grade',
      '3 High-Energy Short Video Cutdowns',
      'Sound Design, EQ & Noise Reduction',
      '3 High-CTR Custom Thumbnails',
      'Unlimited Minor Revisions'
    ],
    recommended: true
  },
  {
    name: 'Royal Wedding & Album Bundle',
    target: 'Marriage Photography & Album Spreads',
    price: '₹12,500',
    turnaround: '3-4 Days Delivery',
    description: 'Luxury design for marriage albums, photo retouching, and teaser video for couples and studios.',
    includes: [
      '35-40 Custom Designed Marriage Album Spreads',
      'Print-ready 12x36 300 DPI layout files',
      'Complete skin retouching & portrait enhancement',
      '1 Cinematic Wedding Highlight Video (2-3 mins)',
      '10 Instagram Teaser Photos with Color Tones'
    ],
    recommended: false
  }
];
