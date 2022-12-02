# Development

### Link to Deployed Website
https://cutekitty415.github.io/developmentclone/

### Goal and Value of the Application
The goal of this application is for users to buy carefully-curated and high-quality athletic apparel from a variety of different brands. Although there are many good companies that produce athletic sportswear in today's market, it can be difficult for users to navigate through and choose the best products. Therefore, the value of this application is that it saves users time from browsing many different brands' websites and also allows users to choose from only the best products from each brand.

### Usability Principles Considered
Ecommerce websites should be easy to navigate, so the organization of the application was a simple two-column layout with the products on the left-hand side and the Favorites and filters on the right-hand side. In regards to the color scheme, a black/gray/white color palette was selected because product images were imported from many different brands and had varying background colors and styles. A more simple color palette is optimal in order to mesh well with products from all brands in the store. Another usability principle considered was choosing which sorting and filtering arrangements would be most user-friendly. After careful consideration, popularity and price was chosen for sorting while brand and color were chosen for filtering.


### Organization of Components
This application contains two separate React components: Cart and ProductItem. The Cart functions as a list of the products a user has added to favorites,  The ProductItem component is a bootstrap card displaying the information of each particular product, such as the name, brand, color, and price. 

### How Data is Passed Down Through Components

For the Cart component, the list of items in the cart is passed into it as props. For the ProductItem component, two functions, onAddItem and onDeleteItem, are passed into it as props because they handle which actions will occur when the user wants to add or delete the particular product from the Cart.

### How the User Triggers State Changes
The user triggers state changes in two instances: when they add a product to Favorites, and when they select a filter. When a user adds a product to Favorites, it triggers the state change of cartItems, which contains the list of items a user has added to Favorites. Since cartItems is an array, the different states are just the different combinations of items a user has added to Favorites. When the user selects a filter, such as a brand or color, it triggers the state change of whatever type of filter they selected. For example, if the user selects the brand "Alphalete", the type state changes to Alphalete. This state is used in functions selectFilterType and matchesFilterType, which help to filter out products that don't match the type of the current state.

