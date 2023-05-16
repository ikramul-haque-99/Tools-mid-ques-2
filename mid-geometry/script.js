//for triangle
let b_of_triangle,h_of_triangle;
function area_of_triangle()
{
    b_of_triangle = document.getElementById("value_of_b_triangle").value;
    h_of_triangle = document.getElementById("value_of_h_triangle").value;
    document.getElementById("Show_result").innerHTML = "Area of triangle is()=" + 0.5*b_of_triangle*h_of_triangle;
}
//for rectangle
let b_of_rectangle,l_of_rectangle;
function area_of_rectangle()
{
    b_of_rectangle = document.getElementById("value_of_b_rectangle").value;
    l_of_rectangle = document.getElementById("value_of_l_rectangle").value;
    document.getElementById("Show_result").innerHTML = "Area of rectangle is( )=" + b_of_rectangle*l_of_rectangle;
}

//for rhombus 

let b_of_rhombus,h_of_rhombus;
function area_of_rhombus()
{
    b_of_rhombus = document.getElementById("value_of_b_triangle").value;
    h_of_rhombus = document.getElementById("value_of_h_triangle").value;
    document.getElementById("Show_result").innerHTML = "Area of triangle is()=" + 0.5*b_of_triangle*h_of_triangle;
}