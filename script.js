
const recipes = [
  {
    id: 1,
    name: "Creamy Garlic Pasta",
    category: "Dinner",
    time: "25 min  MRP : &#8377 500",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700",
    description: "Creamy pasta with garlic, herbs and parmesan.",
    ingredients: ["200g pasta", "3 garlic cloves", "1 cup cream", "Parmesan", "Olive oil"],
    instructions: "Boil pasta. Sauté garlic in olive oil, add cream and parmesan, then mix with the cooked pasta."
  },
  {
    id: 2,
    name: "Fluffy Pancakes",
    category: "Breakfast",
    time: "15 min  MRP : &#8377 350",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=700",
    description: "Soft golden pancakes perfect for breakfast.",
    ingredients: ["1 cup flour", "1 egg", "3/4 cup milk", "1 tbsp sugar", "1 tsp baking powder"],
    instructions: "Mix the ingredients into a smooth batter. Pour onto a hot greased pan and cook both sides until golden."
  },
  {
    id: 3,
    name: "Fresh Garden Salad",
    category: "Lunch",
    time: "10 min  MRP : &#8377 450",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
    description: "A colorful, crunchy salad with fresh vegetables.",
    ingredients: ["Lettuce", "Cucumber", "Tomatoes", "Olive oil", "Lemon juice"],
    instructions: "Chop the vegetables, toss together, and dress with lemon juice, olive oil, salt and pepper."
  },
  {
    id: 4,
    name: "Chocolate Cake",
    category: "Dessert",
    time: "50 min  MRP : &#8377 600",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700",
    description: "Rich chocolate cake for every sweet craving.",
    ingredients: ["1 cup flour", "1/2 cup cocoa", "2 eggs", "1 cup sugar", "1/2 cup milk"],
    instructions: "Mix the dry and wet ingredients, pour into a cake tin and bake at 180°C until a toothpick comes out clean."
  },
  {
    id: 5,
    name: "Grilled Chicken",
    category: "Dinner",
    time: "35 min  MRP : &#8377 520",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700",
    description: "Juicy grilled chicken seasoned with herbs.",
    ingredients: ["2 chicken breasts", "Garlic", "Paprika", "Lemon juice", "Olive oil"],
    instructions: "Marinate the chicken with spices and oil. Grill until browned and the center reaches 74°C."
  },
  {
    id: 6,
    name: "Berry Smoothie Bowl",
    category: "Breakfast",
    time: "10 min  MRP : &#8377 300",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=700",
    description: "A refreshing smoothie bowl topped with fruit.",
    ingredients: ["1 banana", "1 cup berries", "1/2 cup yogurt", "Granola", "Honey"],
    instructions: "Blend the banana, berries and yogurt. Pour into a bowl and add granola and honey."
  },
  {
    id: 7,
    name: "Margherita Pizza",
    category: "Dinner",
    time: "30 min  MRP : &#8377 500",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700",
    description: "Classic pizza with tomato, mozzarella and basil.",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Fresh basil", "Olive oil"],
    instructions: "Spread tomato sauce over the dough, add mozzarella and bake at 230°C until crisp. Finish with basil."
  },
  {
    id: 8,
    name: "Avocado Toast",
    category: "Breakfast",
    time: "10 min  MRP : &#8377 560",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700",
    description: "Crispy toast topped with creamy avocado.",
    ingredients: ["2 bread slices", "1 ripe avocado", "Lemon juice", "Salt", "Black pepper"],
    instructions: "Toast the bread. Mash avocado with lemon juice and seasoning, then spread over the toast."
  },
  {
    id: 9,
    name: "Vegetable Fried Rice",
    category: "Lunch",
    time: "20 min  MRP : &#8377 530",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700",
    description: "Quick fried rice with colorful vegetables.",
    ingredients: ["2 cups cooked rice", "Carrots", "Peas", "Spring onions", "Soy sauce"],
    instructions: "Stir-fry vegetables, add cooked rice and soy sauce, and toss over high heat until hot."
  },
  {
    id: 10,
    name: "Strawberry Cheesecake",
    category: "Dessert",
    time: "60 min  MRP : &#8377 500",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700",
    description: "Creamy cheesecake finished with strawberries.",
    ingredients: ["Cream cheese", "Sugar", "Biscuits", "Butter", "Strawberries"],
    instructions: "Prepare a biscuit crust, add the cream cheese filling and bake according to your cheesecake recipe. Cool and top with strawberries."
  },
  {
    id: 11,
    name: "Chicken Burger",
    category: "Lunch",
    time: "25 min  MRP : &#8377 300",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
    description: "A delicious burger with a juicy chicken patty.",
    ingredients: ["Burger buns", "Chicken patties", "Lettuce", "Tomato", "Burger sauce"],
    instructions: "Cook the chicken patties thoroughly. Assemble the buns with sauce, lettuce, tomato and chicken."
  },
  {
    id: 12,
    name: "Chocolate Brownies",
    category: "Dessert",
    time: "35 min  MRP : &#8377 230",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700",
    description: "Fudgy chocolate brownies with a rich flavor.",
    ingredients: ["Dark chocolate", "Butter", "Sugar", "2 eggs", "Flour"],
    instructions: "Melt chocolate and butter, mix with sugar, eggs and flour, then bake until the edges are set."
  },
  {
    id: 13,
    name: "Indian Butter Chicken",
    category: "Dinner",
    time: "40 min  MRP : &#8377 440",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700",
    description: "Tender chicken in a rich, creamy tomato gravy.",
    ingredients: ["Chicken", "Tomatoes", "Cream", "Butter", "Garam masala"],
    instructions: "Cook marinated chicken. Prepare a tomato and spice gravy, add butter and cream, then simmer with the chicken."
  },
  {
    id: 14,
    name: "Mango Smoothie",
    category: "Breakfast",
    time: "5 min  MRP : &#8377 330",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=700",
    description: "A refreshing tropical mango drink.",
    ingredients: ["1 ripe mango", "1 cup milk", "Yogurt", "Honey", "Ice"],
    instructions: "Blend mango, milk, yogurt, honey and ice until smooth."
  },
  {
    id: 15,
    name: "Veggie Wrap",
    category: "Lunch",
    time: "15 min  MRP : &#8377 300",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700",
    description: "A fresh wrap filled with vegetables and sauce.",
    ingredients: ["Tortillas", "Lettuce", "Tomatoes", "Cucumber", "Hummus"],
    instructions: "Spread hummus over the tortilla, add chopped vegetables, roll tightly and serve."
  },
  {
    id: 16,
    name: "Blueberry Muffins",
    category: "Dessert",
    time: "30 min  MRP : &#8377 300",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=700",
    description: "Soft muffins packed with juicy blueberries.",
    ingredients: ["Flour", "Blueberries", "Milk", "Sugar", "Baking powder"],
    instructions: "Combine the ingredients gently, fold in blueberries and bake in muffin tins at 180°C until cooked."
  },
  {
    id: 17,
    name: "Pesto Pasta",
    category: "Lunch",
    time: "20 min MRP : &#8377 200",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=700",
    description: "Italian pasta tossed in fragrant basil pesto.",
    ingredients: ["Pasta", "Basil pesto", "Parmesan", "Olive oil", "Cherry tomatoes"],
    instructions: "Cook the pasta, reserve a little cooking water and toss with pesto. Finish with parmesan and tomatoes."
  },
  {
    id: 18,
    name: "French Toast",
    category: "Breakfast",
    time: "15 min  MRP : &#8377 400",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700",
    description: "Golden toast with a sweet cinnamon flavor.",
    ingredients: ["Bread", "2 eggs", "Milk", "Cinnamon", "Maple syrup"],
    instructions: "Dip bread in beaten eggs, milk and cinnamon. Cook in a buttered pan until golden on both sides."
  },
  {
    id: 19,
    name: "Tomato Soup",
    category: "Lunch",
    time: "25 min  MRP : &#8377 250",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700",
    description: "Warm tomato soup with aromatic herbs.",
    ingredients: ["Tomatoes", "Onion", "Garlic", "Vegetable stock", "Cream"],
    instructions: "Sauté onion and garlic, add tomatoes and stock, simmer until soft, blend and season to taste."
  },
  {
    id: 20,
    name: "Lemon Drizzle Cake",
    category: "Dessert",
    time: "45 min  MRP : &#8377 350",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=700",
    description: "A soft citrus cake with a bright lemon flavor.",
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Lemon"],
    instructions: "Mix the cake batter, bake at 180°C until done, then brush with a lemon and sugar drizzle."
  }
];



