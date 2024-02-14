console.log("helloworld");

const name="jay"
let email="jaydave@gmail.com" 
var phno=123
let state
console.table(["jay","dave","sanjay"])
console.table([name,email,phno,state])
console.log(name,'\n',email,phno)

/*
in earlier times js interpreter was integrated within the browser only and it did not have any standalone interpreter , in morden times we have standalone js interpreter

Ryan Dahl created node, which is js runtime and deno js/typescript runtime
we can run js on github codespaces 
steps:
open github
create new repo
click on code 
codespaces
options->view->command pallete
search container
add dev container config files(type container)
search for node js and javascript enviroment
select default version 
add on some additional tools
click ok 

to print something in js use console.log
you can print multiple data seperated by comma 
to print new line write escape character
console.log(var1,'/n',var2)

to print values of multiple variables,constants into a table format use
console.table([var1,var2,var3])
parameter should be of array type
we can also provide values directly inside the array i.e
console.table(["value1","Value2"])

to decalre variable or constants
3 keywords->const,let,var
const creates constant , we can not change the value of a constant
let is used to create variables we can change the value of a let varible 
var is also used to create variables , but it has a block scope issue thats why we use let
in older versions var was used
*/