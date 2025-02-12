package main;

import(
	"fmt";
)
type Car struct {
	Id int
	Number string
	Model string
	Type string
}
func main(){
	car1 := Car{Id:101,Number:"TN48 27878",Model:"Ambasister",Type:"Sedan"}
	fmt.Println(car1)
	fmt.Println(car1.Type)

	var cars[] Car = [] Car {
		{Id:101,Number:"TN48 27878",Model:"Ambasister",Type:"Sedan"},
		{Id:102,Number:"KA09 C8756",Model:"Toyota Innove",Type:"SUV"},
	}
	fmt.Println(cars)

	var car2* Car =&car1
	fmt.Println(car2.Model)
	/*fmt.Println("Hello World!!!")
     first := 10
	 second := 20
	 sum := first + second


	salaries :=[] float32 {1.0,2.0}
	fmt.Println(sum)
	fmt.Println(salaries) */

}