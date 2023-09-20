# Michelangeli
Site for the sale of handmade articles like necklaces and bracelets, in this case for a woman who really likes the color pink.
This site is developed started from a template, it is written with HTML, CSS and JQuery with the use of some libraries and is complitely responsive

## File structure
- **css**
  Only css files
- **fonts**
  Fonts of the site
- **images**
  all images, icons and logos of the site, divided in subfolders:
  - articles
  - icons
- **js**
  Only javascript files including internal js, libraries and a file for DB
- **sounds**
  Only mp3 files
 
## Libraries
- **jQuery**
  It is a JavaScript library that makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler
- **fontawesome**
  Internet's icon library and toolkit
- **breakpoints and browser**
  A lightweight library for managing responsive sites and web apps
  
## Database
Not having a server side it was decided to make a database with a js file (***db.js***). <br>
The tables are simple arrays of objects and for each there is a js file that manages it.
- **articles**
  Articles made by the merchant
- **markets**
  All events where the merchant shows his articles live
- **categories**
  This is a simple array of possible article categories

## HTML structure
The site is made in one page, creating the skeleton in HTML and then including parts and information by javascript:
- ***header***
  Simple fixed header where are placed the filter and a button to activate the background sound
- ***introduction*** 
  That contains a short history of the merchant and his contacts
- ***articles***
  Here are loaded the articles from the db by javascript 
- ***footer***
  Simple footer

## Summary
- Demo link: https://davidemurro.github.io/Michelangeli/
- Screenshots:
  ![davidemurro github io_Michelangeli_](https://github.com/DavideMurro/Michelangeli/assets/118051417/957a6549-d354-41fd-8b3a-dce6d0e5f77b)
  ![davidemurro github io_Michelangeli_(2)](https://github.com/DavideMurro/Michelangeli/assets/118051417/cfd90f6f-0126-4e7f-82ce-ad61472fdce3)
  ![davidemurro github io_Michelangeli_(3)](https://github.com/DavideMurro/Michelangeli/assets/118051417/27f32c07-6e72-4f29-8808-3d0490dd8c08)

    
