const cocktails = [
  {
    id: 0,
    name: "Martini",
    image: "https://images.unsplash.com/photo-1565423529726-201d2924dde4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A classic cocktail made with gin and dry vermouth, typically served straight up and garnished with an olive or a lemon twist.",
    instructions: "Stir 60ml of gin and 15ml of dry vermouth with ice. Strain into a chilled cocktail glass. Garnish with an olive or a lemon twist."
  },
  {
    id: 1,
    name: "Margarita",
    image: "https://images.unsplash.com/photo-1634003311194-152e30e732f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description: "A popular cocktail made with tequila, lime juice, and orange liqueur, served with a salted rim and often garnished with a lime wedge.",
    instructions: "Shake 60ml of tequila, 30ml of orange liqueur, and 30ml of lime juice with ice. Strain into a salt-rimmed glass over ice or straight up. Garnish with a lime wedge."
  },
  {
    id: 2,
    name: "Mojito",
    image: "https://plus.unsplash.com/premium_photo-1664297582916-7ceb3954e89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A refreshing Cuban cocktail made with white rum, mint, lime juice, and soda water.",
    instructions: "Muddle 6 mint leaves and 15ml of simple syrup in a highball glass. Add 45ml of white rum and 30ml of lime juice. Fill with ice and top with soda water. Stir gently and garnish with more mint."
  },
  {
    id: 3,
    name: "Old Fashioned",
    image: "https://images.unsplash.com/photo-1621873495884-845a939892d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A classic cocktail made with bourbon or rye whiskey, sugar, bitters, and a citrus peel. Served over ice in an old-fashioned glass.",
    instructions: "Stir a sugar cube, a dash of Angostura bitters, and a splash of water in an old-fashioned glass until the sugar dissolves. Add 60ml of bourbon and some ice cubes. Stir until chilled and garnish with an orange peel."
  },
  {
    id: 4,
    name: "Manhattan",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A classic cocktail made with whiskey, sweet vermouth, and bitters, typically served in a chilled cocktail glass and garnished with a cherry.",
    instructions: "Stir 60ml of rye whiskey, 30ml of sweet vermouth, and a dash of Angostura bitters with ice. Strain into a chilled cocktail glass. Garnish with a maraschino cherry."
  },
  {
    id: 5,
    name: "Negroni",
    image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    description: "A bitter and complex Italian cocktail made with gin, sweet vermouth, and Campari, typically served on the rocks with an orange peel garnish.",
    instructions: "Stir 30ml of gin, 30ml of Campari, and 30ml of sweet vermouth with ice. Strain into an old-fashioned glass over ice. Garnish with an orange peel."
  },
  {
    id: 6,
    name: "Daiquiri",
    image: "https://images.unsplash.com/photo-1630541010111-1bd604c9aba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description: "A classic rum cocktail made with white rum, lime juice, and sugar or simple syrup, typically served straight up.",
    instructions: "Shake 60ml of white rum, 30ml of lime juice, and 15ml of simple syrup with ice. Strain into a chilled cocktail glass. Garnish with a lime wedge."
  },
  {
    id: 7,
    name: "Espresso Martini",
    image: "https://images.unsplash.com/photo-1526962093464-db85c516ba74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    description: "A modern cocktail made with vodka, espresso, and coffee liqueur, served in a chilled cocktail glass with three coffee bean garnish.",
    instructions: "Shake 60ml of vodka, 30ml of espresso, and 15ml of coffee liqueur with ice. Strain into a chilled cocktail glass. Garnish with three coffee beans."
  },
  {
    id: 8,
    name: "Cosmopolitan",
    image: "https://images.unsplash.com/photo-1617524124781-38a0e1d71ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    description: "A popular and fruity cocktail made with vodka, triple sec, cranberry juice, and lime juice, typically served in a martini glass with a lime wheel garnish.",
    instructions: "Shake 45ml of vodka, 15ml of triple sec, 30ml of cranberry juice, and 15ml of lime juice with ice. Strain into a chilled martini glass. Garnish with a lime wheel."
  },
  {
    id: 9,
    name: "Gimlet",
    image: "https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
    description: "A simple and classic cocktail made with gin and lime juice, typically served in a chilled cocktail glass with a lime wedge garnish.",
    instructions: "Shake 60ml of gin and 15ml of lime juice with ice. Strain into a chilled cocktail glass. Garnish with a lime wedge."
  },
  {
    id: 10,
    name: "Sidecar",
    image: "https://images.unsplash.com/photo-1547595429-da06b6a5080a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description: "A classic and elegant cocktail made with cognac, Cointreau, and lemon juice, typically served in a chilled cocktail glass with a sugared rim.",
    instructions: "Shake 45ml of cognac, 30ml of Cointreau, and 15ml of lemon juice with ice. Strain into a chilled cocktail glass with a sugared rim. Garnish with a lemon twist."
  },
  {
    id: 11,
    name: "Sazerac",
    image: "https://images.unsplash.com/photo-1547383698-faaaf2368d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    description: "A historic cocktail made with rye whiskey, absinthe, and Peychaud's bitters, typically served in a chilled old-fashioned glass with a lemon peel garnish.",
    instructions: "Rinse a chilled old-fashioned glass with absinthe and discard the excess. Stir 60ml of rye whiskey, a sugar cube, and a few dashes of Peychaud's bitters with ice. Strain into the prepared glass. Garnish with a lemon peel."
  },
  {
    id: 12,
    name: "French 75",
    image: "https://images.unsplash.com/photo-1664459826230-5952f6f7eed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A bubbly and refreshing cocktail made with gin, lemon juice, sugar, and champagne, typically served in a chilled flute glass with a lemon twist garnish.",
    instructions: "Shake 30ml of gin, 15ml of lemon juice, and 15ml of simple syrup with ice. Strain into a chilled flute glass. Top with champagne and garnish with a lemon twist."
  },
  {
    id: 13,
    name: "Whiskey Sour",
    image: "https://images.unsplash.com/photo-1541546006121-5c3bc5e8c7b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    description: "A tangy and sweet cocktail made with whiskey, lemon juice, and sugar, typically served in a chilled old-fashioned glass with a cherry and orange slice garnish.",
    instructions: "Shake 60ml of whiskey, 30ml of lemon juice, and 15ml of simple syrup with ice. Strain into a chilled old-fashioned glass over ice. Garnish with a cherry and an orange slice."
  },
  {
    id: 14,
    name: "Pina Colada",
    image: "https://images.unsplash.com/photo-1607644536940-6c300b5784c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A tropical and creamy cocktail made with rum, pineapple juice, and coconut cream, typically served blended or shaken with ice in a hurricane glass with a pineapple wedge and a cherry garnish.",
    instructions: "Blend or shake 60ml of rum, 90ml of pineapple juice, and 30ml of coconut cream with ice. Strain into a hurricane glass over ice. Garnish with a pineapple wedge and a cherry."
  }
];
const CocktailData = {
  cocktails
};

export { CocktailData as C };
//# sourceMappingURL=HeroCocktailsData-c74faad4.mjs.map
