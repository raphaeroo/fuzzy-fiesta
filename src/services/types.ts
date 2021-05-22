export type Dificulty = 'easy' | 'medium' | 'hard'

export type Categories =
  | 'General Knowledge'
  | 'Entertainment: Books'
  | 'Entertainment: Film'
  | 'Entertainment: Music'
  | 'Entertainment: Musicals & Theatres'
  | 'Entertainment: Television'
  | 'Entertainment: Video Games'
  | 'Entertainment: Board Games'
  | 'Science & Nature'
  | 'Science: Computers'
  | 'Science: Mathematics'
  | 'Mythology'
  | 'Sports'
  | 'Geography'
  | 'History'
  | 'Politics'
  | 'Art'
  | 'Celebrities'
  | 'Animals'
  | 'Vehicles'
  | 'Entertainment: Comics'
  | 'Science: Gadgets'
  | 'Entertainment: Japanese Anime & Manga'
  | 'Entertainment: Cartoon & Animations'

export enum CategoriesNumber {
  'General Knowledge' = 9,
  'Entertainment: Books' = 10,
  'Entertainment: Film' = 11,
  'Entertainment: Music' = 12,
  'Entertainment: Musicals & Theatres' = 13,
  'Entertainment: Television' = 14,
  'Entertainment: Video Games' = 15,
  'Entertainment: Board Games' = 16,
  'Science & Nature' = 17,
  'Science: Computers' = 18,
  'Science: Mathematics' = 19,
  'Mythology' = 20,
  'Sports' = 21,
  'Geography' = 22,
  'History' = 23,
  'Politics' = 24,
  'Art' = 25,
  'Celebrities' = 26,
  'Animals' = 27,
  'Vehicles' = 28,
  'Entertainment: Comics' = 29,
  'Science: Gadgets' = 30,
  'Entertainment: Japanese Anime & Manga' = 31,
  'Entertainment: Cartoon & Animations' = 32
}

type Results = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type Response = {
  response_code: number
  results: Results[]
}