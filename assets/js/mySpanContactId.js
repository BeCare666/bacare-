var MySpanContactVal = 0
var infoContactId = document.getElementById('infoContactId');
var iconInSpan = document.getElementById("#bitelephone_fill")
document.getElementById('MySpanContactId').addEventListener('click', function(){
if(MySpanContactVal ==0){
    infoContactId.style.display = 'block';
    MySpanContactVal = 1
    iconInSpan.style.backgroundColor = "red"

}else{
    infoContactId.style.display = 'none';
    MySpanContactVal = 0
}
})