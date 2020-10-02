export enum Category {
  CITIES = 'CITIES',
  PIRATES = 'PIRATES',
  ANIMALS = 'ANIMALS',
}

export const Questions = [
  // Cities
  {
    id: '1',
    text: 'What is the capital of Germany?',
    answerId: 'berlin',
    category: Category.CITIES
  },
  {
    id: '2',
    text: 'What is the capital of France?',
    answerId: 'paris',
    category: Category.CITIES
  },
  {
    id: '3',
    text: 'Which city has the oldest still operating university in the world?',
    answerId: 'bologna',
    category: Category.CITIES
  },
  {
    id: '4',
    text: 'Which city is called "The Silicon Valley Of Europe"?',
    answerId: 'berlin',
    category: Category.CITIES
  },
  {
    id: '5',
    text: 'In which city is the European Court of Human Rights located?',
    answerId: 'strasbourg',
    category: Category.CITIES
  },
  // Pirates
  {
    id: '6',
    text: `To which pirate belonged the two hundred ton, forty-gun frigate named the Queen Anne's Revenge.`,
    answerId: 'blackbeard',
    category: Category.PIRATES
  },
  {
    id: '7',
    text: 'Which pirate liked to use fire and smoke effects in combat to scare his enemies?',
    answerId: 'blackbeard',
    category: Category.PIRATES
  },
  {
    id: '8',
    text: 'Who was the only pirate captain to resist when Woodes Rogers asserted governorship over Nassau in 1718?',
    answerId: 'charlesvane',
    category: Category.PIRATES
  },
  {
    id: '9',
    text: 'Which pirate did not actually exist?',
    answerId: 'jacksparrow',
    category: Category.PIRATES
  },
  {
    id: '10',
    text: 'Which former pirate became a pirate hunter himself?',
    answerId: 'benjaminhornigold',
    category: Category.PIRATES
  },
  {
    id: '11',
    text: 'Which pirate is the inspiration for a commonly known brand of rum?',
    answerId: 'henrymorgan',
    category: Category.PIRATES
  },

  // animals
  {
    id: '12',
    text: 'Which animal carries its heart in its head?',
    answerId: 'shrimp',
    category: Category.ANIMALS
  }, {
    id: '13',
    text: 'Which animal sleeps up to three years at a stretch?',
    answerId: 'snail',
    category: Category.ANIMALS
  }, {
    id: '14',
    text: 'Which is the only animal that cant jump?',
    answerId: 'elephant',
    category: Category.ANIMALS
  }, {
    id: '14',
    text: 'Which mammal is not able to fart?',
    answerId: 'kangaroo',
    category: Category.ANIMALS
  }

  // add question with invalid or wrong answerId ??
  

];

export const Answers = {
  'CITIES': [
    {
      id: 'berlin',
      label: 'Berlin'
    },
    { 
      id: 'paris',
      label: 'Paris'
    },
    { 
      id: 'bologna',
      label: 'Bologna'
    },
    { 
      id: 'strasbourg',
      label: 'Strasbourg'
    }
  ],
  'PIRATES': [
    {
      id: 'blackbeard',
      label: 'Blackbeard'
    }, {
      id: 'charlesvane',
      label: 'Charles Vane'
    }, {
      id: 'jacksparrow',
      label: 'Jack Sparrow'
    }, {
      id: 'benjaminhornigold',
      label: 'Benjamin Hornigold'
    }, {
      id: 'henrymorgan',
      label: 'Henry Morgan'
    }
  ],
  'ANIMALS': [
    {
      id: 'shrimp',
      label: 'Shrimp'
    }, {
      id: 'snail',
      label: 'Snail'
    }, {
      id: 'elephant',
      label: 'Elephant'
    }, {
      id: 'kangaroo',
      label: 'Kangaroo'
    }, {
      id: 'ostrich',
      label: 'Ostrich'
    }, {
      id: 'fox',
      label: 'Fox'
    }
  ]
}