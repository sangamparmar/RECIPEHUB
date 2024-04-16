// Function to create saved recipe cards
function createSavedRecipeCard(recipeTitle) {
    const card = document.createElement('div');
    card.classList.add('col', 'mb-4');
  
    card.innerHTML = `
      <div class="card recipe-card">
        <div class="card-body">
          <h5 class="card-title">${recipeTitle}</h5>
        </div>
      </div>
    `;
  
    return card;
  }
  
  // Function to render saved recipe cards
  function renderSavedRecipes() {
    const savedRecipesContainer = document.getElementById('savedRecipesContainer');
    if (savedRecipesContainer) {
      const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
      savedRecipes.forEach((recipeTitle) => {
        const card = createSavedRecipeCard(recipeTitle);
        savedRecipesContainer.appendChild(card);
      });
    }
  }
  
  // Render saved recipe cards when the page loads
  window.addEventListener('load', renderSavedRecipes);
  