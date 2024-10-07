const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let prim="";
  let primeArray=[];
  for(let  i=0;i<numbers.length;i++)
  { 
   let  prime =true;
    for(let j=2;j<numbers[i];j++)
    {
        if(numbers[i]%j===0)
        {
            prime =false;

        }

    }
    if(prime===true)
    {
     primeArray.push(numbers[i])
    }
  }
  let max=primeArray[0];
  let min=primeArray[0];
  let sum=0;
  for(let i=1;i<primeArray.length;i++)
  {
    if(primeArray[i]>max)
    {
        max=primeArray[i];
    }
    if(primeArray[i]<min)
        {
            min=primeArray[i];
        }
    sum +=primeArray[i];

  }
  console.log("Min is " +min , "max is " +max , "sum is  "+ sum);
  