// Accordeon settings
let oneTabopen = false

//First Block
let comp1 = document.getElementById("comp1");
let sub1 = document.getElementById("sub-comp1");
let click1 = 0;
comp1.addEventListener("click",function(){
    if (click1 % 2 == 0 && !oneTabopen )
    {
        oneTabopen = true
        sub1.style.visibility = "visible";
        sub1.style.height = "25%";
        click1++;
    } else {
        oneTabopen = false
        sub1.style.height = "0%";
        sub1.style.visibility= "hidden";
        click1++;
    }

});
//2nd Block
let comp2 = document.getElementById("comp2");
let sub2 = document.getElementById("sub-comp2");
let click2 = 0;
comp2.addEventListener("click",function(){
    if (click2 % 2 == 0 && !oneTabopen )
    {
        oneTabopen = true;
        sub2.style.visibility = "visible";
        sub2.style.height = "25%"
        click2++;
    } else {
        oneTabopen = false
        sub2.style.height = "0%";
        sub2.style.visibility= "hidden";
        click2++;
    }

});
//3nd Block
let comp3 = document.getElementById("comp3");
let sub3 = document.getElementById("sub-comp3");
let click3 = 0;
comp3.addEventListener("click",function(){
    if (click3 % 2 == 0 && !oneTabopen )
    {
        oneTabopen = true;
        sub3.style.visibility = "visible";
        sub3.style.height = "25%";
        click3++;
    } else {
        oneTabopen = false
        sub3.style.height = "0%";
        sub3.style.visibility = "hidden";
        click3++;
    }

});
//3nd Block
let comp4 = document.getElementById("comp4");
let sub4 = document.getElementById("sub-comp4");
let click4 = 0;
comp4.addEventListener("click",function(){
    if (click4 % 2 == 0 && !oneTabopen )
    {
        oneTabopen = true;
        sub4.style.visibility = "visible";
        sub4.style.height = "25%";
        click4++;
    } else {
        oneTabopen = false
        sub4.style.height = "0%";
        sub4.style.visibility = "hidden";
        click4++;
    }

});



