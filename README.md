

## Food APP 
## Feature
 - Add Food
 - Edit Food
 - Delete Food
## Tech:
 - Next Js
 - React
 - Redux
 - Tailwind Css
 - Daisy UI

## Answer To The Question 2

- Firstly Iterate Through Menu Collections:
  Begin by iterating through each object in the dummyArr array, representing each Menu collection.
- Secondly Iterate Through Categories:
  Within each Menu collection, iterate through the category array to access each category object.
- Thirdly Match IDs with Menu Items:
  For each category, compare the IDs in the menuItems array of the category object with the IDs of menu items in the menuItems array of the Menu collection. When an ID match is found, add the corresponding menu item to the respective category.
- Fourthly Create a Data Structure:
  You can create a new data structure to store the categorized items.

```
const categorizedItems = {
"Starters": [],
"Main Course": [],

};
```

- Populate Categorized Items:
  As you iterate through each Menu collection and category, add the matched menu items to the appropriate category in the categorizedItems data structure.
- And Finally:
  Once you have iterated through all Menu collections and categories, the categorizedItems data structure will contain the specific items that belong to each category based on the matching IDs.
