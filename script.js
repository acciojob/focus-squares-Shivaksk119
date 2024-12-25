//your JS code here. If required.
let squares = document.querySelectorAll('.square');

squares.forEach((square,index)=>{
	square.addEventListener('mouseover',()=>{
		for(let i=0;i<squares.length;i++) {
			if(i!=index){
				squares[i].style.backgroundColor = '#6F4E37';
			}
		}
	})

	square.addEventListener('mouseout',()=>{
		for(let i=0;i<squares.length;i++) {
			squares[i].style.backgroundColor = '#E6E6FA';
		}
	})
	
})