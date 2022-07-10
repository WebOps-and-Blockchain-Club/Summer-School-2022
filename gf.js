i1 = document.getElementById("i1")
i2 = document.getElementById("i2")
i3 = document.getElementById("i3")
i4 = document.getElementById("i4")

function e1(){
    if(i1.value == "Your Answer"){i1.setSelectionRange(0,0); i1.focus()}
    i1.style.color="black"
    document.getElementById("q1").style = "border-bottom-color:rgb(199, 197, 197)"
    change("i1")
    change("i2")
    change("i3")
    change("i4")
    if(i1.value == "Your Answer")i1.value = ""
}

function e2(){
    i2.style.color="black"
    document.getElementById("q2").style = "border-bottom-color:rgb(199, 197, 197)"
    change("i1")
    change("i2")
    change("i3")
    change("i4")
    if(i2.value == "Your Answer")i2.value = ""
}

function e3(){
    i3.style.color="black"
    document.getElementById("q3").style = "border-bottom-color:rgb(199, 197, 197)"
    change("i1")
    change("i2")
    change("i3")
    change("i4")
    if(i3.value == "Your Answer")i3.value = ""
}

function e4(){
    i4.style.color="black"
    document.getElementById("q4").style = "border-bottom-color:rgb(199, 197, 197)"
    change("i1")
    change("i2")
    change("i3")
    change("i4")
    if(i4.value == "Your Answer")i4.value = ""
}

function change(s){
    id = document.getElementById(s)
    if(!id.value){id.style.color="gray"; id.value = "Your Answer"}
}

function print(){
    if(check()){
        console.log(i1.value)
        console.log(i2.value)
        console.log(i3.value)
        console.log(i4.value)
    }
    else{
        console.log("Please fill required entries")
    }
}

function highlight(s){
    id = document.getElementById(s)
    id.style = "border-bottom-color:red"
}

function check(){
    ch=true;
    if(i1.value =="" || i1.value == "Your Answer"){ch=false; highlight("q1")}
    if(i2.value =="" || i2.value == "Your Answer"){ch=false; highlight("q2")}
    if(i3.value =="" || i3.value == "Your Answer"){ch=false; highlight("q3")}
    if(i4.value =="" || i4.value == "Your Answer"){ch=false; highlight("q4")}
    return ch;
}