"use strict";
 
// 1. Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента (тега <h2>) и количество элементов в категории 
// (всех вложенных в него < li >).

const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);