/*
Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
 */

function validatePassword(password: string): boolean {
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/\d/.test(password)) return false;
  if (password.length < 8) return false;
  if (password.trim() === '') return false;
  return true;
}

const testPasswords: string[] = [
  // Valid passwords:
  "Password123",
  "aB3defgh",
  // Invalid passwords:
  "password123",
  "PASSWORD123",
  "PasswordABC",
  "Pass1",
  "        ",
];

console.log("Password validation tests starting ...");
testPasswords.forEach((password: string) => {
  const isValid: boolean = validatePassword(password);
  console.log(`"${password}" -> ${isValid ? 'Valid' : 'Invalid'}`);
});