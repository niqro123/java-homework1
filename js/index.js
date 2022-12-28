

                //////// task 1///////



let person = {
name:'ana',
age:28,





}
let brother={

name : 'levan',

age: 21,

}

let text = `${person.name} ${brother.name}ze ${person.age-brother.age} wlit ufrosia`;




console.log(text)



                    //////// task 2  ///////


let student=['john', 'sam','ann', 'will','andrew','joseph','lorelai',
'amelie','den']


let middlestudent=student[student.length -5]

console.log(middlestudent)



            /////// task 3 //////


let student1 = {

firstname:'giorgi',

lastname:'niqacadze',

age:19,

subject:['mathematics','english','history','geography','chemistry'],

roommate:{

fullname:'giorgi gelashvili'

},



}

for(let i=0; i< student1.subject.length;i++){
console.log(student1.subject[i])
    
}

let fullname=student1.firstname + ' ' + student1.lastname

student1.fullname=fullname



let result = `${student1.fullname} aris ${student1.age} wlis da misi roommate aris ${student1.roommate.fullname}`





console.log(result)
            ////// task 4 ////////



let massive=['banana', 'Orange', 'apple', 'mango',2,12]

let i=0


while(i<massive.length-2){


console.log(massive[i]);i++

}












                      ///// task 5 ////


let array=[12,23,43,11,9,2,121,90]


for(let i=0; i<array.length; i++){

if(array[i]>31 && array[i]%2){

    console.log(array[i] ,'element is greater than provided value and is even'  )

}

else if(array[i]<31 && array[i]%2!==0){

console.log(array [i], 'element is less than provided value and is ODD')

}




}











