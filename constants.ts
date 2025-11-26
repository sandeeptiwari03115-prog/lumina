import { Book, Subject, StoreItem, Question } from './types';

export const FEATURED_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Cosmos & Chaos',
    author: 'Dr. A. Einstein',
    category: 'Physics',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=600',
    description: 'A deep dive into the mysteries of the universe, from quantum foam to black holes.',
    rating: 4.8
  },
  {
    id: '2',
    title: 'The Code of Life',
    author: 'Sarah J. Helix',
    category: 'Biology',
    price: 24.50,
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=600',
    description: 'Understanding genetics and the future of biotechnology in the modern world.',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Ancient Civilizations',
    author: 'Marcus Aurelius II',
    category: 'History',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80&w=600',
    description: 'Uncover the secrets of lost empires and how they shaped our current society.',
    rating: 4.5
  },
  {
    id: '4',
    title: 'Algorithmic Thinking',
    author: 'Grace Hopper',
    category: 'Computer Science',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    description: 'Master the art of problem-solving through code and logic.',
    rating: 4.7
  }
];

export const KNOWLEDGE_BOOKS: Book[] = [
  {
    id: '5',
    title: 'Philosophy of Mind',
    author: 'R. Descartes',
    category: 'Philosophy',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600',
    description: 'Exploring consciousness and existence.',
    rating: 4.6
  },
  {
    id: '6',
    title: 'Modern Economics',
    author: 'Adam Smith Jr.',
    category: 'Economics',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=600',
    description: 'Understanding markets in the digital age.',
    rating: 4.4
  },
    {
    id: '7',
    title: 'Digital Art Mastery',
    author: 'L. Da Vinci',
    category: 'Arts',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
    description: 'Techniques for the modern digital artist.',
    rating: 4.9
  },
  {
    id: '8',
    title: 'Sustainable Future',
    author: 'Greta T.',
    category: 'Environmental Science',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600',
    description: 'Strategies for a greener planet.',
    rating: 4.8
  }
];

