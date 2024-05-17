const categoriesEl = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);

  const categoryItems = category.querySelectorAll('ul li').length;
  console.log(`Elements: ${categoryItems}`);
});
    


