let span = document.querySelector('.display')
let LengthInput = document.querySelector('#length')
let UpperCase = document.querySelector('#UC')
let lowerCase = document.querySelector('#LC')
let number = document.querySelector('#N')
let symbols = document.querySelector('#S')
let btn = document.querySelector('.generate')
let copy = document.querySelector('.copy')




copy.addEventListener('click',()=>{
   const textarea = document.createElement('textarea');
   let password = span.innerHTML
   if(!password)
   {
      window.alert('There is no password to copy!!')
   }
   textarea.value = password;
   textarea.select()
   document.body.appendChild(textarea)
   navigator.clipboard.writeText(textarea.value)
   textarea.remove()
   copy.setAttribute('title','the text has been copied')



   
})

//getting random upper char
let getRandomUpper = ()=>{
   return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

//getting random lower char
let getRandomLower = ()=>{
   return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

//getting random number in string form
let getRandomNumber = ()=>{
   return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

//getting symbol char
let getRandomSymbol = ()=>{
   sym = '!@#$%^&*(){}[]=<>/,.'

   let randomNumber = Math.floor(Math.random()*20)
   return sym[randomNumber]
}


//object contain the getting functions
let randomFunction = {
   upper: getRandomUpper,
   lower: getRandomLower,
   number: getRandomNumber,
   symbol: getRandomSymbol
}


//generating password
btn.addEventListener('click',()=>{
   hasUpper = UpperCase.checked
   haslower = lowerCase.checked
   hasNumber = number.checked
   hasSymbol = symbols.checked
   length = LengthInput.value
   if (length>20 || length <=0){
     return;

   }
   
 span.innerHTML = generatePass (hasUpper,haslower,hasNumber,hasSymbol,length)
 
      
});



//generating password function
let generatePass = (upper,lower,number,symbol,length)=>{
   let  password = '';
   let checkcounts = upper + lower + number + symbol
   let checkArr = [{upper},{lower},{number},{symbol}].filter(item => Object.values(item)[0])
   
   if(checkcounts==0){
      return ''
   }

   for(let i=0 ; i<length ; i+=checkcounts ){
      checkArr.forEach(type =>{
         const funcName = Object.keys(type)[0];
         password += randomFunction[funcName]()
      })
   
   }

  return password.slice(0,length)
}








