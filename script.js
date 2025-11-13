//your JS code here. If required.
const inputs = document.querySelectorAll('.code')

inputs[0].focus();

//forward typing
inputs.forEach((input, index)=>{
	//handle the input event
	input.addEventListener('input', (e)=>{
		const value = e.target.value;

		//only allow one digit
		if(value.length>1){
			e.target.value = value.slice(0,1)
		}

		if(value.length===1 && index<inputs.length-1){
			inputs[index+1].focus();
		}
	})

	//handling keydown for backspace
	input.addEventListener('keydown', (e)=>{
		if(e.key=== 'Backspace'){
			if(e.target.value === '' && index>0){
				e.preventDefault()
				inputs[index-1].focus();
				
			}else{
				e.target.value="";
			}
		}
	})
})