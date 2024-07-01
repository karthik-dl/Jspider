// class User{
//     constructor(firstName,lastName,age,salary,role)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.salary = salary;
//         this.role = role;
//         // this.Dob = Dob;
//     }
//     // fullName = () =>`the full  name of the user is ${this.firstName} ${this.lastName}`
//     YOB=()=>`the year of birth of the user ${ new Date().getFullYear()-this.age }`
//     // annualSalary =()=>  `the annual salary of the user ${(this.salary*12/100000)} LPA`
//     annualSalary =()=> {
//         if (this.salary*12<10000000) {
//             return `the annual salary of the user ${(this.salary*12/100000)} LPA`
//         } else {
//             return `the monthly salary of the user ${(this.salary*12/10000000)} LPA`
//         }
//     }

// }
// let User1=new User("Tony","Starck",34,30000,"Developer")
// let User2=new User("virat","kohli",32,40000,"Cricketer")
// // console.table(User1.fullName)
// // console.log(User2.YOB())
// console.log(User2.annualSalary());


class InstagramUser
{
    constructor(username,followers,following,posts,location,relationshipsStatus)
    {
       this.username=username;
       this.followers=followers;
       this.following=following;
       this.posts=posts;
       this.location=location;
       this.relationshipsStatus=relationshipsStatus; 
    }
    fullDeatils = ()=>`the user name is ${this.username}  has ${this.followers} followers and ${this.following} following currently lives in ${this.location}`
    useractivity = ()=>{
        if(this.posts<100)
        {
            return ` user is inactive`
        }
        else if(this.posts>500)
        {
            return `user is addicted`
        }
        else
        {
            return `user is active`
        }
    }
    relationshipsStatus = ()=>
    {
        if(this.relationshipsStatus==single){
            return this.fullDeatils
        }
        else{
            return "better luck next Time"
        }
    }
}
let User1=new InstagramUser("Karthik",243,342,34,"Hassan","Single")
let User2=new InstagramUser("Virat",1000,345,20,"Delhi","Married")
// console.log(User1.fullDeatils())
console.log(User1.fullDeatils())
console.log(User1.useractivity())
console.log(User2.relationshipsStatus())

/*let arr=[10,20,30,40]
//arr[arr.length]=50; push
// arr.length--; pop
function deleteFirst(arr)
{
    //delete first element from array
    for (let i = 0; i < arr.length; i++)
    {
        arr[i]=arr[i+1];
        
    }
    arr.length--;
    console.log(arr);

}
deleteFirst([10,20,30,40]);
// console.log(deleteFirst());*/

// let a=[1,2,3,4]
// function addAtFirst(a,val)
// {    
//     for (let i = a.length; i > 0; i--)
//     {
//         a[i]=a[i-1]
//     }
    
//     a[0]=val
//     console.log(a);

// }
// addAtFirst([1,2,3,4],5)
