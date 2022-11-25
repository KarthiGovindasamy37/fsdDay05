//1.odd number
let oddn = function(arr){
    return arr.filter(ele=>
     ele % 2 !==0)
}
let non=[1,2,3,4,5,6];
//console.log(oddn(non));

//2.Titlecase
let Titlecase = function(arr){
    let b=[];
    let c;
    for(let ele of arr){
    ele=ele.toLowerCase().split(" ");
    for(let i=0;i<ele.length;i++){
    ele[i]=ele[i].charAt(0).toUpperCase() + ele[i].slice(1);
    }
    c=ele.join(" ");
    b.push(c);
    }
    return b;
}
    let strarr=["guvi geek","java script","html"];
    //console.log(Titlecase(strarr));
    //3.sum of all numbers
    let sum = function(arr){
        let a=+'';
        for(let d of arr){
            a= a+ d;
        }
        return a;
    }
    let numarr =[1,2,3,4,5,6,7,8,9,10];
    //console.log(sum(numarr));
    //4.palindrome
    let ispalindrome = function(arr){
        let b=[];
        let c=[];
        for(let ele of arr){
            let a=ele.split('').reverse().join('');
            b.push(a);
        }
        for(i=0;i<arr.length;i++){
            if(arr[i]===b[i]) {
                c.push(arr[i]);

            }
        
    }
            return c;
        }
        let palin=["wow","malayalam","hai"];
        console.log(ispalindrome(palin));
        //5.remove dublicates
        const finddubs = arry =>{
            original = arry.filter((item, index) => arry.indexOf(item) === index);
            return original;
            }
            
            let dubs=["hai","how","are","hai"];
            console.log(finddubs(dubs));
        
        
       //6.prime numbers
       
        const newArray=[1,3,4,2,9,5,10];
        const myPrime= arr =>
        arr.filter(num=>{
        for(let i=2;i<num;i++){
        if(num%i===0){
        return false;
          }
        }
        return num>1;
        });
        //console.log(myPrime(newArray));
        //7.rotate array by k times
        let rotate = (arr,k) =>{
            for(let i=0;i<k;i++){
            arr.unshift(arr.pop());
            console.log(arr);
            }
        }
        let array=[1,2,3,4,5,6,7,8,9];
        console.log(rotate(array,2));

        //8.median of two numbers 
        let getmedian=(ar1,ar2)=>{
            ar1=ar1.sort((a,b)=>a-b);
            ar2=ar2.sort((a,b)=>a-b);
            let le=ar1.length;
            let l=ar1.length/2;
            let res=[];
            if(le%2==0){
                res.push(ar1[l-1],ar1[l]);
                res.push(ar2[l-1],ar2[l]);
            }
            else{
                res.push(ar1[Math.floor(l)]);
                res.push(ar2[Math.floor(l)]);
            }
            return res;

             }
              let are =[1,2,3,4,5,6,7];
              let aree =[7,8,9,10,11,12,13];
              console.log(getmedian(are,aree));


        //arrow functions
        //1.odd number
        let oddnn = (arr)=>{
            return arr.filter(ele=>
             ele % 2 !==0)
        }
        let nonn=[1,2,3,4,5,6];
        //console.log(oddnn(nonn));

    //2.Titlecase
    let Titlecasse = (arr)=>{
    let b=[];
    let c;
    for(let ele of arr){
      ele=ele.toLowerCase().split(" ");
    for(let i=0;i<ele.length;i++){
    ele[i]=ele[i].charAt(0).toUpperCase() + ele[i].slice(1);
    }
    c=ele.join(" ");
    b.push(c);
    }
    return b;
    }
    let strarrr=["guvi geek","java script","html"];
    console.log(Titlecasse(strarrr));

    //3.sum of all numbers
    let summ = (arr)=>{
        let a=+'';
        for(let d of arr){
            a= a+ d;
        }
        return a;
    }
    let numarrr =[1,2,3,4,5,6,7,8,9,10];
    //console.log(sum(numarr));

    //4.palindrome
    let ispalindromme = (arr)=>{
        let b=[];
        let c=[];
        for(let ele of arr){
            let a=ele.split('').reverse().join('');
            b.push(a);
        }
        for(i=0;i<arr.length;i++){
            if(arr[i]===b[i]) {
                c.push(arr[i]);

            }
        
    }
            return c;
        }
        let palinn=["wow","malayalam","hai"];
        console.log(ispalindrome(palin));

        //5.remove dublicates
        const finddubss = arry =>{
            original = arry.filter((item, index) => arry.indexOf(item) === index);
            return original;
            }
            
            let dubss=["hai","how","are","hai"];
            console.log(finddubss(dubss));

        //6.prime numbers
        const newArrayy=[1,3,4,2,9,5,10];
        const myPrimme= arr =>
        arr.filter(num=>{
        for(let i=2;i<num;i++){
        if(num%i===0){
        return false;
          }
        }
        return num>1;
        });
        //console.log(myPrimme(newArrayy));

        //7.rotate array by k times
        let rotatte = (arr,k) =>{
            for(let i=0;i<k;i++){
            arr.unshift(arr.pop());
            console.log(arr);
            }
        }
        let arrayy=[1,2,3,4,5,6,7,8,9];
        console.log(rotatte(arrayy,2));

        //IIFE 
        //1.rotate array by k times
        (rotate=function(arr,k){
            for(let i=0;i<k;i++){
                arr.unshift(arr.pop());
                console.log(arr);
            }
        })();
        let roar=[1,2,3,4,5,6,7,8];
        rotate(roar,2);


        //2.sum of all numbers
        (sum=function(ele){
        let a=+'';
        for(let d of ele){
            a= a+ d;
        }
        console.log(a);
        })();
    let numa =[1,2,3,4,5,6,7,8,9,10];
      sum(numa);
      //4.
      
        //warmup programs
        //1.get positive nos
        let getp = (arr) =>{
            return arr.filter((num) => num>=0) 
            }
            let ara = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
            //console.log(getp(ara));
        //2.power of two
        let pow=(num)=>{
            let b=[];
            for(let i=0;i<=num;i++){
            let c= Math.pow(2,i);
            b.push(c);
            }
            return b;
            }
            
            console.log(pow(2));
        //3.sum of comma delimited string
        let sumcsv=str=>{
            let a=str.split(",").map(x=>+x);
             let sum= a.reduce((x,y)=>{
              return x+y;
            });
            return sum;
            }
            let b="1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
            console.log(sumcsv(b));
        //4.get opposite
        let getop = num =>{
            if(Number.isInteger(num)){
            return num * -1;
            }
            return -1;
            }
            console.log(getop("5a"));

        




    








        