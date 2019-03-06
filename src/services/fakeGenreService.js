export const Genres = [
  { _id: '5b21ca3eeb7f6fbccd471815', name: 'Action' },
  { _id: '5b21ca3eeb7f6fbccd471819', name: 'Comedy' },
  { _id: '5b21ca3eeb7f6fbccd471817', name: 'Thriller' }
];

export function getGenres() {
  return Genres.filter(g => g);
}