export type Words = {
  id: number;
  word: string;
  tip: string;
};

export const WORDS: Words[] = [
  { id: 1, word: 'CSS', tip: 'Style language' },
  { id: 2, word: 'React', tip: 'Library to create web interfaces' },
  { id: 3, word: 'HTML', tip: 'Markup language' },
  {
    id: 4,
    word: 'JavaScript',
    tip: 'One of the most popular programming languages in world',
  },
  { id: 5, word: 'TypeScript', tip: 'Add types in JavaScript' },
];
