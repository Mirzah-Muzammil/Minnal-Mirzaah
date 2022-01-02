function displayNum(val){
document.getElementById('out').value=document.getElementById('out').value+val


}
function displayClear(){
    document.getElementById('out').value=''

}
function eqaulClicked(){
var text=document.getElementById("out").value
var result=eval(text)
document.getElementById("out").value=result
}