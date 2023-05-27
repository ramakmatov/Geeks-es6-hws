// Akmatov Ramil F-26
//Lesson 1 HW-1

// ДЗ №1. Простое приложение оценки сервиса.

const rating = Number(prompt('Оцените уровень сервиса от 0 до 10!'));

if (rating > 5 && rating <= 10) {
  console.log('Спасибо за высокую оценку!');
} else if (rating > 0 && rating <= 5) {
  console.log('Мы работаем над улучшением сервиса');
} else {
  console.log('Вы ввели неправильные данные! Попробуйте еще!');
}

// ДЗ №2. Простое программа для вывода дней недели.

const days = prompt('Выберите язык для вывода дней недели! Введите ENG или RUS!');

switch (days) {
  case 'ENG':
    console.log(`"ENG" => Monday, Tuesday, Wednesday, Thursday, Saturday, Sunday`);
    break;
  case 'RUS':
    console.log(`"RUS" => Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье`);
    break;
  default:
    console.log('Вы ввели неправильные данные! Попробуйте еще!');
}
