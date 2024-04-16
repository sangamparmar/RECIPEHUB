document.addEventListener("DOMContentLoaded", function() {
    const saveRecipeButtons = document.querySelectorAll('.save-recipe-btn');
  
    saveRecipeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');
  
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        savedRecipes.push({ title, description });
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  
        // Update button appearance
        button.classList.remove('btn-primary');
        button.classList.add('btn-success');
        button.innerText = 'Saved';
  
        // Disable button after saving
        button.disabled = true;
  
        alert('Recipe saved successfully!');
      });
    });
  });
  