//The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sorted_ages = ages.sort();
const min_age = sorted_ages[0];
const max_age = sorted_ages[sorted_ages.length-1];
const median_age = sorted_ages[Math.floor(sorted_ages.length/2)];
let sum = 0;
for(const age of sorted_ages){
    sum += age;
}
let average_age = sum/sorted_ages.length;
const range = sorted_ages[sorted_ages.length-1]-sorted_ages[0];
const value1 = sorted_ages[0]-average_age;
const value2 = sorted_ages[sorted_ages.length-1]-average_age;
console.log(Math.abs(value1));
console.log(Math.abs(value2));

//Slice the first ten countries from the countries array
let tenCountries = countries.slice(0,10);

//Find the middle country(ies) in the countries array
let middleCountries = countries.slice(Math.floor(countries.length/2),Math.floor(countries.length/2)+1);

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(countries.length);
if((countries.length-1)%2==0){
    var firstHalf = countries.slice(0,(countries.length+1)/2);
    var secondHalf = countries.slice((countries.length+1)/2, countries.length);
}else{
    var firstHalf = countries.slice(0,Math.max((countries.length+1)/2));
    var secondHalf = countries.slice(Math.max((countries.length+1)/2));
}
