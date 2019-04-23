1. Grid Auto Fit and Auto Fill
grid auto fit exact fit
auto fill fills in space in the row with grid cells
footer{
    grid-column: auto/-1;
}


Responsive Grids
minmax(minval, maxvalue)
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  

fit-content
grid-template-columns: fit-content(100px)  minmax(180px, 1fr)  fit-content(200px);


Grid Alignment
-
justify-items
align-items

justify-content
align-content

align-self
justify-self

justify row axis
align  column axis

unlike flexbox they do not swith.

css tricks article css grid.