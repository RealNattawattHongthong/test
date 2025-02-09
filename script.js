const cakes = [
    {
        id: 1,
        name: "Dulce de Leche",
        description: "Rich, moist chocolate cake with chocolate ganache",
        image: "/img/cake_img1.webp",
        recipe: {
            ingredients: [
                "2 cups all-purpose flour",
                "2 cups sugar",
                "3/4 cup unsweetened cocoa powder",
                "2 teaspoons baking soda",
                "1 teaspoon baking powder",
                "1 teaspoon salt",
                "2 eggs",
                "1 cup milk",
                "1/2 cup vegetable oil",
                "2 teaspoons vanilla extract",
                "1 cup hot water"
            ],
            instructions: [
                "Preheat oven to 350°F (175°C)",
                "Mix all dry ingredients in a large bowl",
                "Add eggs, milk, oil, and vanilla",
                "Stir in hot water last",
                "Pour batter into prepared pans",
                "Bake for 30-35 minutes"
            ]
        }
    },
    {
        id: 2,
        name: "Pastel de Nata",
        description: "Light and fluffy vanilla cake with buttercream frosting",
        image: "/img/cake_img2.webp",
        recipe: {
            ingredients: [
                "3 cups cake flour",
                "1 cup butter, softened",
                "2 cups sugar",
                "4 eggs",
                "2 teaspoons vanilla extract",
                "1 vanilla bean, scraped",
                "1 cup milk",
                "2 teaspoons baking powder"
            ],
            instructions: [
                "Preheat oven to 350°F (175°C)",
                "Cream butter and sugar",
                "Add eggs one at a time",
                "Mix in vanilla extract and bean",
                "Alternate adding flour and milk",
                "Bake for 25-30 minutes"
            ]
        }
    },
    {
        id: 3,
        name: "Banoffee Pie",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img3.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 4,
        name: "Choco Lava Cake",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img4.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 5,
        name: "Alfajores",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img5.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 6,
        name: "Apple Pie",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img6.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 7,
        name: "Rasgulla",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img7.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 8,
        name: "Bakso Es Krim",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img8.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 9,
        name: "Kaiserschmarrn",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img9.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 10,
        name: "Cannoli",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img10.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 11,
        name: "Flan",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img11.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 12,
        name: "Panacotta",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img12.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 13,
        name: "Brownie",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img13.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 14,
        name: "Halo Halo",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img14.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 15,
        name: "Tarte Tatin",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img15.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 16,
        name: "Sacher Torte",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img16.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 17,
        name: "Cendol",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img17.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 18,
        name: "Knafeh",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img18.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 19,
        name: "Lamingtons",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img19.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 20,
        name: "Tiramisu",
        description: "Rich, moist chocolate cake with chocolate ganache",
        image: "/img/cake_img20.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 21,
        name: "Baklava",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img21.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 22,
        name: "Mochi",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img22.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 23,
        name: "Créme Brûlée",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img23.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 24,
        name: "Churros",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img24.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 25,
        name: "Pavlova",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img25.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 26,
        name: "Cheesecake",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img26.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 27,
        name: "Gulab Jamun",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img27.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 28,
        name: "Black Forest",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img28.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 29,
        name: "Tres Leeches Cake",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img29.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    },
    {
        id: 30,
        name: "Red Velvet Dream",
        description: "Smooth red velvet cake with cream cheese frosting",
        image: "/img/cake_img30.webp",
        recipe: {
            ingredients: [
                "2½ cups flour",
                "1½ cups sugar",
                "1 teaspoon cocoa powder",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1½ cups vegetable oil",
                "1 cup buttermilk",
                "2 eggs",
                "2 tablespoons red food coloring",
                "1 teaspoon vinegar",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix dry ingredients",
                "Combine wet ingredients",
                "Mix wet and dry ingredients",
                "Pour into cake pans",
                "Bake for 30 minutes"
            ]
        }
    }
];

function showRecipe(cake) {
    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('modalContent');
    document.body.classList.add('modal-open');
    
    modalContent.innerHTML = `
        <div class="space-y-6">
            <div>
                <h2 class="text-2xl font-bold text-gray-800">${cake.name}</h2>
                <p class="text-gray-600 mt-1">${cake.description}</p>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Ingredients</h3>
                <ul class="list-disc pl-5 space-y-1">
                    ${cake.recipe.ingredients.map(ingredient => 
                        `<li class="text-gray-600">${ingredient}</li>`
                    ).join('')}
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Instructions</h3>
                <ol class="list-decimal pl-5 space-y-2">
                    ${cake.recipe.instructions.map(instruction => 
                        `<li class="text-gray-600">${instruction}</li>`
                    ).join('')}
                </ol>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('recipeModal').classList.add('hidden');
    document.body.classList.remove('modal-open');
}

function createCakeCard(cake) {
    return `
        <div class="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
             onclick="showRecipe(cakes[${cake.id - 1}])">
            <div class="square-image-container">
                <img src="${cake.image}" alt="${cake.name}" class="square-image">
            </div>
            <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800">${cake.name}</h3>
                <p class="text-gray-600 mt-2">${cake.description}</p>
            </div>
        </div>
    `;
}

function displayCakes(cakesToShow) {
    const cakeGrid = document.getElementById('cakeGrid');
    cakeGrid.innerHTML = cakesToShow.map(cake => createCakeCard(cake)).join('');
}

// Initial display
displayCakes(cakes);

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCakes = cakes.filter(cake => 
        cake.name.toLowerCase().includes(searchTerm) || 
        cake.description.toLowerCase().includes(searchTerm)
    );
    displayCakes(filteredCakes);
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target === modal) {
        closeModal();
    }
}