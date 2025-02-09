const cakes = [
    {
        id: 1,
        name: "Dulce de Leche",
        description: "Rich caramel-flavored cake with dulce de leche frosting",
        image: "/img/cake_img1.webp",
        recipe: {
            ingredients: [
                "2½ cups all-purpose flour",
                "1½ cups granulated sugar",
                "1 cup unsalted butter, softened",
                "4 large eggs",
                "1 cup milk",
                "2 teaspoons baking powder",
                "1 teaspoon vanilla extract",
                "1 can (14 oz) dulce de leche",
                "2 cups heavy cream",
                "½ teaspoon salt"
            ],
            instructions: [
                "Preheat oven to 350°F (175°C) and grease two 9-inch cake pans",
                "Cream butter and sugar until light and fluffy",
                "Add eggs one at a time, beating well after each addition",
                "Mix in vanilla extract",
                "Alternate adding flour mixture and milk to the batter",
                "Pour batter into prepared pans and bake for 25-30 minutes",
                "Cool completely before frosting",
                "Whip heavy cream and fold in dulce de leche for frosting",
                "Assemble cake layers with frosting and drizzle with extra dulce de leche"
            ]
        }
    },
    {
        id: 2,
        name: "Pastel de Nata",
        description: "Portuguese custard tarts with flaky pastry",
        image: "/img/cake_img2.webp",
        recipe: {
            ingredients: [
                "1 package puff pastry",
                "2 cups whole milk",
                "1 cup granulated sugar",
                "6 egg yolks",
                "¼ cup cornstarch",
                "1 vanilla bean or 1 teaspoon vanilla extract",
                "1 cinnamon stick",
                "Lemon peel from 1 lemon",
                "Pinch of salt"
            ],
            instructions: [
                "Roll out puff pastry and cut into circles to fit tart molds",
                "Heat milk with cinnamon stick, vanilla, and lemon peel until almost boiling",
                "Whisk sugar, cornstarch, and egg yolks in a bowl",
                "Slowly pour hot milk into egg mixture while whisking",
                "Return mixture to pan and cook until thickened",
                "Fill pastry shells with custard",
                "Bake at 500°F (260°C) for 12-15 minutes until tops are caramelized",
                "Cool slightly before serving"
            ]
        }
    },
    {
        id: 3,
        name: "Banoffee Pie",
        description: "English dessert pie with bananas, cream, and toffee",
        image: "/img/cake_img3.webp",
        recipe: {
            ingredients: [
                "2 cups graham cracker crumbs",
                "½ cup melted butter",
                "2 cans sweetened condensed milk",
                "4 ripe bananas",
                "2 cups heavy whipping cream",
                "2 tablespoons powdered sugar",
                "1 teaspoon vanilla extract",
                "Grated dark chocolate for garnish"
            ],
            instructions: [
                "Mix graham cracker crumbs with melted butter and press into pie dish",
                "Chill crust for 30 minutes",
                "Simmer unopened cans of condensed milk in water for 3 hours to make toffee",
                "Cool toffee completely",
                "Spread toffee over crust",
                "Layer sliced bananas over toffee",
                "Whip cream with sugar and vanilla until stiff peaks form",
                "Top pie with whipped cream and chocolate shavings",
                "Chill for at least 1 hour before serving"
            ]
        }
    },
    {
        id: 4,
        name: "Choco Lava Cake",
        description: "Warm chocolate cake with molten center",
        image: "/img/cake_img4.webp",
        recipe: {
            ingredients: [
                "8 oz dark chocolate",
                "½ cup unsalted butter",
                "4 large eggs",
                "½ cup granulated sugar",
                "¼ cup all-purpose flour",
                "2 tablespoons cocoa powder",
                "Pinch of salt",
                "Powdered sugar for dusting",
                "Vanilla ice cream for serving"
            ],
            instructions: [
                "Preheat oven to 425°F (220°C) and grease ramekins",
                "Melt chocolate and butter together until smooth",
                "Whisk eggs and sugar until light and fluffy",
                "Fold chocolate mixture into egg mixture",
                "Sift in flour, cocoa powder, and salt",
                "Pour batter into ramekins",
                "Bake for 12-14 minutes until edges are set but center is soft",
                "Let cool for 1 minute, then invert onto plates",
                "Dust with powdered sugar and serve with ice cream"
            ]
        }
    },
    {
        id: 5,
        name: "Alfajores",
        description: "Argentinian sandwich cookies with dulce de leche",
        image: "/img/cake_img5.webp",
        recipe: {
            ingredients: [
                "2¾ cups cornstarch",
                "1½ cups all-purpose flour",
                "2 teaspoons baking powder",
                "1 cup butter, softened",
                "¾ cup granulated sugar",
                "3 egg yolks",
                "1 teaspoon vanilla extract",
                "1 can dulce de leche",
                "Shredded coconut for coating"
            ],
            instructions: [
                "Mix cornstarch, flour, and baking powder",
                "Cream butter and sugar until light and fluffy",
                "Add egg yolks and vanilla",
                "Gradually mix in dry ingredients until smooth dough forms",
                "Chill dough for 30 minutes",
                "Roll out and cut into circles",
                "Bake at 350°F (175°C) for 12-15 minutes",
                "Cool completely, then sandwich with dulce de leche",
                "Roll edges in shredded coconut"
            ]
        }
    },
    {
        id: 6,
        name: "Apple Pie",
        description: "Classic American pie with spiced apples",
        image: "/img/cake_img6.webp",
        recipe: {
            ingredients: [
                "2½ cups all-purpose flour for crust",
                "1 cup cold butter, cubed",
                "¼ cup ice water",
                "6 cups sliced apples",
                "¾ cup granulated sugar",
                "2 tablespoons lemon juice",
                "1 teaspoon ground cinnamon",
                "¼ teaspoon ground nutmeg",
                "¼ teaspoon salt",
                "2 tablespoons butter for filling"
            ],
            instructions: [
                "Make pie crust by cutting butter into flour until crumbly",
                "Add ice water gradually until dough forms",
                "Chill dough for 1 hour",
                "Mix sliced apples with sugar, lemon juice, and spices",
                "Roll out dough and line pie dish",
                "Fill with apple mixture and dot with butter",
                "Cover with top crust, seal edges, and cut vents",
                "Bake at 425°F (220°C) for 45 minutes until golden",
                "Cool before serving"
            ]
        }
    },
    {
        id: 7,
        name: "Rasgulla",
        description: "Indian cheese balls in sugar syrup",
        image: "/img/cake_img7.webp",
        recipe: {
            ingredients: [
                "1 liter whole milk",
                "2 tablespoons lemon juice",
                "2 cups sugar",
                "4 cups water",
                "2 cardamom pods",
                "Rose water for flavoring",
                "Pistachios for garnish"
            ],
            instructions: [
                "Bring milk to a boil and add lemon juice to curdle",
                "Strain and rinse cheese curds",
                "Knead curds until smooth",
                "Form into small balls",
                "Make sugar syrup with water, sugar, and cardamom",
                "Cook cheese balls in simmering syrup for 15-20 minutes",
                "Add rose water",
                "Chill completely",
                "Garnish with pistachios before serving"
            ]
        }
    },
    {
        id: 8,
        name: "Bakso Es Krim",
        description: "Indonesian ice cream balls",
        image: "/img/cake_img8.webp",
        recipe: {
            ingredients: [
                "2 cups vanilla ice cream",
                "1 cup chocolate ice cream",
                "½ cup mochi flour",
                "Cornstarch for dusting",
                "Chocolate sauce",
                "Sprinkles",
                "Chopped nuts"
            ],
            instructions: [
                "Scoop ice cream into balls and freeze until very firm",
                "Prepare mochi coating by cooking mochi flour with water",
                "Dust work surface with cornstarch",
                "Roll out mochi dough thinly",
                "Wrap ice cream balls in mochi coating",
                "Freeze until firm",
                "Serve with chocolate sauce",
                "Garnish with sprinkles and nuts"
            ]
        }
    },
    {
        id: 9,
        name: "Kaiserschmarrn",
        description: "Austrian shredded pancake dessert",
        image: "/img/cake_img9.webp",
        recipe: {
            ingredients: [
                "4 eggs, separated",
                "1¼ cups milk",
                "1 cup all-purpose flour",
                "3 tablespoons sugar",
                "1 teaspoon vanilla extract",
                "Pinch of salt",
                "Butter for cooking",
                "Powdered sugar for dusting",
                "Apple or plum sauce for serving"
            ],
            instructions: [
                "Separate eggs and beat whites until stiff peaks form",
                "Mix egg yolks, milk, flour, sugar, and vanilla",
                "Fold in egg whites gently",
                "Melt butter in a large pan",
                "Pour in batter and cook until golden underneath",
                "Tear into pieces with two forks",
                "Continue cooking until all pieces are golden",
                "Dust with powdered sugar",
                "Serve with fruit sauce"
            ]
        }
    },
    {
        id: 10,
        name: "Cannoli",
        description: "Sicilian pastry tubes with ricotta filling",
        image: "/img/cake_img10.webp",
        recipe: {
            ingredients: [
                "2 cups all-purpose flour",
                "2 tablespoons sugar",
                "¼ cup cold butter",
                "2 eggs",
                "½ cup white wine",
                "2 cups ricotta cheese",
                "1 cup powdered sugar",
                "1 teaspoon vanilla extract",
                "Mini chocolate chips",
                "Pistachios for garnish"
            ],
            instructions: [
                "Mix flour, sugar, and butter until crumbly",
                "Add eggs and wine to form dough",
                "Roll dough very thin",
                "Cut into circles and wrap around cannoli forms",
                "Deep fry until golden brown",
                "Mix ricotta, powdered sugar, and vanilla",
                "Fill cooled shells with ricotta mixture",
                "Dip ends in chocolate chips and pistachios",
                "Serve immediately to maintain crispness"
            ]
        }
    },
    {
        id: 11,
        name: "Flan",
        description: "Spanish caramel custard dessert",
        image: "/img/cake_img11.webp",
        recipe: {
            ingredients: [
                "1 cup sugar for caramel",
                "4 large eggs",
                "2 cups whole milk",
                "1 can sweetened condensed milk",
                "1 teaspoon vanilla extract",
                "Pinch of salt",
                "Fresh berries for garnish"
            ],
            instructions: [
                "Make caramel by melting sugar until golden brown",
                "Pour caramel into ramekins",
                "Whisk eggs, milk, condensed milk, vanilla, and salt",
                "Strain mixture for smoothness",
                "Pour into caramel-lined ramekins",
                "Place in water bath",
                "Bake at 325°F (165°C) for 50-60 minutes",
                "Chill completely",
                "Invert onto plates and garnish with berries"
            ]
        }
    },
    {
        id: 12,
        name: "Panna Cotta",
        description: "Italian cream-based dessert",
        image: "/img/cake_img12.webp",
        recipe: {
            ingredients: [
                "2 cups heavy cream",
                "½ cup sugar",
                "1 vanilla bean",
                "2¼ teaspoons unflavored gelatin",
                "3 tablespoons cold water",
                "Fresh berries",
                "Berry sauce for topping"
            ],
            instructions: [
                "Sprinkle gelatin over cold water and let bloom",
                "Heat cream, sugar, and vanilla bean until hot but not boiling",
                "Remove vanilla bean and scrape seeds into cream",
                "Stir in bloomed gelatin until dissolved",
                "Pour into molds",
                "Refrigerate for at least 4 hours",
                "Dip molds in hot water briefly",
                "Invert onto plates",
                "Serve with berry sauce and fresh berries"
            ]
        }
    },
    {
        id: 13,
        name: "Brownie",
        description: "Rich chocolate fudge brownies",
        image: "/img/cake_img13.webp",
        recipe: {
            ingredients: [
                "1 cup butter",
                "2 cups granulated sugar",
                "4 large eggs",
                "2 teaspoons vanilla extract",
                "1 cup unsweetened cocoa powder",
                "1 cup all-purpose flour",
                "¼ teaspoon salt",
                "1 cup chocolate chips",
                "Nuts (optional)"
            ],
            instructions: [
                "Preheat oven to 350°F (175°C) and line pan with parchment",
                "Melt butter and mix with sugar",
                "Add eggs one at a time, then vanilla",
                "Mix in cocoa powder, flour, and salt",
                "Fold in chocolate chips",
                "Pour into prepared pan",
                "Bake for 30-35 minutes",
                "Cool completely before cutting",
                "Dust with powdered sugar if desired"
            ]
        }
    },
    {
        id: 14,
        name: "Halo Halo",
        description: "Filipino mixed ice dessert",
        image: "/img/cake_img14.webp",
        recipe: {
            ingredients: [
                "Shaved ice",
                "Ube ice cream",
                "Sweetened red beans",
                "Coconut jellies",
                "Sweet palm fruit",
                "Leche flan",
                "Sweetened plantains",
                "Evaporated milk",
                "Purple yam (ube) jam",
                "Toasted rice flakes"
            ],
            instructions: [
                "Layer sweetened beans at the bottom of a tall glass",
                "Add coconut jellies and palm fruit",
                "Add sweetened plantains",
                "Fill glass with shaved ice",
                "Pour evaporated milk over ice",
                "Top with ube ice cream",
                "Add a slice of leche flan",
                "Drizzle with ube jam",
                "Sprinkle with toasted rice flakes",
                "Serve immediately with a long spoon"
            ]
        }
    },
    {
        id: 15,
        name: "Tarte Tatin",
        description: "French upside-down caramelized apple tart",
        image: "/img/cake_img15.webp",
        recipe: {
            ingredients: [
                "6-8 firm apples, peeled and quartered",
                "1 cup sugar",
                "6 tablespoons butter",
                "1 sheet puff pastry",
                "Pinch of salt",
                "1 teaspoon vanilla extract",
                "Whipped cream for serving"
            ],
            instructions: [
                "Make caramel with sugar in an ovenproof skillet",
                "Arrange apple quarters in a circular pattern",
                "Cook apples in caramel until golden",
                "Place puff pastry over apples, tucking edges",
                "Bake at 425°F (220°C) for 20-25 minutes",
                "Let cool for 10 minutes",
                "Invert onto serving plate",
                "Serve warm with whipped cream"
            ]
        }
    },
    {
        id: 16,
        name: "Sacher Torte",
        description: "Classic Viennese chocolate cake",
        image: "/img/cake_img16.webp",
        recipe: {
            ingredients: [
                "6 oz dark chocolate",
                "½ cup butter",
                "6 eggs, separated",
                "1 cup sugar",
                "1 cup all-purpose flour",
                "1 teaspoon vanilla extract",
                "Apricot jam",
                "Chocolate ganache",
                "Whipped cream for serving"
            ],
            instructions: [
                "Melt chocolate and butter together",
                "Beat egg yolks with half the sugar",
                "Whip egg whites with remaining sugar until stiff peaks form",
                "Fold chocolate mixture into yolks",
                "Fold in flour and egg whites alternately",
                "Bake at 350°F (175°C) for 40 minutes",
                "Split cake and spread with warm apricot jam",
                "Cover with chocolate ganache",
                "Chill until set",
                "Serve with whipped cream"
            ]
        }
    },
    {
        id: 17,
        name: "Cendol",
        description: "Malaysian iced dessert with green rice flour jelly",
        image: "/img/cake_img17.webp",
        recipe: {
            ingredients: [
                "Rice flour",
                "Pandan juice",
                "Palm sugar syrup",
                "Coconut milk",
                "Shaved ice",
                "Red beans (optional)",
                "Corn (optional)",
                "Salt to taste"
            ],
            instructions: [
                "Mix rice flour with pandan juice to make green dough",
                "Press dough through special mold into ice water to form jellies",
                "Make palm sugar syrup by melting gula melaka",
                "Layer shaved ice in a glass",
                "Add cendol jellies",
                "Pour coconut milk over ice",
                "Add palm sugar syrup",
                "Add red beans and corn if desired",
                "Serve immediately"
            ]
        }
    },
    {
        id: 18,
        name: "Knafeh",
        description: "Middle Eastern cheese pastry in sweet syrup",
        image: "/img/cake_img18.webp",
        recipe: {
            ingredients: [
                "1 lb kataifi pastry",
                "1 cup melted butter",
                "1 lb akkawi cheese (or mozzarella)",
                "2 cups sugar",
                "1 cup water",
                "1 tablespoon lemon juice",
                "Orange blossom water",
                "Ground pistachios for garnish"
            ],
            instructions: [
                "Shred pastry finely and mix with melted butter",
                "Press half the pastry into a pan",
                "Layer with cheese",
                "Cover with remaining pastry",
                "Bake at 350°F (175°C) until golden brown",
                "Make syrup by boiling sugar and water",
                "Add lemon juice and orange blossom water to syrup",
                "Pour hot syrup over hot knafeh",
                "Garnish with pistachios and serve warm"
            ]
        }
    },
    {
        id: 19,
        name: "Lamingtons",
        description: "Australian chocolate-dipped sponge cake squares",
        image: "/img/cake_img19.webp",
        recipe: {
            ingredients: [
                "3 cups self-raising flour",
                "½ cup butter",
                "¾ cup sugar",
                "3 eggs",
                "1 cup milk",
                "1 teaspoon vanilla extract",
                "4 cups desiccated coconut",
                "4 cups chocolate icing",
                "Raspberry jam (optional)"
            ],
            instructions: [
                "Make vanilla sponge cake and cool completely",
                "Cut cake into squares",
                "Optional: Split squares and fill with jam",
                "Dip each square in chocolate icing",
                "Roll in desiccated coconut",
                "Place on wire rack to set",
                "Repeat with all squares",
                "Let set completely before serving"
            ]
        }
    },
    {
        id: 20,
        name: "Tiramisu",
        description: "Italian coffee-flavored layered dessert",
        image: "/img/cake_img20.webp",
        recipe: {
            ingredients: [
                "6 egg yolks",
                "1 cup sugar",
                "1¼ cups mascarpone cheese",
                "1¾ cups heavy whipping cream",
                "2 packages ladyfinger cookies",
                "1 cup cold espresso",
                "½ cup coffee liqueur",
                "Cocoa powder for dusting",
                "Dark chocolate for garnish"
            ],
            instructions: [
                "Whisk egg yolks and sugar until pale",
                "Add mascarpone and mix until smooth",
                "Whip cream until stiff peaks form",
                "Fold whipped cream into mascarpone mixture",
                "Mix espresso with coffee liqueur",
                "Dip ladyfingers briefly in coffee mixture",
                "Layer soaked ladyfingers in dish",
                "Spread with mascarpone mixture",
                "Repeat layers and dust with cocoa powder",
                "Chill for at least 4 hours"
            ]
        }
    },
    {
        id: 21,
        name: "Baklava",
        description: "Middle Eastern layered phyllo pastry with nuts",
        image: "/img/cake_img21.webp",
        recipe: {
            ingredients: [
                "1 package phyllo dough",
                "4 cups mixed nuts (walnuts, pistachios)",
                "1 cup melted butter",
                "1 teaspoon ground cinnamon",
                "2 cups sugar",
                "1 cup water",
                "½ cup honey",
                "1 tablespoon lemon juice",
                "Orange blossom water"
            ],
            instructions: [
                "Chop nuts finely and mix with cinnamon",
                "Layer phyllo sheets, brushing each with butter",
                "Spread nut mixture over layered phyllo",
                "Continue layering phyllo and butter on top",
                "Cut into diamond shapes",
                "Bake at 350°F (175°C) until golden",
                "Make syrup by boiling sugar, water, and honey",
                "Pour hot syrup over hot baklava",
                "Let cool completely before serving"
            ]
        }
    },
    {
        id: 22,
        name: "Mochi",
        description: "Japanese sweet rice cakes",
        image: "/img/cake_img22.webp",
        recipe: {
            ingredients: [
                "2 cups sweet rice flour (mochiko)",
                "½ cup sugar",
                "1½ cups water",
                "Cornstarch for dusting",
                "Red bean paste filling",
                "Food coloring (optional)",
                "Matcha powder (optional)"
            ],
            instructions: [
                "Mix rice flour and sugar",
                "Add water and mix until smooth",
                "Steam mixture for 20 minutes",
                "Knead until smooth and elastic",
                "Dust work surface with cornstarch",
                "Divide dough into portions",
                "Flatten each portion and add filling",
                "Pinch edges to seal",
                "Shape into smooth balls"
            ]
        }
    },
    {
        id: 23,
        name: "Créme Brûlée",
        description: "French vanilla custard with caramelized sugar top",
        image: "/img/cake_img23.webp",
        recipe: {
            ingredients: [
                "2 cups heavy cream",
                "1 vanilla bean",
                "¼ cup sugar",
                "4 egg yolks",
                "Additional sugar for topping",
                "Pinch of salt",
                "Fresh berries for garnish"
            ],
            instructions: [
                "Heat cream with vanilla bean until hot",
                "Whisk egg yolks with sugar",
                "Slowly add hot cream to egg mixture",
                "Strain mixture into ramekins",
                "Place in water bath",
                "Bake at 300°F (150°C) for 30-35 minutes",
                "Chill for at least 2 hours",
                "Sprinkle sugar on top",
                "Caramelize sugar with torch",
                "Serve immediately"
            ]
        }
    },
    {
        id: 24,
        name: "Churros",
        description: "Spanish fried dough pastry",
        image: "/img/cake_img24.webp",
        recipe: {
            ingredients: [
                "1 cup water",
                "½ cup butter",
                "¼ teaspoon salt",
                "1 cup all-purpose flour",
                "3 eggs",
                "Oil for frying",
                "½ cup sugar",
                "1 teaspoon ground cinnamon",
                "Chocolate sauce for dipping"
            ],
            instructions: [
                "Boil water, butter, and salt",
                "Add flour all at once and stir until smooth",
                "Remove from heat and let cool slightly",
                "Beat in eggs one at a time",
                "Pipe dough into hot oil",
                "Fry until golden brown",
                "Drain on paper towels",
                "Roll in cinnamon sugar",
                "Serve with chocolate sauce"
            ]
        }
    },
    {
        id: 25,
        name: "Pavlova",
        description: "Australian/New Zealand meringue dessert",
        image: "/img/cake_img25.webp",
        recipe: {
            ingredients: [
                "4 egg whites",
                "1 cup superfine sugar",
                "1 teaspoon vinegar",
                "1 teaspoon cornstarch",
                "1 teaspoon vanilla extract",
                "2 cups whipped cream",
                "Fresh fruit for topping",
                "Passion fruit pulp"
            ],
            instructions: [
                "Beat egg whites until soft peaks form",
                "Gradually add sugar, beating until glossy",
                "Fold in vinegar, cornstarch, and vanilla",
                "Shape into a circle on parchment paper",
                "Bake at 250°F (120°C) for 1½ hours",
                "Turn off oven and let cool completely",
                "Top with whipped cream",
                "Arrange fresh fruit on top",
                "Drizzle with passion fruit"
            ]
        }
    },
    {
        id: 26,
        name: "Cheesecake",
        description: "Classic New York style cheesecake",
        image: "/img/cake_img26.webp",
        recipe: {
            ingredients: [
                "2 cups graham cracker crumbs",
                "½ cup melted butter",
                "4 packages cream cheese",
                "1½ cups sugar",
                "4 eggs",
                "1 cup sour cream",
                "1 tablespoon vanilla extract",
                "Fresh berries for topping",
                "Berry sauce"
            ],
            instructions: [
                "Mix crumbs and butter for crust",
                "Press into springform pan",
                "Beat cream cheese and sugar until smooth",
                "Add eggs one at a time",
                "Mix in sour cream and vanilla",
                "Pour over crust",
                "Bake at 325°F (165°C) for 1 hour",
                "Let cool, then chill overnight",
                "Top with berries and sauce"
            ]
        }
    },
    {
        id: 27,
        name: "Gulab Jamun",
        description: "Indian milk-solid balls in sugar syrup",
        image: "/img/cake_img27.webp",
        recipe: {
            ingredients: [
                "1 cup milk powder",
                "¼ cup all-purpose flour",
                "¼ teaspoon baking soda",
                "2 tablespoons ghee",
                "Milk for kneading",
                "2 cups sugar",
                "1 cup water",
                "Cardamom pods",
                "Rose water",
                "Pistachios for garnish"
            ],
            instructions: [
                "Mix milk powder, flour, and baking soda",
                "Add ghee and knead with milk into soft dough",
                "Shape into small balls",
                "Make sugar syrup with water and cardamom",
                "Deep fry balls until golden",
                "Add hot balls to hot syrup",
                "Add rose water to syrup",
                "Let soak for at least 30 minutes",
                "Garnish with pistachios"
            ]
        }
    },
    {
        "id": 28,
        "name": "Black Forest",
        "description": "Classic German chocolate cake with cherries and whipped cream",
        "image": "/img/cake_img28.webp",
        "recipe": {
          "ingredients": [
            "2 cups all-purpose flour",
            "2 cups granulated sugar",
            "¾ cup unsweetened cocoa powder",
            "2 teaspoons baking soda",
            "1 teaspoon salt",
            "2 eggs",
            "1 cup whole milk",
            "½ cup vegetable oil",
            "2 teaspoons vanilla extract",
            "1 cup hot strong coffee",
            "2 cans pitted dark cherries in syrup",
            "2 cups heavy whipping cream",
            "¼ cup powdered sugar",
            "1 teaspoon vanilla extract",
            "Chocolate shavings for garnish"
          ],
          "instructions": [
            "Preheat oven to 350°F (175°C) and grease two 9-inch cake pans",
            "Mix flour, sugar, cocoa, baking soda, and salt in a large bowl",
            "Add eggs, milk, oil, and vanilla; beat on medium speed for 2 minutes",
            "Stir in hot coffee until well combined (batter will be thin)",
            "Pour into prepared pans and bake for 30-35 minutes",
            "Cool completely, then split each layer horizontally",
            "Drain cherries, reserving syrup for brushing layers",
            "Whip cream with powdered sugar and vanilla until stiff peaks form",
            "Layer cake with whipped cream and cherries between each layer",
            "Frost outside with remaining whipped cream",
            "Garnish with chocolate shavings and cherries"
          ]
        }
      },
      {
        "id": 29,
        "name": "Tres Leches Cake",
        "description": "Traditional Latin American sponge cake soaked in three milks",
        "image": "/img/cake_img29.webp",
        "recipe": {
          "ingredients": [
            "1½ cups all-purpose flour",
            "1 teaspoon baking powder",
            "½ cup unsalted butter",
            "1 cup white sugar",
            "5 eggs",
            "1 teaspoon vanilla extract",
            "For milk mixture:",
            "1 can evaporated milk (12 oz)",
            "1 can condensed milk (14 oz)",
            "1 cup heavy cream",
            "For topping:",
            "2 cups heavy whipping cream",
            "¼ cup powdered sugar",
            "Ground cinnamon for garnish"
          ],
          "instructions": [
            "Preheat oven to 350°F (175°C) and grease a 9x13 inch pan",
            "Sift flour and baking powder together",
            "Cream butter and sugar until light and fluffy",
            "Add eggs one at a time, beating well after each addition",
            "Stir in vanilla extract",
            "Fold in flour mixture gently",
            "Pour into prepared pan and bake for 30 minutes",
            "Cool completely, then pierce entire cake with fork",
            "Mix three milks together and pour over cake slowly",
            "Refrigerate for at least 3 hours or overnight",
            "Whip cream with powdered sugar until stiff peaks form",
            "Spread over cake and sprinkle with cinnamon"
          ]
        }
      },
      {
        "id": 30,
        "name": "Sticky Toffee Pudding",
        "description": "A classic British dessert made with moist date sponge cake and rich toffee sauce.",
        "image": "/img/cake_img30.webp",
        "recipe": {
          "ingredients": [
            "For the pudding:",
            "1 cup (200g) pitted dates, finely chopped",
            "1 cup (240ml) boiling water",
            "1 teaspoon baking soda",
            "1¾ cups (220g) all-purpose flour",
            "1 teaspoon baking powder",
            "½ teaspoon salt",
            "¼ cup (60g) unsalted butter, softened",
            "¾ cup (150g) granulated sugar",
            "2 large eggs",
            "1 teaspoon vanilla extract",
            "For the toffee sauce:",
            "½ cup (120g) unsalted butter",
            "1 cup (200g) brown sugar",
            "1 cup (240ml) heavy cream",
            "1 teaspoon vanilla extract",
            "Pinch of salt"
          ],
          "instructions": [
            "Preheat the oven to 350°F (175°C). Grease a 9-inch baking dish.",
            "In a bowl, combine the chopped dates, boiling water, and baking soda. Let sit for 10 minutes.",
            "In a separate bowl, whisk together the flour, baking powder, and salt.",
            "In a large mixing bowl, cream the butter and sugar until light and fluffy. Add the eggs one at a time, then mix in the vanilla extract.",
            "Gradually add the flour mixture to the butter mixture, mixing until just combined.",
            "Fold in the date mixture until evenly incorporated.",
            "Pour the batter into the prepared baking dish and bake for 30–35 minutes, or until a toothpick inserted into the center comes out clean.",
            "For the toffee sauce: In a saucepan, melt the butter over medium heat.",
            "Add the brown sugar, heavy cream, vanilla extract, and salt. Stir until the sugar dissolves.",
            "Bring to a gentle boil and simmer for 3–5 minutes, until the sauce thickens slightly.",
            "Once the pudding is baked, poke holes all over the top with a skewer and pour half of the toffee sauce over it.",
            "Let the pudding absorb the sauce for 10 minutes.",
            "Serve warm with the remaining toffee sauce drizzled on top, and optionally with vanilla ice cream or custard."
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
displayCakes(cakes);

document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCakes = cakes.filter(cake => 
        cake.name.toLowerCase().includes(searchTerm) || 
        cake.description.toLowerCase().includes(searchTerm)
    );
    displayCakes(filteredCakes);
});

window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target === modal) {
        closeModal();
    }
}