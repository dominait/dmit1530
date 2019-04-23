# CSS Grid Layout Properties

### Resources  
- [Grid By Example](https://gridbyexample.com/examples/)
- [Chrome Extension](https://chrome.google.com/webstore/detail/gridman-css-grid-inspecto/cmplbmppmfboedgkkelpkfgaakabpicn?hl=en-US)
- [Wes Bos Css Grid](https://cssgrid.io/)
</br>
</br>
</br>
</br>

### Defining A Grid    
- grid-template-columns
- grid-template-rows
- grid-template-areas

```css
  display:grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(4, 15vh)
  grid-template-areas: 
        "nav nav nav"
        "header header header";
```
 </br>
</br>

#### Placing Grid Items
- grid-column
- grid-column-start
- grid-column-end
- grid-row
- grid-row-start
- grid-row-end

```css
 nav{
   /* value by line number */
    grid-column: 1;
    grid-row:1;
}
```  
</br>
</br>

### Grid Area Map 

```css
/* define a grid area map */
grid-template-areas:
  "header header header"
  "nav    main    main"
  "nav    footer   footer"
}

nav{
    grid-area:nav
}

header{
  grid-area:header
}
```
 
 ### Grid Min Max 
These two grid properties automatically make columns.  
auto-fill - grid will keep adding tracks to the end of the grid.  
auto-fit - grid doesn't add track once available space is used up.


### Grid Auto Fit and Auto Fill  
These two grid properties automatically make columns.  
auto-fill - grid will keep adding tracks to the end of the grid.  
auto-fit - grid doesn't add track once available space is used up.

 
 
 
 


## Responsive Grids
- minmax(minval, maxvalue)
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  
grid-template-columns: fit-content(100px)  minmax(180px, 1fr)  fit-content(200px);
```



 