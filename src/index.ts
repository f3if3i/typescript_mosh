let user: [number, string] = [1, 'Mosh']
user.push(1)

// const small = 1;
// const medium = 2
// const large = 3

const enum Size { Small = 0, Medium = 1, Large = 2 }
let mySize: Size = Size.Medium


function calculateTax(income: number, taxYear?: number): number {
	if((taxYear || 2022) < 2022) {
		return income * 1.2
	}
	return income * 1.3

}

function calculateTax1(income: number, taxYear : number =2022): number {
	if(taxYear < 2022) {
		return income * 1.2
	}
	return income * 1.3

}


calculateTax(10_000, 2022)

let employee : { 
	readonly id: number,
	name: string, 
	retire: (date: Date) => void
} = { 
	id: 1, 
	name: "Mosh",
retire: (date: Date) => {
	console.log(date)
} }
