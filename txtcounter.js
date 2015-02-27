//글자수 카운터
function textCounter(field,withspace) {         
	var cntfield = document.getElementById(withspace) 
		cntfield.value = field.value.length;
    var withspace_num = field.value.length;
    var withoutspace_num = field.value.replace(/\s/g,"").length;
    var line = "공백 포함 "+withspace_num+"자 입력됨 | 공백 비포함 "+withoutspace_num+"자 입력됨";
    cntfield.value = line;
    if(CurrentUserVar!=null){
 	saveFormData()
    }
   
}