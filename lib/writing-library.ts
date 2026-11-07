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
  }
] as WritingTask[];
