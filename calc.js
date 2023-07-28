function btnclick(symbol)
{
    document.getElementById("screen").value+=symbol;
}
function clrscreen()
{
    document.getElementById("screen").value=null;
}
function backscr()
{
    var value=document.getElementById("screen").value;
    document.getElementById("screen").value=value.substr(0, value.length-1);
}
function btnequal()
{
    var val= document.getElementById("screen").value
    var result=eval(val)
    document.getElementById("screen").value= result;
}