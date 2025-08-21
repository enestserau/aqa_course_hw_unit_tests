/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false; // защита от нестрок

  const normalized = word.toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || sentence.length === 0) return [];

  let words = sentence.trim().split(/\s+/);
  if (words.length === 0) return [];

  let maxLen = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLen) {
      maxLen = words[i].length;
    }
  }

  var result = [];
  for (var j = 0; j < words.length; j++) {
    if (words[j].length === maxLen) {
      result.push(words[j]);
    }
  }

  return result;
}

export { isPalindrom, findLongestWords };