const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const recipeHeading = document.getElementById("recipeHeading");
const recipeTotal = document.getElementById("recipeTotal");
const emptyMessage = document.getElementById("emptyMessage");
const savedBtn = document.getElementById("savedBtn");
const savedCount = document.getElementById("savedCount");

let activeCategory = "All";
let searchTerm = "";
let showSavedOnly = false;
let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");

function renderRecipes() {
  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory =
      activeCategory === "All" || recipe.category === activeCategory;

    const matchesSearch =
      `${recipe.name} ${recipe.category} ${recipe.description} ${recipe.ingredients.join(" ")}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesSaved =
      !showSavedOnly || savedRecipes.includes(recipe.id);

    return matchesCategory && matchesSearch && matchesSaved;
  });

  recipeGrid.innerHTML = filteredRecipes.map(recipe => `
    <article class="recipe-card">
      <div class="recipe-image">
        <img
          src="${recipe.image}"
          alt="${recipe.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/700x500/f3e8dc/594735?text=Recipe+Photo';"
        >
        <button
          class="favorite-btn ${savedRecipes.includes(recipe.id) ? "is-saved" : ""}"
          data-save="${recipe.id}"
          aria-label="Save ${recipe.name}"
          aria-pressed="${savedRecipes.includes(recipe.id)}"
          type="button"
        >${savedRecipes.includes(recipe.id) ? "♥" : "♡"}</button>
      </div>

      <div class="recipe-info">
        <span class="recipe-category">${recipe.category}</span>
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>

        <div class="recipe-meta">
          <span>◷ ${recipe.time}</span>
          <span>${recipe.difficulty}</span>
        </div>

        <button class="view-recipe" data-view="${recipe.id}" type="button">
          View Recipe →
        </button>
      </div>
    </article>
  `).join("");

  recipeTotal.textContent =
    `${filteredRecipes.length} recipe${filteredRecipes.length === 1 ? "" : "s"}`;

  emptyMessage.hidden = filteredRecipes.length > 0;
  savedCount.textContent = savedRecipes.length;
}

function saveRecipe(id) {
  if (savedRecipes.includes(id)) {
    savedRecipes = savedRecipes.filter(savedId => savedId !== id);
  } else {
    savedRecipes.push(id);
  }

  localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  renderRecipes();
}

function showRecipeDetails(id) {
  const recipe = recipes.find(item => item.id === id);
  if (!recipe) return;

  const ingredients = recipe.ingredients
    .map(item => `<li>${item}</li>`)
    .join("");

  alert(
    `${recipe.name}\n\n` +
    `Category: ${recipe.category}\n` +
    `Cooking time: ${recipe.time}\n\n` +
    `INGREDIENTS\n${recipe.ingredients.map(item => "• " + item).join("\n")}\n\n` +
    `METHOD\n${recipe.instructions}`
  );
}

recipeGrid.addEventListener("click", event => {
  const saveButton = event.target.closest("[data-save]");
  const viewButton = event.target.closest("[data-view]");

  if (saveButton) {
    saveRecipe(Number(saveButton.dataset.save));
  }

  if (viewButton) {
    showRecipeDetails(Number(viewButton.dataset.view));
  }
});

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  searchTerm = searchInput.value.trim();
  showSavedOnly = false;
  recipeHeading.textContent = searchTerm
    ? `Results for "${searchTerm}"`
    : "Recipes you'll love";
  renderRecipes();
  document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll("[data-search]").forEach(link => {
  link.addEventListener("click", () => {
    searchInput.value = link.dataset.search;
    searchTerm = link.dataset.search;
    showSavedOnly = false;
    recipeHeading.textContent = `Results for "${searchTerm}"`;
    renderRecipes();
  });
});

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    showSavedOnly = false;

    document.querySelectorAll("[data-category]").forEach(categoryButton => {
      categoryButton.classList.toggle("active", categoryButton === button);
    });

    recipeHeading.textContent =
      activeCategory === "All"
        ? "Recipes you'll love"
        : `${activeCategory} Recipes`;

    renderRecipes();
  });
});
