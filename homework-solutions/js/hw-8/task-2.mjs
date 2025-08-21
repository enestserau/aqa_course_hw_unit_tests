/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(words) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  const countVowels = (word) => {
    return [...word].reduce((accumulator, character) => accumulator + vowels.has(character), 0);
  };

  return [...words].sort((a, b) => countVowels(a) - countVowels(b));
}

export { sortedByVowels };
