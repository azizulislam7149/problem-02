const numbers = [21,45,67,980,453,678,346,69,1243,45];
let biggest = numbers[0];
for(let i = 1; i <numbers.length; i++){
    if(numbers[i] > biggest){
        biggest = numbers[i];
    }
}
console.log(biggest);
let secondBiggest = numbers[6];
for(let number of numbers){
    if(number > secondBiggest){
        secondBiggest = number;
    }
}
console.log('second biggest number index 6',secondBiggest);

function biggestNumber(numbers){
    if(!Array.isArray(numbers)){
        return  'this is not an array';
    }
let biggest = numbers[5];
for(const number of numbers){
    if(number > biggest){
        biggest = number;
    }
}
return biggest;
}
const result = biggestNumber(numbers);
console.log('we want to see the biggest number',result);

function showName(data){
const wantToprofession = data.profession;
return wantToprofession;
}
const person = {
    name: 'Md. Azizul islam',
    age : 36,
    profession : 'to be web-developer'
};
const getResult = showName(person);
console.log(getResult);
function calculateCost (income){
    if(typeof income !=='number'){
        return 'invalid input';
    }
    const shopCost =8000;
    const motorCost = 3000;
    const childCost = 10000;
    const otherCost = 5000; 
    const guestCost = 6000;
    const totalCost = shopCost + motorCost + childCost + otherCost +guestCost;
    if(totalCost > income){
        return 'earn more';
    }
    const savings = income - totalCost;
    return savings;

}
const balance = calculateCost(3200);
console.log(balance);

let countArray = [true, false, 'hello', 34, false, true, '34'];
function cheekBoolean(test){
if(!Array.isArray(test) ){
    return ' please provide boolean array';
}
let count = 0;
for(let item of test){
    if(typeof item === 'boolean'){
        count++;
    }
}
return count;
}
const resultCount = cheekBoolean(countArray);
console.log(resultCount);

function rickshawCost(peoples){
    const bus = 50;
    const micro = 15;
     const rickshawRent = 20
    const busRemainMan = peoples% bus;
    const microRemainMan = busRemainMan % micro;
    const rickshawRentMan = microRemainMan * rickshawRent;
    return rickshawRentMan;
}
const totalPeopleRickshawRent = rickshawCost(240);
console.log(totalPeopleRickshawRent);

const person1 ={
    name: 'Azizul islam',
    honours :40, 
    Alim : 30,
    isFFamily : true
}
const person2 ={
    name: 'Abdullah Salman',
    honours :44, 
    Alim : 35,
    isFFamily : false
}
function jobSelection(info){
    if(typeof info !== 'object'){
        return 'invalid object'
    }
    let totalMarks =info.honours + info.Alim;
    if(info.isFFamily){
        totalMarks = totalMarks + (totalMarks * 0.2);
        return totalMarks;
    }

    if(info.isFFamily&& totalMarks >=80){
        return 'you got the job';
    }
    else if(info.isFFamily && totalMarks <80){
        return 'bad luck';
    }
    else if(!info.isFFamily && totalMarks >=80){
        return 'no problem you are selected';
    }
    else{
        !info.isFFamily && totalMarks <80;
        return 'you can not get the job . you will try next time';
    }


}
const getJob = jobSelection(person1);
console.log(getJob);