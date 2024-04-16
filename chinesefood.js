document.addEventListener('DOMContentLoaded', () => {
    const saveCheckboxes = document.querySelectorAll('.saveCheckbox');

    saveCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
        const recipeCard = event.target.closest('.recipe-card');
        const recipeTitle = recipeCard.querySelector('.card-title').innerText;
        const recipeText = recipeCard.querySelector('.card-text').innerText;
        const recipeImage = recipeCard.querySelector('.card-img-top').getAttribute('src');
        const recipe = { title: recipeTitle, text: recipeText, image: recipeImage };

        if (event.target.checked) {
          // Save the recipe to localStorage
          let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
          savedRecipes.push(recipe);
          localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        } else {
          // Optional: Remove the recipe from localStorage if needed
        }
      });
    });
  });