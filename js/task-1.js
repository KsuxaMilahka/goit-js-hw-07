const categoryId = document.querySelector('#categories');
console.log(`Number of categories: ${categoryId.length}`);



const categoriesEl= categoryId.querySelectorAll('.item');
categoriesEl.forEach(category => {

    const categoryName = category.querySelector('h2');
    console.log(`Category: ${categoryName.textContent}`);

    const categoryItems = category.querySelectorAll('li');
    console.log(`Elements: ${categoryItems.length}`);
})

    


