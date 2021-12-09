"use strict";
 
// 1. Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента (тега <h2>) и количество элементов в категории 
// (всех вложенных в него < li >).

totalCategories.forEach (element => {
  const categoryTitle = element.querySelector('h2');
  const numberOfElements = element.querySelectorAll('li');

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${numberOfElements.length}`);
} )