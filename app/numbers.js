//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

console.log(num10+Number(string8)+one);

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
var three = [];
for(var j = 20; j <= 100; j++){
    if ((j/3) == Math.floor((j/3))){
        three[j] = j;
    };
};
console.log(three);
//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

var total = 0;
for(var j = 0; j < scores.length; j++){
    total = total+scores[j];
}
console.log(scores);
console.log((total/scores.length));