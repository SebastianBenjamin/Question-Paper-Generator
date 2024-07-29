const scienceQuestions = [
    "What is the powerhouse of the cell?",
    "What is the process by which plants make their own food?",
    "What is the basic unit of life?",
    "What is the function of the ribosome?",
    "How do vaccines work to protect against diseases?",
    "What is DNA and what is its role in genetics?",
    "What are the main differences between prokaryotic and eukaryotic cells?",
    "How does natural selection contribute to evolution?",
    "What are the stages of the cell cycle?",
    "What is the difference between mitosis and meiosis?",
    "What is the periodic table and who created it?",
    "What is the difference between an ionic bond and a covalent bond?",
    "What is the law of conservation of mass?",
    "What is a catalyst and how does it work?",
    "What is the pH scale and what does it measure?",
    "What is Avogadro's number?",
    "How are elements classified into groups and periods in the periodic table?",
    "What is an acid-base reaction?",
    "What is the difference between an endothermic and an exothermic reaction?",
    "What are isotopes?",
    "What is Newton's First Law of Motion?",
    "What is the formula for calculating force?",
    "What is the principle of conservation of energy?",
    "What are the three laws of thermodynamics?",
    "What is the difference between speed and velocity?",
    "What is the theory of relativity?",
    "How does a simple electric circuit work?",
    "What is the difference between potential energy and kinetic energy?",
    "What is the Doppler effect?",
    "How do lenses and mirrors affect light?",
    "What are the three main layers of the Earth?",
    "How does the water cycle work?",
    "What causes earthquakes?",
    "What is the difference between weather and climate?",
    "How are sedimentary rocks formed?",
    "What is the greenhouse effect?",
    "What is plate tectonics?",
    "What are the main types of volcanoes?",
    "What are the stages of the rock cycle?",
    "How do ocean currents affect global climate?",
    "What is the Big Bang theory?",
    "How are stars formed?",
    "What is a black hole?",
    "What are the main types of galaxies?",
    "What is the difference between a comet and an asteroid?",
    "How does the moon affect tides on Earth?",
    "What is the Hubble Space Telescope and what has it discovered?",
    "What are exoplanets?",
    "What is dark matter and dark energy?",
    "How does the solar system stay in balance?"
  ];
  const mathQuestions = [
    "What is the value of pi?",
    "What is the Pythagorean theorem?",
    "What is an integer?",
    "What is the difference between a rational and an irrational number?",
    "What is the quadratic formula?",
    "What is the area of a circle?",
    "What is the formula for the circumference of a circle?",
    "What is a prime number?",
    "What is the value of the square root of 16?",
    "What is the slope-intercept form of a linear equation?",
    "What is the difference between mean, median, and mode?",
    "What is the formula for the volume of a cylinder?",
    "What is the sum of the angles in a triangle?",
    "What is the factorial of a number?",
    "What is the difference between permutations and combinations?",
    "What is the value of e?",
    "What is the difference between a scalar and a vector?",
    "What is the binomial theorem?",
    "What is the distance formula?",
    "What is an asymptote?",
    "What is the difference between a function and a relation?",
    "What is the derivative of a function?",
    "What is the integral of a function?",
    "What is the limit of a function?",
    "What is a logarithm?",
    "What is the difference between arithmetic and geometric sequences?",
    "What is a matrix?",
    "What is the determinant of a matrix?",
    "What is a vector space?",
    "What is an eigenvalue?",
    "What is a complex number?",
    "What is the polar form of a complex number?",
    "What is a differential equation?",
    "What is a partial derivative?",
    "What is the chain rule in calculus?",
    "What is the power rule in calculus?",
    "What is the product rule in calculus?",
    "What is the quotient rule in calculus?",
    "What is an infinite series?",
    "What is the convergence of a series?",
    "What is a probability distribution?",
    "What is a random variable?",
    "What is the difference between independent and dependent events?",
    "What is Bayes' theorem?",
    "What is the central limit theorem?",
    "What is a normal distribution?",
    "What is standard deviation?",
    "What is variance?",
    "What is a confidence interval?",
    "What is hypothesis testing?"
  ];
  const gkQuestions = [
    "Who was the first President of the United States?",
    "What is the capital of France?",
    "Who wrote 'To Kill a Mockingbird'?",
    "What is the largest planet in our solar system?",
    "What year did World War II end?",
    "What is the longest river in the world?",
    "Who painted the Mona Lisa?",
    "What is the smallest country in the world?",
    "Who is known as the 'Father of Computers'?",
    "What is the hardest natural substance on Earth?",
    "Who was the first person to walk on the moon?",
    "What is the capital of Japan?",
    "What is the chemical symbol for gold?",
    "What is the largest ocean on Earth?",
    "Who discovered penicillin?",
    "What is the tallest mountain in the world?",
    "Who is the author of the Harry Potter series?",
    "What is the currency of the United Kingdom?",
    "What is the fastest land animal?",
    "What is the largest continent?",
    "Who invented the telephone?",
    "What is the capital of Australia?",
    "What is the main ingredient in guacamole?",
    "Who was the first female Prime Minister of the United Kingdom?",
    "What is the national sport of Canada?",
    "What is the smallest bone in the human body?",
    "What is the capital of Brazil?",
    "Who developed the theory of relativity?",
    "What is the largest mammal in the world?",
    "What is the boiling point of water in Celsius?",
    "What is the capital of Egypt?",
    "Who wrote 'Pride and Prejudice'?",
    "What is the currency of Japan?",
    "Who painted the Sistine Chapel ceiling?",
    "What is the most spoken language in the world?",
    "Who was the first woman to win a Nobel Prize?",
    "What is the capital of Italy?",
    "What is the largest desert in the world?",
    "Who wrote 'The Odyssey'?",
    "What is the capital of India?",
    "What is the national flower of Japan?",
    "Who was the first President of India?",
    "What is the name of the longest river in Africa?",
    "What is the chemical symbol for water?",
    "Who is known as the 'Iron Lady'?",
    "What is the currency of the United States?",
    "Who was the first man to reach the South Pole?",
    "What is the capital of Russia?",
    "Who wrote '1984'?",
    "What is the largest island in the world?"
  ];
      

