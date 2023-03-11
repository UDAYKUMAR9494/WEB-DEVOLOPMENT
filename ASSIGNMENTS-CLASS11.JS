function sum(){
let a=[100,200,300,800]

let s=0
for(let i=0;i<a.length;i++)
s=s+a[i]
    console.log(s )
}
sum();


function reverse(){
    let p=121;
    let y=p;
    let rev=0;
    while(y>0)
    {temp=y%10;
    rev=rev*10+temp;
    y=Math.floor(y/10);}

    


if(rev==p){console.log("it is a palindrome")}
else{console.log("it is not palindrom")}
    }


reverse();


function maxmin(){
    let a=[10,20];
    var max=a[0];
    var min=a[0];

    for(i=0;i<a.length;i++){
        if(a[i]>max){
            max =a[i]
           console.log(max,"IT IS A MAX NUMBER")}

        
        else{(a[i]<min)
            min=a[i]
            console.log(min,"it is a min number")}
        }
    }



maxmin();

