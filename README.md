# Dashn Design System

This is the design system for Dashn. It uses Ladle to showcase the different components and allows us to test components before putting them into production. 

## How to run

Make sure you have `yarn` installed and run `yarn` in your terminal. 

Once you've installed all the required packages, run `yarn ladle serve` to spin up the ladle server. (This hsould be accessible via localhost:61000)

## Folder structure

All stories/components should go in `src/Ladle`. If it is a single component (i.e., a button), then it should go into `src/Ladle/Components/ComponentName`. If it is a page (Seeing the layout of components), then it should go in `src/Ladle/Pages/PageName`
