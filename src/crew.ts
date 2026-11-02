/*
Mission 👨‍🚀
Ты создаёшь систему проверки данных экипажа космической станции.

Что нужно сделать 📘
Создай программу, которая:

Создаёт переменные:

crewName
crewAge
hasAccess
Создаёт функцию printCrewInfo, которая:

принимает имя, возраст и статус доступа
выводит информацию в консоль
Добавь в код минимум ДВЕ строки, которые должны вызывать ошибки типизации TypeScript.

Примеры:

присвоение строки числовой переменной
передача неправильного типа в функцию
Закомментируй ошибочные строки.
Пример ✨
Вывод: Crew member: Alex Age: 29 Access: true

Требования ✅
Использовать строгую типизацию
Использовать функцию
Продемонстрировать ошибки TypeScript
Ошибочные строки должны быть закомментированы
 */

const crewName: string = "Alex";
const crewAge: number = 29;
const hasAccess: boolean = true;



const printCrewInfo = (
    name: string,
    age: number,
    access: boolean
): void => {
    console.log(`Crew member: ${name} Age: ${age} Access: ${access}`);
}

printCrewInfo(crewName, crewAge, hasAccess);



//  Ошибка 1: crewAge = "twenty-nine";

// Ошибка 2: printCrewInfo(98765, crewAge, hasAccess);
