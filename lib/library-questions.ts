import type {Question,Level} from './questions';
// Curated grammar questions using vocabulary and themes from the thematic library.
export const libraryQuestions:Question[] = [
  {
    "id": 90000,
    "level": "B1",
    "prompt": "Maria Skłodowska-Curie ___ two Nobel Prizes during her lifetime.",
    "options": [
      "receives",
      "received",
      "has receive",
      "was receive"
    ],
    "correct": 1,
    "topic": "Past Simple · Z biblioteki: Maria Skłodowska-Curie",
    "explanations": [
      "Nie. Past Simple opisuje zakończone wydarzenia z przeszłości.",
      "Tak. Past Simple opisuje zakończone wydarzenia z przeszłości.",
      "Nie. Past Simple opisuje zakończone wydarzenia z przeszłości.",
      "Nie. Past Simple opisuje zakończone wydarzenia z przeszłości."
    ]
  },
  {
    "id": 90001,
    "level": "B1",
    "prompt": "Scientists ___ radioactive elements in laboratories.",
    "options": [
      "study",
      "studies",
      "studied yesterday",
      "are study"
    ],
    "correct": 0,
    "topic": "Present Simple · Z biblioteki: Maria Skłodowska-Curie",
    "explanations": [
      "Tak. Present Simple wyraża ogólny fakt lub regularną czynność.",
      "Nie. Present Simple wyraża ogólny fakt lub regularną czynność.",
      "Nie. Present Simple wyraża ogólny fakt lub regularną czynność.",
      "Nie. Present Simple wyraża ogólny fakt lub regularną czynność."
    ]
  },
  {
    "id": 90002,
    "level": "B1",
    "prompt": "The composer ___ a new film score right now.",
    "options": [
      "writes every day",
      "wrote yesterday",
      "is writing",
      "has write"
    ],
    "correct": 2,
    "topic": "Present Continuous · Z biblioteki: Krzesimir Dębski",
    "explanations": [
      "Nie. Right now wymaga am/is/are + -ing.",
      "Nie. Right now wymaga am/is/are + -ing.",
      "Tak. Right now wymaga am/is/are + -ing.",
      "Nie. Right now wymaga am/is/are + -ing."
    ]
  },
  {
    "id": 90003,
    "level": "B1",
    "prompt": "The orchestra ___ Dębski's music at the concert last night.",
    "options": [
      "performs",
      "performed",
      "has performed",
      "is performing"
    ],
    "correct": 1,
    "topic": "Past Simple · Z biblioteki: Krzesimir Dębski",
    "explanations": [
      "Nie. Last night wskazuje na zakończony czas w przeszłości.",
      "Tak. Last night wskazuje na zakończony czas w przeszłości.",
      "Nie. Last night wskazuje na zakończony czas w przeszłości.",
      "Nie. Last night wskazuje na zakończony czas w przeszłości."
    ]
  },
  {
    "id": 90004,
    "level": "B1",
    "prompt": "We ___ our hiking equipment for Kilimanjaro at the moment.",
    "options": [
      "check",
      "checked",
      "are checking",
      "have check"
    ],
    "correct": 2,
    "topic": "Present Continuous · Z biblioteki: Kilimandżaro",
    "explanations": [
      "Nie. At the moment oznacza czynność trwającą teraz.",
      "Nie. At the moment oznacza czynność trwającą teraz.",
      "Tak. At the moment oznacza czynność trwającą teraz.",
      "Nie. At the moment oznacza czynność trwającą teraz."
    ]
  },
  {
    "id": 90005,
    "level": "B1",
    "prompt": "The hikers ___ their backpacks yesterday.",
    "options": [
      "pack",
      "packed",
      "have packed",
      "are packing"
    ],
    "correct": 1,
    "topic": "Past Simple · Z biblioteki: Kilimandżaro",
    "explanations": [
      "Nie. Yesterday wymaga czasu Past Simple.",
      "Tak. Yesterday wymaga czasu Past Simple.",
      "Nie. Yesterday wymaga czasu Past Simple.",
      "Nie. Yesterday wymaga czasu Past Simple."
    ]
  },
  {
    "id": 90006,
    "level": "B1+",
    "prompt": "By the time the students arrived, the philosopher ___ the discussion.",
    "options": [
      "has begun",
      "begins",
      "had begun",
      "will begin"
    ],
    "correct": 2,
    "topic": "Past Perfect · Z biblioteki: Platon",
    "explanations": [
      "Nie. Past Perfect wskazuje czynność wcześniejszą niż inne wydarzenie w przeszłości.",
      "Nie. Past Perfect wskazuje czynność wcześniejszą niż inne wydarzenie w przeszłości.",
      "Tak. Past Perfect wskazuje czynność wcześniejszą niż inne wydarzenie w przeszłości.",
      "Nie. Past Perfect wskazuje czynność wcześniejszą niż inne wydarzenie w przeszłości."
    ]
  },
  {
    "id": 90007,
    "level": "B1+",
    "prompt": "Researchers ___ radioactivity for decades, and their work continues.",
    "options": [
      "have been studying",
      "studied yesterday",
      "study last year",
      "had studied before 1900"
    ],
    "correct": 0,
    "topic": "Present Perfect Continuous · Z biblioteki: Maria Skłodowska-Curie",
    "explanations": [
      "Tak. Have been + -ing podkreśla trwanie czynności do teraz.",
      "Nie. Have been + -ing podkreśla trwanie czynności do teraz.",
      "Nie. Have been + -ing podkreśla trwanie czynności do teraz.",
      "Nie. Have been + -ing podkreśla trwanie czynności do teraz."
    ]
  },
  {
    "id": 90008,
    "level": "B1+",
    "prompt": "The violinist ___ with the orchestra since the morning and is still rehearsing.",
    "options": [
      "rehearsed yesterday",
      "has been rehearsing",
      "had rehearsed before 1990",
      "rehearses last night"
    ],
    "correct": 1,
    "topic": "Present Perfect Continuous · Z biblioteki: Krzesimir Dębski",
    "explanations": [
      "Nie. Since i still wskazują czynność rozpoczętą w przeszłości i nadal trwającą.",
      "Tak. Since i still wskazują czynność rozpoczętą w przeszłości i nadal trwającą.",
      "Nie. Since i still wskazują czynność rozpoczętą w przeszłości i nadal trwającą.",
      "Nie. Since i still wskazują czynność rozpoczętą w przeszłości i nadal trwającą."
    ]
  },
  {
    "id": 90009,
    "level": "B2",
    "prompt": "If the hikers had checked the weather, they ___ their plans.",
    "options": [
      "will change",
      "would change",
      "would have changed",
      "have changed"
    ],
    "correct": 2,
    "topic": "Third conditional · Z biblioteki: Kilimandżaro",
    "explanations": [
      "Nie. If + Past Perfect, would have + III forma opisuje nierealną przeszłość.",
      "Nie. If + Past Perfect, would have + III forma opisuje nierealną przeszłość.",
      "Tak. If + Past Perfect, would have + III forma opisuje nierealną przeszłość.",
      "Nie. If + Past Perfect, would have + III forma opisuje nierealną przeszłość."
    ]
  },
  {
    "id": 90010,
    "level": "B2",
    "prompt": "If Maria had abandoned her research, she ___ those discoveries.",
    "options": [
      "would not have made",
      "will not make",
      "does not make",
      "had not made"
    ],
    "correct": 0,
    "topic": "Third conditional · Z biblioteki: Maria Skłodowska-Curie",
    "explanations": [
      "Tak. Third conditional: would not have + III forma.",
      "Nie. Third conditional: would not have + III forma.",
      "Nie. Third conditional: would not have + III forma.",
      "Nie. Third conditional: would not have + III forma."
    ]
  },
  {
    "id": 90011,
    "level": "B2",
    "prompt": "At this time tomorrow, the orchestra ___ the composer's new piece.",
    "options": [
      "performed",
      "has performed",
      "will be performing",
      "performs yesterday"
    ],
    "correct": 2,
    "topic": "Future Continuous · Z biblioteki: Krzesimir Dębski",
    "explanations": [
      "Nie. Will be + -ing opisuje czynność trwającą w określonym momencie przyszłości.",
      "Nie. Will be + -ing opisuje czynność trwającą w określonym momencie przyszłości.",
      "Tak. Will be + -ing opisuje czynność trwającą w określonym momencie przyszłości.",
      "Nie. Will be + -ing opisuje czynność trwającą w określonym momencie przyszłości."
    ]
  }
] as Question[];
export const libraryPool=(level:Level)=>libraryQuestions.filter(q=>level==='B2'||(level==='B1+'?q.level!=='B2':q.level==='B1'));
