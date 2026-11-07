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
  },
  {
    "level": "B1",
    "type": "Personal description",
    "title": "My strengths and weaknesses",
    "instruction": "Describe two of your strengths and one weakness. Give examples from everyday life and explain what you would like to improve.",
    "min": 60,
    "max": 90,
    "starters": [
      "One of my strengths is...",
      "I am good at...",
      "However, I sometimes find it difficult to...",
      "I would like to improve by..."
    ],
    "checks": [
      "Name at least two strengths and one weakness.",
      "Give a real example.",
      "Use Present Simple and can/cannot.",
      "Explain one way to improve."
    ]
  },
  {
    "level": "B1+",
    "type": "Personal reflection",
    "title": "What are my strengths and weaknesses?",
    "instruction": "Write about your strengths and weaknesses in study, work or everyday life. Give specific examples and explain how you are working on your weaknesses.",
    "min": 90,
    "max": 120,
    "starters": [
      "I consider myself to be...",
      "For instance, when I...",
      "One area I need to work on is...",
      "To make progress, I have started to..."
    ],
    "checks": [
      "Support your strengths with examples.",
      "Discuss weaknesses constructively.",
      "Use linking expressions.",
      "Describe a realistic improvement plan."
    ]
  },
  {
    "level": "B2",
    "type": "Reflective essay",
    "title": "Knowing myself: strengths, weaknesses and growth",
    "instruction": "Write a balanced reflective essay evaluating your strengths and weaknesses. Discuss how they influence your decisions and relationships, and what strategies help you develop.",
    "min": 120,
    "max": 160,
    "starters": [
      "Self-awareness plays an important role in...",
      "One quality I value in myself is...",
      "Nevertheless, I have noticed that...",
      "Over time, I have learned to..."
    ],
    "checks": [
      "Analyse rather than merely list qualities.",
      "Include specific experiences.",
      "Use varied structures and nuanced vocabulary.",
      "Conclude with a personal development goal."
    ]
  },
  {
    "level": "B1",
    "type": "Personal description",
    "title": "My favourite activities",
    "instruction": "Describe two or three activities you enjoy in your free time. Say how often you do them, who you do them with and why you like them.",
    "min": 60,
    "max": 90,
    "starters": [
      "In my free time, I enjoy...",
      "I usually...",
      "I like it because...",
      "At weekends, I often..."
    ],
    "checks": [
      "Name two or three activities.",
      "Use Present Simple and frequency expressions.",
      "Explain why you enjoy them."
    ]
  },
  {
    "level": "B1+",
    "type": "Personal reflection",
    "title": "How I like to spend my free time",
    "instruction": "Describe your favourite activities and explain how they influence your mood, relationships or everyday routine. Include examples.",
    "min": 90,
    "max": 120,
    "starters": [
      "One activity I particularly enjoy is...",
      "I first became interested in it when...",
      "It helps me to...",
      "Although I sometimes..., I still..."
    ],
    "checks": [
      "Give specific examples.",
      "Use a range of tenses.",
      "Explain what these activities mean to you."
    ]
  },
  {
    "level": "B2",
    "type": "Reflective essay",
    "title": "The activities that make my life richer",
    "instruction": "Reflect on the activities you find most rewarding. Explain what motivates you, how your interests have developed and what they contribute to your wellbeing or personal growth.",
    "min": 120,
    "max": 160,
    "starters": [
      "What I find most rewarding is...",
      "Over the years, I have developed...",
      "Beyond simple enjoyment, it allows me to...",
      "Ultimately, these activities..."
    ],
    "checks": [
      "Develop a clear personal reflection.",
      "Use varied vocabulary and sentence structures.",
      "Support your ideas with examples."
    ]
  },
  {
    "level": "B1",
    "type": "Opinion",
    "title": "Explain and justify your choice",
    "instruction": "Choose any topic and describe a choice you would make. Say what you choose and give at least two reasons for your decision. You may compare two options. Possible topics: moving to a different city or country; changing a daily habit (sleep, exercise, screen time); choosing a new job or course; changing how you travel to work; adopting a healthier routine. Choose one of these or invent your own.",
    "min": 60,
    "max": 90,
    "starters": [
      "I would choose...",
      "The first reason is...",
      "Another reason is...",
      "That is why I prefer...",
      "For example, I am thinking about moving because...",
      "I have decided to change my habits because..."
    ],
    "checks": [
      "Make your choice clear.",
      "Give at least two reasons.",
      "Use because or so to explain your ideas."
    ]
  },
  {
    "level": "B1+",
    "type": "Opinion",
    "title": "Make a choice and explain why",
    "instruction": "Choose any topic and explain a decision or preference. Compare the available options, support your choice with reasons and a concrete example. Possible topics: moving to a different city or country; changing a daily habit (sleep, exercise, screen time); choosing a new job or course; changing how you travel to work; adopting a healthier routine. Choose one of these or invent your own.",
    "min": 90,
    "max": 120,
    "starters": [
      "If I had to choose, I would...",
      "Compared with..., ...",
      "For example, ...",
      "For these reasons, I believe...",
      "For example, I am thinking about moving because...",
      "I have decided to change my habits because..."
    ],
    "checks": [
      "Compare at least two options.",
      "Give clear reasons and one example.",
      "Use linking expressions such as although, however or therefore."
    ]
  },
  {
    "level": "B2",
    "type": "Argumentative essay",
    "title": "Justify a decision: your topic, your arguments",
    "instruction": "Choose a topic freely and defend a decision or preference. Present a reasoned argument, consider a reasonable opposing view and finish with a balanced conclusion. Possible topics: moving to a different city or country; changing a daily habit (sleep, exercise, screen time); choosing a new job or course; changing how you travel to work; adopting a healthier routine. Choose one of these or invent your own.",
    "min": 120,
    "max": 160,
    "starters": [
      "In my view, the best option is...",
      "A key argument in favour of this choice is...",
      "Admittedly, some people might argue that...",
      "Nevertheless, I would choose...",
      "For example, I am thinking about moving because...",
      "I have decided to change my habits because..."
    ],
    "checks": [
      "State your position clearly.",
      "Develop arguments with specific examples.",
      "Acknowledge a counterargument fairly.",
      "End with a logical conclusion."
    ]
  }
] as WritingTask[];
