//Declare an empty array
let array = [];

//Declare an array with more than 5 number of elements
let array2 = [1,2,3,4,5,6];

//Find the length of your array
let array2Length = array2.length;

//Get the first item, the middle item, and the last item of the array
const firstItem = array2[0];
const middleItem = array2[Math.floor(array2.length/2)];
const lastItem = array2[array2.length-1];

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['SomeText', 1, 2, 3, 4, 'SomeMoreText'];
let mixedDataTypesLength = mixedDataTypes.length;

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length/2)];
let lastCompany = itCompanies[itCompanies.length-1];
console.log(firstCompany+' '+middleCompany+' '+lastCompany);

//Print out each company
console.log(itCompanies.toString());

//Change each company name to uppercase one by one and print them out
for(const element of itCompanies){
   console.log(element.toString().toUpperCase());
}

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
const sentence = itCompanies.slice(0, 6).join(', ') + ' and ' + itCompanies[itCompanies.length - 1] + ' are big IT companies.';
console.log(sentence);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let certainCompany = 'Google';
let checkCertainCompany = itCompanies.includes(certainCompany);
checkCertainCompany == true
    ? console.log(certainCompany + ' is found.')
    : console.log(certainCompany + ' is not found.');

//Filter out companies which have more than one 'o' without the filter method
let filteredCompanies  = [];
for(const element of itCompanies){
    let toCheck = element.toString().split('');
    let count = 0;
    for(const character of toCheck){
        if(character === 'o'){
            count++;
        }
    }
    if(count >= 2){
        filteredCompanies.push(element);
    }
}

//Sort the array using sort() method
itCompanies.sort();

//Reverse the array using reverse() method
itCompanies.reverse();

//Slice out the first 3 companies from the array
let firstThreeSlice = itCompanies.slice(0,3);

//Slice out the last 3 companies from the array
let lastThreeSlice = itCompanies.slice(itCompanies.length-3,itCompanies.length);

//Slice out the middle IT company or companies from the array
let middleSlice = itCompanies.slice(Math.floor(itCompanies.length/2), Math.floor(itCompanies.length/2)+1);

//Remove the first IT company from the array
itCompanies.shift();

//Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length/2), 1);

//Remove the last IT company from the array
itCompanies.pop();

//Remove all IT companies
itCompanies.splice(0,itCompanies.length);