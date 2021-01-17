todoBtn =  document.querySelector(".btn");
todoBtn.addEventListener("click",addTodo);

function addTodo(e)
{
    e.preventDefault();
    document.getElementById("result123").value= "hellooo";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error1").innerHTML = "";

    //alert("hellooo");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById('num2').value;
    if(isNaN(num1) || num1==="")
    {
        document.getElementById("error1").innerHTML = "**Please enter a valid number.";
    }
    if(isNaN(num2) || num2==="")
    {
        document.getElementById("error2").innerHTML = "**Please enter a valid number.";
    }
    let results = Number(num1)+Number(num2);
    document.getElementById("result123").value= results;
    document.getElementById('num2').value = "";
    document.getElementById('num1').value = "";




}