var s = [];
var m = [];
var g = [];
var v;
var tms=0;
var num=0;
var sl = 0;var vv=0;
var questions=[];

function start() {
console.log("started");
  
   gk=document.getElementById('gk').value;
   sci=document.getElementById('sci').value;
   mat=document.getElementById('mat').value;
  
   if((gk>50||sci>50||mat>50)||(gk<1||sci<1||mat<1)){
    alert(" Number of Questions under a domain should be 1-50");
    return 0;
   }
   else if(document.getElementById('hed').value.trim()===""||document.getElementById('shed').value.trim()===""){
    alert("Heading and Sub heading is Required !");
    return 0;
   }
   else{
    document.getElementById('print').style.display="flex";
    document.getElementById('questions').style.display="block";
 
    document.getElementById('result').style.display="block"
    document.getElementById('copy').style.display="block";
    document.getElementById('clr').style.display="block";
    document.getElementById('result').innerHTML="Total No.of Questions:"+ (Number(gk)+Number(mat)+Number(sci));
   s=[];
   m=[];
   g=[];
    sl=0;
    vv=0;

    document.getElementById("questions").innerHTML = "";
    document.getElementById("questions").innerHTML +=  "<h1 style='text-align:center;'>"+document.getElementById('hed').value+ "</h1>";
    document.getElementById("questions").innerHTML +=  "<h2 style='text-align:center;'><u>"+document.getElementById('shed').value+ "</u> <h5 id='tm'style='text-align:center;'></h5></h2>";
    document.getElementById("questions").innerHTML +=  "<h5 style='text-align:center;'>"+"PART-A" +"<p id='pa'></p></h5>";
    while (s.length < sci) {
        v = Math.floor(Math.random() * 50); 
        if (!s.includes(v)) {
            sl = sl + 1;
            vv= ( vv+1);
            s.push(v);
            
            document.getElementById("questions").innerHTML += "<p>"+sl+"."+scienceQuestions[v] + "</p>";
            questions.push(sl+"."+scienceQuestions[v] );

        }
    }
    document.getElementById('pa').innerHTML="      MARKS:"+vv*2+" (2 Marks Each)";
    tms=tms+(vv*2);
    document.getElementById("questions").innerHTML +=  "<h5 style='text-align:center;'>"+"PART-B"+ "<p id='pb'></p></h5>" ;
    vv=0;
    while (m.length < mat) {
        v = Math.floor(Math.random() * 50); 
        if (!m.includes(v)) {
            sl = sl + 1;
            vv=vv+1;
            m.push(v);

            document.getElementById("questions").innerHTML +=  "<p>"+sl+"."+mathQuestions[v] + "</p>";
            questions.push(sl+"."+mathQuestions[v]);
           
        }
    }
    document.getElementById('pb').innerHTML="      MARKS:"+vv*3+" (3 Marks Each)";
    tms=tms+(vv*3);
    document.getElementById("questions").innerHTML +=  "<h5 style='text-align:center;'>"+"PART-C"+ "<p id='pc'></p></h5>" ;
vv=0;
    while (g.length < gk) {
        v = Math.floor(Math.random() * 50); 
        if (!g.includes(v)) {
            sl = sl + 1;
            vv=vv+1;
            g.push(v);

            document.getElementById("questions").innerHTML +=  "<p>"+sl+"."+gkQuestions[v] + "</p>" ;
            questions.push(sl+"."+gkQuestions[v]);
        }
    }
    document.getElementById('pc').innerHTML="      MARKS:"+vv*5+" ( 5Marks Each)";
   
    tms=tms+(vv*5);
    vv=0;
  }
  console.log("ended");
  document.getElementById('tm').innerHTML="TOTAL MARKS:"+tms+" Total No.of Questions:"+ (Number(gk)+Number(mat)+Number(sci));
}

  function clr(){
 
    document.getElementById("questions").innerHTML ="";  
    document.getElementById('questions').style.display="none";
    document.getElementById('print').style.display="none";
    document.getElementById('result').style.display="none"
    document.getElementById('copy').style.display="none";
    document.getElementById('clr').style.display="none";
    document.getElementById('gk').value="";
    document.getElementById('sci').value="";
    document.getElementById('mat').value="";
    var alertBox = document.getElementById('customAlert1');
    alertBox.classList.add('show');
    setTimeout(function() {
        alertBox.classList.remove('show');
    }, 2000); // 1 second
  }

 function saveDiv(divId, title){

  let mywindow = window.open('', '_blank');

  mywindow.document.write(`<html><head><title>${document.getElementById('hed').value+"-"+document.getElementById('shed').value}</title>`);
  mywindow.document.write('<style>@media print{@page{size:auto;margin:10px;} body{margin:20px;border:1px solid black;padding:20px 10px 20px 10px; }}</style></head><body >');
  mywindow.document.write(document.getElementById(divId).innerHTML);
  mywindow.document.write('</body></html>');

  mywindow.document.close(); // necessary for IE >= 10
  // mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  mywindow.close();
  
 var alertBox = document.getElementById('customAlert');
 alertBox.classList.add('show');
 setTimeout(function() {
     alertBox.classList.remove('show');
 }, 2000); // 1 second
 }