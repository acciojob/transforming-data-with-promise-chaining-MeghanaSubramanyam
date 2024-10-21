//your JS code here. If required.
let btn=document.getElementById("btn");
let input=document.getElementById("ip");
let output=docmunet.getElementById("output");
btn.addEventListener("click",function pro(){
	const inputValue=input.value;
	console.log(inputValue);
	})

let promise=new Promise((res,rej)=>{
	setTimeout(()=>{
		res(inputValue)
	},2000)
})
promise.then((result)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(result*2);
		},1000)
	})
})

promise.then((result)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(result-3);
		},1000)
	})
})
promise.then((result)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(result/2);
		},1000)
	})
})
promise.then((result)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(result+10);
		},1000)
	})
})
.then((result)=>{
	output.textContent=`Result:${result}`
})
.catch((e)=>{
	console.log(e)
})