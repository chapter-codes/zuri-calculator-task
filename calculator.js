// A simple Calculator application.

'uses strict'

class Calculator{

	add(){
		let sum=0;
		const inputs=arguments;

		if(inputs){
			for(const key in inputs){
				sum += Number(inputs[key])
			}
		}
		return Number(sum) || sum==0 ? sum :"please ensure the input is a number" 
	}

	subtract(a,b){
		const inputLength=arguments.length
		const input=arguments;
		let diff=0

		if(inputLength!=2){
			return 'please input two numbers'
		}

		diff = Number(input[0]) - Number(input[1])

		return Number(diff) || diff==0? diff :"please ensure the input is a number" 
	}


	multiply(){
		let product=1;
		const inputs =arguments

		if(inputs){
			for(const key in inputs){				
				product *= Number(inputs[key])
			}
		}

		return Number(product)? product :"please ensure the input is a number" 
	}

	divide(a,b){
		const inputLength=arguments.length
		const input=arguments;
		let quotient=0

		if(inputLength!=2){
			return 'please input two numbers'
		}

		quotient = Number(input[0]) / Number(input[1])
		
		if(String(quotient)=='Infinity'){
			return 'please ensure the second input is not zero'
		}

		return Number(quotient) || quotient==0 ? quotient : "please ensure the input is a number"
	}

}

// const calculator = new Calculator()

// console.log(
// 	calculator.add(1,2,3,4,5),
// 	calculator.subtract(6,3),
// 	calculator.multiply(2,3,4,5,6),
// 	calculator.divide(100,1)
// )