function fizzbuzz(){
for(let $i=1; $i <= 151; $i++)
{
 if($i % 3 == 0 && $i % 5 == 0)
 {
 	console.log("FizBuzzz");
 }
 else if($i % 3 == 0)
 {
 	console.log("Fiz");
 }
 else if($i % 5 == 0)
 {
 	console.log("Buzz");
 }
 else
 {
 	console.log($i);
 }

}

}