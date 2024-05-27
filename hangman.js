// accept  Hint:believe or come to recognize (a proposition) as valid or correct
// access  Hint:the means or opportunity to approach or enter a place.
// bottle  Hint:pastic or glass used for storing drinks or other liquids.
// relate  Hint:make or show a connection between.
// defend to oppose or resist, as a claim at law; to contest, as a suit.
// design a plan or drawing produced to show the look and function or workings of a building.
let paragraphrandom  =document.querySelector('.insertparagraph')
let resultparanumbesrsandtext = document.querySelector('.resultwithnumbers')
let paragrapharray =["koba",
    " Hint: believe or come to recognize (a proposition) as valid or correct",
    " Hint: the means or opportunity to approach or enter a place.",
    " Hint: pastic or glass used for storing drinks or other liquids.",
    " Hint: make or show a connection between.",
    "Hint:to oppose or resist, as a claim at law; to contest, as a suit",
    "Hint:a plan or drawing produced to show the look and function or workings of a building."
]

    
    
    
    let random = Math.random();
    let randomvalue = 0
    if (random <= 0.16){
        randomvalue = 1
    } else if  (random <= 0.326){
        randomvalue = 2
    } else if  (random <= 0.48){
        randomvalue = 3
    } else if  (random <= 0.66){
        randomvalue = 4
    } else if  (random <= 0.83){
        randomvalue = 5
    } else if  (random <= 1){
        randomvalue = 6}

   console.log(randomvalue );

    let randomvaluet = 0
    if (random <= 0.16){
        randomvaluet = "ACCEPT"
    } else if  (random <= 0.326){
        randomvaluet = "ACCESS"
    } else if  (random <= 0.48){
        randomvaluet = "BOTTLE"
    } else if  (random <= 0.66){
        randomvaluet = "RELATE"
    } else if  (random <= 0.83){
        randomvaluet = "DEFEND"
    } else if  (random <= 1){
        randomvaluet = "DESIGN"}
    
    console.log(randomvaluet )
    let spiletedresult =  randomvaluet.split('')
    console.log(spiletedresult);
   
    

   paragraphrandom.innerHTML=paragrapharray[randomvalue];
   console.log(paragrapharray[randomvalue]);

    let arrraycontinerforthequestion = ["","",""," ",""," "];
    let Numbert = -1;
    let textnumber = 0;
    let correct = 0;
    let notcorrect = 0;
    console.log( Numbert);
    
    
    function button(x) {
       
    
        Numbert=Numbert+1;
        arrraycontinerforthequestion[  Numbert]=x;
       
       
 
       
       
       
     
 
        if(Numbert<5)
        {arrraycontinerforthequestion[  Numbert]=x
            
        }
        
       

         if (Numbert==0){
            console.log("0")
            if(arrraycontinerforthequestion[0]===spiletedresult[0]){
                correct++;
                console.log(correct,"correct")
               } else{
                notcorrect++;
                console.log(notcorrect,"notcorrect");
                reset ()
            
               }
         }
         if (Numbert==1){
            console.log("1");
            if(arrraycontinerforthequestion[1]===spiletedresult[1]){
                correct++;
                console.log(correct,"correct")
            } else{
                notcorrect++;
                console.log(notcorrect,"notcorrect");
                reset ()
                
               }

         }
         if (Numbert==2){
            console.log("2");
            if(arrraycontinerforthequestion[2]===spiletedresult[2]){
                correct++;
                console.log(correct,"correct")
            } else{
                notcorrect++;
                console.log(notcorrect,"notcorrect");
                reset ()
               }

         }
         if (Numbert==3){
            console.log("3");
            if(arrraycontinerforthequestion[3]===spiletedresult[3]){
                correct++;
                console.log(correct,"correct")
            } else{
                notcorrect++;
                console.log(notcorrect,"notcorrect");
                reset ()
               }

         }
         if (Numbert==4){
            console.log("4");
            if(arrraycontinerforthequestion[4]===spiletedresult[4]){
                correct++;
                console.log(correct,"correct")
            } else{
                notcorrect++;
                console.log(notcorrect,"notcorrect");
                reset ()
               }

         }
         if (Numbert==5){
            console.log("5");
            if(arrraycontinerforthequestion[5]===spiletedresult[5]){
                correct++;
                console.log(correct,"correct")
            } else{
                notcorrect++;
                console.log(notcorrect,"notcorrect")
                reset ()
               }
           
         }

         if (notcorrect===1){
            document.querySelector('.head').style.display = "none";
            document.querySelector('.head1').style.display = "none";
         } else if(notcorrect===2){
            document.querySelector('.body').style.display = "none"
         }
         else if(notcorrect===3){
            document.querySelector('.lefthand').style.display = "none";
         }
         else if(notcorrect===4){
            document.querySelector('.righthand').style.display = "none";
         }
         else if(notcorrect===5){
            document.querySelector('.leftlegs').style.display = "none";
         }
         else if(notcorrect===6){
            document.querySelector('.rightlegs').style.display = "none";
            document.querySelector('.failed').style.display = "block";
            notcorrect===0
         }
         if (correct===6){
            document.querySelector('.congra').style.display = "block";
            
         }
      

         
          
       
        document.querySelector('.resultparanumbesrsandtext').innerHTML=`${notcorrect}/6`;
        document.querySelector('.answer1').innerHTML= arrraycontinerforthequestion[0];
        document.querySelector('.answer2').innerHTML= arrraycontinerforthequestion[1];
        document.querySelector('.answer3').innerHTML= arrraycontinerforthequestion[2];
        document.querySelector('.answer4').innerHTML= arrraycontinerforthequestion[3];
        document.querySelector('.answer5').innerHTML= arrraycontinerforthequestion[4];
        document.querySelector('.answer6').innerHTML= arrraycontinerforthequestion[5]; 
    }
    function reset (){
        arrraycontinerforthequestion = ["","",""," ",""," "];
        Numbert = -1;
        
        textnumber = 0;
        console.log(arrraycontinerforthequestion);
        console.log( Numbert);
        console.log(textnumber);

       }

     function   allresetforcongra(){
        window.location.reload();
     }
   
     function  allresetforfailed(){
        window.location.reload();
     }
   
    
    