export const SUBJECTS: Subject[] = [
  { 
    id: 'math', 
    name: 'Mathematics', 
    icon: 'Calculator', 
    description: 'Algebra, Calculus, Geometry', 
    color: 'bg-blue-100 text-blue-600',
    chapters: [
      {
        id: 'm1', number: 1, title: 'Numericals & Number Systems', 
        description: 'Introduction to Real, Integers, and Complex numbers.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
        notes: 'Numericals form the foundation of mathematics. We begin with the Real Number system, which includes rational and irrational numbers. Key concepts include: 1) The Fundamental Theorem of Arithmetic, which states every integer > 1 is either prime or the product of primes. 2) Euclidean division lemma. Practice problems often involve finding HCF and LCM.'
      },
      {
        id: 'm2', number: 2, title: 'Algebraic Expressions', 
        description: 'Variables, coefficients, and polynomials.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800', 
        notes: 'Algebra allows us to generalize arithmetic operations. A polynomial is an expression consisting of variables and coefficients. Learn to factorize quadratics using the splitting the middle term method and the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a.'
      },
      {
        id: 'm3', number: 3, title: 'Geometry & Shapes', 
        description: 'Euclidean geometry, lines, and angles.',
        image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800',
        notes: 'Geometry explores spatial relationships. In this chapter, we cover the properties of triangles, circles, and quadrilaterals. Remember the Pythagorean theorem (a² + b² = c²) for right-angled triangles. Similarity and Congruence are distinct concepts: Congruent shapes are identical, while similar shapes share the same proportions.'
      },
      {
        id: 'm4', number: 4, title: 'Trigonometry', 
        description: 'Sine, Cosine, and Tangent functions.',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
        notes: 'Trigonometry deals with the relationships between the sides and angles of triangles. The primary functions are Sine (Opposite/Hypotenuse), Cosine (Adjacent/Hypotenuse), and Tangent (Opposite/Adjacent). Memorize the unit circle values for 0, 30, 45, 60, and 90 degrees.'
      },
      {
        id: 'm5', number: 5, title: 'Calculus: Limits', 
        description: 'Understanding continuity and rates of change.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
        notes: 'Calculus is the study of continuous change. A "Limit" describes the value that a function (or sequence) approaches as the input approaches some value. If f(x) gets closer to L as x gets closer to c, we say the limit of f(x) as x -> c is L. This is foundational for derivatives.'
      },
      {
        id: 'm6', number: 6, title: 'Statistics', 
        description: 'Mean, Median, Mode, and Data Analysis.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        notes: 'Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data. Key measures of central tendency are: Mean (average), Median (middle value), and Mode (most frequent). Standard deviation measures dispersion.'
      },
      {
        id: 'm7', number: 7, title: 'Probability', 
        description: 'Chance, events, and outcomes.',
        image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=800',
        notes: 'Probability measures the likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain). P(E) = Number of favorable outcomes / Total number of outcomes. Independent events do not affect each other, while dependent events do.'
      }
    ]
  },
  { 
    id: 'sci', 
    name: 'Science', 
    icon: 'FlaskConical', 
    description: 'Physics, Chemistry, Biology', 
    color: 'bg-green-100 text-green-600',
    chapters: [
      {
        id: 's1', number: 1, title: 'Forces & Motion', 
        description: 'Newton\'s Laws and Kinematics.',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
        notes: 'Physics begins with Motion. Newton\'s First Law: Inertia. Second Law: F=ma. Third Law: Action/Reaction. Velocity is a vector (speed + direction), while speed is a scalar. Acceleration is the rate of change of velocity.'
      },
      {
        id: 's2', number: 2, title: 'Energy & Work', 
        description: 'Kinetic, Potential, and Conservation.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        notes: 'Energy cannot be created or destroyed, only transformed. Potential Energy (PE = mgh) is stored energy. Kinetic Energy (KE = 1/2mv²) is energy of motion. Work is done when a force moves an object (W = Fd).'
      },
      {
        id: 's3', number: 3, title: 'Atomic Structure', 
        description: 'Protons, Neutrons, Electrons.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
        notes: 'Atoms are the building blocks of matter. The nucleus contains protons (+) and neutrons (neutral), orbited by electrons (-). The atomic number determines the element. Isotopes are atoms of the same element with different numbers of neutrons.'
      },
      {
        id: 's4', number: 4, title: 'Periodic Table', 
        description: 'Elements, Groups, and Periods.',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e1b70d4c18?auto=format&fit=crop&q=80&w=800',
        notes: 'Mendeleev organized elements by atomic mass; the modern table uses atomic number. Vertical columns are "Groups" (similar chemical properties), and horizontal rows are "Periods". Metals are on the left, non-metals on the right.'
      },
      {
        id: 's5', number: 5, title: 'Cell Biology', 
        description: 'Structure of plant and animal cells.',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
        notes: 'The cell is the basic unit of life. Plant cells have a cell wall and chloroplasts; animal cells do not. The Mitochondria is the powerhouse of the cell (ATP production). The Nucleus houses DNA.'
      },
      {
        id: 's6', number: 6, title: 'Genetics', 
        description: 'DNA, RNA, and Inheritance.',
        image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800',
        notes: 'DNA holds genetic code in a double helix structure (Watson & Crick). Genes determine traits. Dominant alleles mask Recessive ones. Punnett squares help predict offspring genotypes.'
      },
      {
        id: 's7', number: 7, title: 'Ecology', 
        description: 'Ecosystems and Biodiversity.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
        notes: 'Ecology studies interactions between organisms and their environment. Food chains show energy flow: Producer -> Primary Consumer -> Secondary Consumer. Biodiversity increases ecosystem resilience.'
      }
    ]
  },
  { 
    id: 'lit', 
    name: 'Literature', 
    icon: 'BookOpen', 
    description: 'Classics, Poetry, Modern', 
    color: 'bg-amber-100 text-amber-600',
    chapters: [
      { id: 'l1', number: 1, title: 'Literary Devices', description: 'Metaphor, Simile, and Imagery.', image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800', notes: 'Literary devices enhance writing. A Metaphor asserts identity (Time is a thief), while a Simile uses like/as (Time is like a river). Imagery appeals to the senses.' },
      { id: 'l2', number: 2, title: 'Poetry Analysis', description: 'Rhythm, Meter, and Stanza.', image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=80&w=800', notes: 'Analyzing poetry involves understanding structure. Iambic Pentameter is a common meter (da-DUM da-DUM). Look for rhyme schemes (ABAB, AABB) and themes.' },
      { id: 'l3', number: 3, title: 'Shakespearean Drama', description: 'Tragedy and Comedy.', image: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&q=80&w=800', notes: 'Shakespeare wrote 37 plays. Tragedies (Hamlet, Macbeth) end in death and deal with fatal flaws. Comedies (Midsummer Night\'s Dream) end in marriage. Language is Early Modern English.' },
      { id: 'l4', number: 4, title: 'The Novel', description: 'Plot, Character, and Setting.', image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=800', notes: 'Novels allow for deep character development. Plot structure usually follows Freytag\'s Pyramid: Exposition, Rising Action, Climax, Falling Action, Resolution.' },
      { id: 'l5', number: 5, title: 'Modernism', description: 'Stream of consciousness.', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=800', notes: 'Modernism (early 20th century) broke traditional forms. Writers like Woolf and Joyce used "Stream of Consciousness" to mimic the flow of human thought.' },
      { id: 'l6', number: 6, title: 'World Literature', description: 'Global perspectives.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800', notes: 'World Lit encompasses texts from outside the Western canon, offering insights into diverse cultures, post-colonial experiences, and translation studies.' }
    ]
  },
  { 
    id: 'hist', 
    name: 'History', 
    icon: 'Hourglass', 
    description: 'World, Ancient, Modern', 
    color: 'bg-red-100 text-red-600',
    chapters: [
      { id: 'h1', number: 1, title: 'Ancient Egypt', description: 'Pharaohs and Pyramids.', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800', notes: 'Civilization along the Nile. Known for monumental architecture (Pyramids of Giza), hieroglyphic writing, and a complex religion focused on the afterlife.' },
      { id: 'h2', number: 2, title: 'Classical Greece', description: 'Democracy and Philosophy.', image: 'https://images.unsplash.com/photo-1548625361-1b96a995d30d?auto=format&fit=crop&q=80&w=800', notes: 'Athens gave birth to Democracy. Spartans were known for war. Philosophers Socrates, Plato, and Aristotle laid the foundations of Western thought.' },
      { id: 'h3', number: 3, title: 'The Roman Empire', description: 'Rise and Fall.', image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=800', notes: 'From Republic to Empire under Augustus. Known for roads, aqueducts, and law. The Fall in 476 AD led to the Middle Ages in Europe.' },
      { id: 'h4', number: 4, title: 'The Renaissance', description: 'Rebirth of Art and Science.', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800', notes: 'Starting in Italy (14th-17th C.), it marked a transition from medieval to modern. Humanism emphasized human potential. Key figures: Da Vinci, Michelangelo.' },
      { id: 'h5', number: 5, title: 'Industrial Revolution', description: 'Machines and Urbanization.', image: 'https://images.unsplash.com/photo-1503423571797-2d2bb372094a?auto=format&fit=crop&q=80&w=800', notes: 'Began in Britain in the late 1700s. Shift from hand tools to steam engines and factories. Led to massive urbanization and social change.' },
      { id: 'h6', number: 6, title: 'World Wars', description: 'Global Conflict.', image: 'https://images.unsplash.com/photo-1596525737190-2810a430638e?auto=format&fit=crop&q=80&w=800', notes: 'WWI (1914-1918) trench warfare. WWII (1939-1945) involved Axis vs Allies, the Holocaust, and the atomic bomb, reshaping the geopolitical map.' }
    ]
  },
  { 
    id: 'tech', 
    name: 'Technology', 
    icon: 'Cpu', 
    description: 'Coding, AI, Robotics', 
    color: 'bg-indigo-100 text-indigo-600',
    chapters: [
      { id: 't1', number: 1, title: 'Intro to Coding', description: 'Logic and Syntax.', image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800', notes: 'Coding is giving instructions to computers. Key concepts: Variables (containers for data), Loops (repeating actions), and Conditionals (if/else logic).' },
      { id: 't2', number: 2, title: 'Web Development', description: 'HTML, CSS, JS.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800', notes: 'The web runs on three pillars: HTML (structure), CSS (style), and JavaScript (interactivity). React is a popular library for building UI.' },
      { id: 't3', number: 3, title: 'Python Basics', description: 'Versatile programming.', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800', notes: 'Python is known for readability. Great for data science and scripting. Uses indentation for blocks instead of curly braces.' },
      { id: 't4', number: 4, title: 'Algorithms', description: 'Sorting and Searching.', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800', notes: 'An algorithm is a step-by-step procedure. Common sorting algos: Bubble Sort, Quick Sort. Search algos: Binary Search (requires sorted list).' },
      { id: 't5', number: 5, title: 'Databases', description: 'SQL and NoSQL.', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800', notes: 'Databases store data. SQL (Structured Query Language) is for relational tables. NoSQL (like MongoDB) is for unstructured document storage.' },
      { id: 't6', number: 6, title: 'Artificial Intelligence', description: 'Machine Learning basics.', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800', notes: 'AI mimics human intelligence. ML allows systems to learn from data without explicit programming. Neural networks are modeled on the human brain.' }
    ]
  },
  { 
    id: 'art', 
    name: 'Arts', 
    icon: 'Palette', 
    description: 'Design, Music, Painting', 
    color: 'bg-purple-100 text-purple-600',
    chapters: [
      { id: 'a1', number: 1, title: 'Sketching Basics', description: 'Lines and Shapes.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800', notes: 'Drawing starts with seeing basic shapes (sphere, cube) in complex objects. Line quality (thick vs thin) adds depth and weight.' },
      { id: 'a2', number: 2, title: 'Color Theory', description: 'Wheel, Hue, Saturation.', image: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=800', notes: 'Primary colors: Red, Blue, Yellow. Complementary colors (opposites on wheel) create contrast. Warm colors advance, cool colors recede.' },
      { id: 'a3', number: 3, title: 'Perspective', description: 'Creating depth.', image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=800', notes: 'Perspective creates the illusion of 3D on a 2D surface. 1-point perspective has one vanishing point; 2-point has two. Objects get smaller as they recede.' },
      { id: 'a4', number: 4, title: 'Art History', description: 'Movements and Masters.', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=800', notes: 'From Impressionism (light/color focus) to Cubism (multiple viewpoints) to Surrealism (dreams). Knowing history informs contemporary practice.' },
      { id: 'a5', number: 5, title: 'Digital Art', description: 'Layers and Tools.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', notes: 'Digital tools (Photoshop, Procreate) use Layers to separate elements. Brushes mimic traditional media. "Undo" is a powerful feature for experimentation.' },
      { id: 'a6', number: 6, title: 'Music Theory', description: 'Rhythm and Melody.', image: 'https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&q=80&w=800', notes: 'Music is organized sound. Pitch (high/low), Rhythm (duration), Dynamics (loud/soft). Scales form the basis of melody and harmony.' }
    ]
  },
  { 
    id: 'geo', 
    name: 'Geography', 
    icon: 'Globe', 
    description: 'Earth, Maps, Climate', 
    color: 'bg-teal-100 text-teal-600',
    chapters: [
      { id: 'g1', number: 1, title: 'Physical Geography', description: 'Landforms and Tectonics.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', notes: 'Study of natural features. Plate tectonics explain earthquakes and volcanoes. Erosion by water and wind shapes the landscape over time.' },
      { id: 'g2', number: 2, title: 'Climate Zones', description: 'Weather patterns.', image: 'https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?auto=format&fit=crop&q=80&w=800', notes: 'Climate is long-term weather. Zones include Tropical (hot/wet), Arid (dry), Temperate (moderate), and Polar (cold). The equator receives the most direct sunlight.' },
      { id: 'g3', number: 3, title: 'Human Geography', description: 'Population and Culture.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800', notes: 'Studies how humans interact with the earth. Urbanization is the movement to cities. Migration push/pull factors drive population shifts.' },
      { id: 'g4', number: 4, title: 'Cartography', description: 'Map reading.', image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800', notes: 'The art of map making. Scale (ratio of distance), Projection (3D earth to 2D paper), and Legend (symbols) are key components. Latitude (N/S) and Longitude (E/W).' },
      { id: 'g5', number: 5, title: 'Resources', description: 'Renewable vs Non-renewable.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800', notes: 'Natural resources sustain life. Renewable (solar, wind) replenish quickly. Non-renewable (oil, coal) are finite. Sustainable management is crucial.' },
      { id: 'g6', number: 6, title: 'Environmental Systems', description: 'Biosphere interactions.', image: 'https://images.unsplash.com/photo-1500829243541-760591114079?auto=format&fit=crop&q=80&w=800', notes: 'The interaction between Atmosphere (air), Lithosphere (land), Hydrosphere (water), and Biosphere (life). Climate change affects all these systems.' }
    ]
  }
];

export const STORE_ITEMS: StoreItem[] = [
  ...FEATURED_BOOKS.map(b => ({ ...b, type: 'book' as const })),
  ...KNOWLEDGE_BOOKS.map(b => ({ ...b, type: 'book' as const })),
  {
    id: 's1',
    title: 'Advanced Microscope Kit',
    author: 'Science Labs',
    category: 'Equipment',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1581093588401-fbb077786081?auto=format&fit=crop&q=80&w=600',
    description: 'Professional grade microscope for students.',
    rating: 5.0,
    type: 'equipment'
  },
  {
    id: 's2',
    title: 'Full Python Course',
    author: 'Lumina Academy',
    category: 'Course',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=600',
    description: 'Zero to Hero in Python programming.',
    rating: 4.8,
    type: 'course'
  },
  {
    id: 's3',
    title: 'Graphing Calculator',
    author: 'MathTools Inc',
    category: 'Equipment',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee1f620?auto=format&fit=crop&q=80&w=600',
    description: 'Essential for calculus and algebra.',
    rating: 4.7,
    type: 'equipment'
  },
  {
    id: 's4',
    title: 'Canvas & Paint Set',
    author: 'Artistic Soul',
    category: 'Equipment',
    price: 35.50,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600',
    description: 'Everything you need to start painting.',
    rating: 4.9,
    type: 'equipment'
  }
];

// Helper to generate a large question bank
export const getSubjectQuestions = (subjectId: string): Question[] => {
  const templates: Question[] = [];
  
  // Specific questions for Math
  if (subjectId === 'math') {
    templates.push(
      { id: 'mq1', difficulty: 'Easy', text: 'What is the value of Pi to two decimal places?', options: ['3.12', '3.14', '3.16', '3.18'], correctAnswer: 1, explanation: 'Pi is approximately 3.14159...' },
      { id: 'mq2', difficulty: 'Hard', text: 'If f(x) = x², what is the derivative f\'(x)?', options: ['x', '2x', 'x²', '2'], correctAnswer: 1, explanation: 'Using the power rule, d/dx(x^n) = nx^(n-1).' },
      { id: 'mq3', difficulty: 'Medium', text: 'What is the square root of 144?', options: ['10', '11', '12', '13'], correctAnswer: 2, explanation: '12 * 12 = 144.' },
      { id: 'mq4', difficulty: 'Hard', text: 'Solve for x: 2x + 5 = 15', options: ['4', '5', '6', '7'], correctAnswer: 1, explanation: '2x = 10, so x = 5.' },
      { id: 'mq5', difficulty: 'Hard', text: 'What is the sum of angles in a triangle?', options: ['180°', '360°', '90°', '270°'], correctAnswer: 0, explanation: 'Euclidean geometry axiom.' },
    );
  }
  
  if (subjectId === 'sci') {
    templates.push(
      { id: 'sq1', difficulty: 'Easy', text: 'What is the chemical symbol for Gold?', options: ['Go', 'Gd', 'Au', 'Ag'], correctAnswer: 2, explanation: 'Au comes from the Latin Aurum.' },
      { id: 'sq2', difficulty: 'Hard', text: 'Which particle has no electric charge?', options: ['Proton', 'Electron', 'Neutron', 'Ion'], correctAnswer: 2, explanation: 'Neutrons are neutral particles in the nucleus.' },
      { id: 'sq3', difficulty: 'Medium', text: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi'], correctAnswer: 1, explanation: 'Mitochondria generate ATP.' },
      { id: 'sq4', difficulty: 'Hard', text: 'What is the speed of light approx?', options: ['300,000 km/s', '150,000 km/s', '1,000 km/s', 'Sound speed'], correctAnswer: 0, explanation: 'c is approx 3x10^8 m/s.' },
      { id: 'sq5', difficulty: 'Hard', text: 'What is Newton\'s Second Law?', options: ['F=ma', 'E=mc²', 'a²=b²+c²', 'PV=nRT'], correctAnswer: 0, explanation: 'Force equals mass times acceleration.' },
    );
  }

  // Fill the rest to reach 50
  const count = templates.length;
  for (let i = count; i < 50; i++) {
    const isHard = i % 5 === 0;
    const isMedium = i % 3 === 0;
    const diff = isHard ? 'Hard' : (isMedium ? 'Medium' : 'Easy');
    
    templates.push({
      id: `${subjectId}_gen_${i}`,
      text: `${isHard ? '[Advanced] ' : ''}Question ${i + 1} for ${subjectId.toUpperCase()}: This is a procedurally generated practice question to test your knowledge on topic ${i % 7 + 1}.`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: isHard 
        ? 'This is a high-level concept requiring critical analysis of the subject matter.' 
        : 'This is a fundamental concept discussed in the early chapters.',
      difficulty: diff
    });
  }

  return templates;
};