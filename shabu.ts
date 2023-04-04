export function Shabu(person : number){
  if(person%4 === 0){
      const people = person/4
      console.log(people);
      const price = (person-people)*340
      console.log(price);
      const serviceCharge = 340*0.1*(person-people)
      console.log(serviceCharge);
      const sum = price+serviceCharge;
      return sum
  }else{
      const price = (340*person)
      const serviceCharge = 340*0.1*person  
      console.log(price);
      console.log(serviceCharge);
      const sum = price+serviceCharge;
      return sum
  }
}