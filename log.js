//Given a string and a symbol. Find the number of occurrences of the symbol in the string.
function Symbol(x,z) {
    let count = 0
     let X=x+''
     for(let i = 0 ; i<X.length ; i++){
         if(X[i]===z){
             count++
         }
     }
   return  count
     
 }
 //2 Given a string. Check whether the string is palindrome or not.
 function Text(x){
    let newstr='';
     let X=String(x)
     for(let i = X.length-1 ; i>=0 ; i--){
         newstr=newstr+X[i]
     }
     if(newstr===X){
         return 'yes'} else {
         return 'no'
         }
     return
 }
 // Given a string and symbols. Change first symbol by the second one in the string.
 function Simbol(text,x,y) { 
    let newstr = ''
     for(let i = 0 ; i<text.length ; i++){
         if(text[i]===x){
             str= str+ y
             
         }else{
             newstr=str+ text[i]
         }
     
         
     } return newstr
 }
 //4 4. Print the following number pattern:
 function Simbol(x) { debugger
    let str = ''
     for(let i = 1;  i <=x ; i++)
         { console.log(str = str + i)
          
             
         } if (true){
         for(i=x-1 ; i>0;i--){
             
             console.log(str=(str-str%10)/10 )
         }
         }
     
         
      return 
 }