const word=document.getElementById("input")
function reverseString(str)
{
    return str.split("").reverse().join("")
}
function check(){
    const value=word.value
    const rword=reverseString(value)
    if(value === rword)
    {
        alert("Palindrome")
    }else{
        alert("Not a Palindrome")
    }
    input.value=""
}