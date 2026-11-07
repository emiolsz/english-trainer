import type {Level} from './questions';
export type WritingTask={level:Level;type:string;title:string;instruction:string;min:number;max:number;starters:string[];checks:string[]};
export const writingLibrary:WritingTask[]=[
  {
    "level": "B1",
    "type": "Recipe",
    "title": "A creamy vegetable soup",
    "instruction": "Describe how to prepare and serve a vegetable soup.",
    "min": 100,
    "max": 150,
    "starters": [
      "First, ...",
      "Then, ...",
      "Finally, ..."
    ],
    "checks": [
      "Use complete sentences.",
      "Check basic verb tenses.",
      "Add clear details."
    ]
  },
  {
    "level": "B1+",
    "type": "Article",
    "title": "Jerusalem artichoke: a useful garden plant",
    "instruction": "Explain how Jerusalem artichokes grow and why people eat them.",
    "min": 130,
    "max": 180,
    "starters": [
      "One important point is that...",
      "For example, ...",
      "However, ..."
    ],
    "checks": [
      "Use linking expressions.",
      "Include one complex sentence.",
      "Check your argument or sequence."
    ]
  },
  {
    "level": "B2",
    "type": "Science article",
    "title": "Inulin and the gut microbiota",
    "instruction": "Explain inulin and why health claims require scientific caution.",
    "min": 180,
    "max": 240,
    "starters": [
      "Evidence suggests that...",
      "On the other hand, ...",
      "In conclusion, ..."
    ],
    "checks": [
      "Develop a balanced argument.",
      "Use precise vocabulary and cautious claims.",
      "Check paragraph coherence."
    ]
  },
  {
    "level": "B1",
    "type": "Description",
    "title": "A mysterious stone",
    "instruction": "Describe an unusual stone and explain what it might be.",
    "min": 100,
    "max": 150,
    "starters": [
      "First, ...",
      "Then, ...",
      "Finally, ..."
    ],
    "checks": [
      "Use complete sentences.",
      "Check basic verb tenses.",
      "Add clear details."
    ]
  },
  {
    "level": "B1+",
    "type": "Comparison",
    "title": "Belemnite or fulgurite?",
    "instruction": "Compare a belemnite rostrum and a fulgurite and explain how they are identified.",
    "min": 130,
    "max": 180,
    "starters": [
      "One important point is that...",
      "For example, ...",
      "However, ..."
    ],
    "checks": [
      "Use linking expressions.",
      "Include one complex sentence.",
      "Check your argument or sequence."
    ]
  },
  {
    "level": "B2",
    "type": "Opinion",
    "title": "Why do people believe scientific myths?",
    "instruction": "Discuss why legends arise and how science tests popular explanations.",
    "min": 180,
    "max": 240,
    "starters": [
      "Evidence suggests that...",
      "On the other hand, ...",
      "In conclusion, ..."
    ],
    "checks": [
      "Develop a balanced argument.",
      "Use precise vocabulary and cautious claims.",
      "Check paragraph coherence."
    ]
  },
  {
    "level": "B1",
    "type": "Description",
    "title": "A mineral in my collection",
    "instruction": "Describe a mineral, its appearance and properties.",
    "min": 100,
    "max": 150,
    "starters": [
      "First, ...",
      "Then, ...",
      "Finally, ..."
    ],
    "checks": [
      "Use complete sentences.",
      "Check basic verb tenses.",
      "Add clear details."
    ]
  },
  {
    "level": "B1+",
    "type": "Comparison",
    "title": "Pyrite and gold",
    "instruction": "Compare pyrite with gold and explain how they differ.",
    "min": 130,
    "max": 180,
    "starters": [
      "One important point is that...",
      "For example, ...",
      "However, ..."
    ],
    "checks": [
      "Use linking expressions.",
      "Include one complex sentence.",
      "Check your argument or sequence."
    ]
  },
  {
    "level": "B2",
    "type": "Science article",
    "title": "Graphene and future technology",
    "instruction": "Describe graphene, its applications and limitations.",
    "min": 180,
    "max": 240,
    "starters": [
      "Evidence suggests that...",
      "On the other hand, ...",
      "In conclusion, ..."
    ],
    "checks": [
      "Develop a balanced argument.",
      "Use precise vocabulary and cautious claims.",
      "Check paragraph coherence."
    ]
  },
  {
    "level": "B1",
    "type": "Email",
    "title": "A botanical garden visit",
    "instruction": "Write to a friend about a visit and suggest going together.",
    "min": 90,
    "max": 130,
    "starters": [
      "First, ...",
      "Then, ...",
      "Finally, ..."
    ],
    "checks": [
      "Use complete sentences.",
      "Check basic verb tenses.",
      "Add clear details."
    ]
  },
  {
    "level": "B1+",
    "type": "Review",
    "title": "A seasonal vegetable dish",
    "instruction": "Review a dish, describing its taste, texture and who might enjoy it.",
    "min": 130,
    "max": 180,
    "starters": [
      "One important point is that...",
      "For example, ...",
      "However, ..."
    ],
    "checks": [
      "Use linking expressions.",
      "Include one complex sentence.",
      "Check your argument or sequence."
    ]
  },
  {
    "level": "B2",
    "type": "Essay",
    "title": "Should we grow more local food?",
    "instruction": "Discuss benefits and drawbacks of growing local food.",
    "min": 180,
    "max": 240,
    "starters": [
      "Evidence suggests that...",
      "On the other hand, ...",
      "In conclusion, ..."
    ],
    "checks": [
      "Develop a balanced argument.",
      "Use precise vocabulary and cautious claims.",
      "Check paragraph coherence."
    ]
  },
  {
    "level": "B1",
    "type": "Story",
    "title": "A surprising discovery",
    "instruction": "Write a short story about finding something unusual in a garden.",
    "min": 100,
    "max": 150,
    "starters": [
      "First, ...",
      "Then, ...",
      "Finally, ..."
    ],
    "checks": [
      "Use complete sentences.",
      "Check basic verb tenses.",
      "Add clear details."
    ]
  },
  {
    "level": "B1+",
    "type": "Guide",
    "title": "How to grow a hardy plant",
    "instruction": "Write a practical gardening guide with clear instructions.",
    "min": 130,
    "max": 180,
    "starters": [
      "One important point is that...",
      "For example, ...",
      "However, ..."
    ],
    "checks": [
      "Use linking expressions.",
      "Include one complex sentence.",
      "Check your argument or sequence."
    ]
  },
  {
    "level": "B2",
    "type": "Opinion",
    "title": "Can healthy food be a miracle cure?",
    "instruction": "Discuss nutrition versus medical treatment and evaluate health claims.",
    "min": 180,
    "max": 240,
    "starters": [
      "Evidence suggests that...",
      "On the other hand, ...",
      "In conclusion, ..."
    ],
    "checks": [
      "Develop a balanced argument.",
      "Use precise vocabulary and cautious claims.",
      "Check paragraph coherence."
    ]
  },
  {
    "level": "B1",
    "type": "Review",
    "title": "A film or book I recommend",
    "instruction": "Write a review of a film or book you enjoyed. Give its title, briefly describe the story without revealing the ending, say what you liked or disliked, and explain who you would recommend it to.",
    "min": 100,
    "max": 150,
    "starters": [
      "I recently watched / read...",
      "The story is about...",
      "My favourite part was...",
      "I would recommend it because..."
    ],
    "checks": [
      "Mention the title and whether it is a film or a book.",
      "Use Present Simple for the plot and Past Simple for your experience.",
      "Give an opinion supported by a reason.",
      "End with a recommendation."
    ]
  },
  {
    "level": "B1",
    "type": "Description",
    "title": "A place that amazed me",
    "instruction": "Describe a real place that amazed you. Say where it is, when you visited, what you saw and felt, and why you remember it.",
    "min": 100,
    "max": 150,
    "starters": [
      "One place that truly amazed me was...",
      "I went there with...",
      "What impressed me most was...",
      "I will never forget..."
    ],
    "checks": [
      "Say where and when you visited.",
      "Describe at least two details using adjectives.",
      "Use Past Simple for your visit.",
      "Explain why the place was special."
    ]
  },
  {
    "level": "B1+",
    "type": "Review",
    "title": "A memorable film or book",
    "instruction": "Write a balanced review of a film or book. Introduce it, summarise the plot without spoilers, discuss characters or style, and evaluate its strengths and weaknesses.",
    "min": 140,
    "max": 190,
    "starters": [
      "The film / novel tells the story of...",
      "One of its strongest points is...",
      "However, I felt that...",
      "Overall, I would recommend it to..."
    ],
    "checks": [
      "Include both strengths and weaknesses.",
      "Support your opinion with examples.",
      "Use linking words such as although and however.",
      "Give a clear recommendation."
    ]
  },
  {
    "level": "B1+",
    "type": "Description",
    "title": "The place that took my breath away",
    "instruction": "Describe a place that left a lasting impression on you. Explain its atmosphere, the details you noticed and how the experience changed your perspective.",
    "min": 140,
    "max": 190,
    "starters": [
      "I still remember the moment when...",
      "The atmosphere was...",
      "What struck me most was...",
      "Looking back, I realise that..."
    ],
    "checks": [
      "Use vivid but accurate descriptive language.",
      "Include sensory details.",
      "Combine past tenses and a reflection in the present.",
      "Explain why it was unforgettable."
    ]
  },
  {
    "level": "B2",
    "type": "Critical review",
    "title": "Review a film or novel",
    "instruction": "Write a critical review of a film or novel. Evaluate its themes, narrative structure, character development and artistic choices, giving a balanced personal judgement without major spoilers.",
    "min": 180,
    "max": 250,
    "starters": [
      "At its heart, the work explores...",
      "The narrative is particularly effective when...",
      "Despite its strengths...",
      "Ultimately, it succeeds / falls short because..."
    ],
    "checks": [
      "Analyse rather than merely summarise.",
      "Support judgements with specific examples.",
      "Consider at least one limitation.",
      "End with a nuanced recommendation."
    ]
  },
  {
    "level": "B2",
    "type": "Descriptive essay",
    "title": "A place that changed the way I see the world",
    "instruction": "Write a descriptive and reflective essay about a place that profoundly impressed you. Create a vivid sense of place and explore what the experience taught you.",
    "min": 180,
    "max": 250,
    "starters": [
      "I had expected..., but...",
      "What made the place extraordinary was...",
      "Beyond its appearance...",
      "The experience has stayed with me because..."
    ],
    "checks": [
      "Use a clear introduction, development and conclusion.",
      "Combine sensory description with personal reflection.",
      "Use varied sentence structures and tenses.",
      "Avoid generic praise; explain what made it unique."
    ]
  }
] as WritingTask[];
