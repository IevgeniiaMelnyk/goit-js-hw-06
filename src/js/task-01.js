const categoriesEl = document.querySelector('ul[id = "categories"]');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const animalsEL = categoriesEl.children[0];
console.log(`Category: Animals
Elements: ${animalsEL.children[1].children.length}`);

const productsEL = categoriesEl.children[1];
console.log(`Category: Products
Elements: ${productsEL.children[1].children.length}`);

const technologiesEL = categoriesEl.children[2];
console.log(`Category: Technologies
Elements: ${technologiesEL.children[1].children.length}`);
