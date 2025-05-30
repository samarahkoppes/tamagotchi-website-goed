console.log("welkom")


let giraf = document.getElementById ("giraf")
let startknop = document.getElementById("startknop");
let eten = document.getElementById ("eten")
let bes = document.getElementById ("bes")
let plant = document.getElementById ("plant")



startknop.addEventListener("click" , startspel);

function startspel (){
    
    laatgirafzien();
    laatbladzien();
    laatbeszien();
    laatplantzien();
    veranderachtergrond();

    
        document.getElementById("startknop").style.display = "none"
        document.querySelector(".procesbar progress").style.visibility = "visible"
        

}

function laatgirafzien(){
    
    giraf.style.visibility = "visible";

}


function laatbladzien(){
    
    eten.style.visibility = "visible";
}

function laatbeszien(){
    
    bes.style.visibility = "visible";

}

function laatplantzien(){
    
    plant.style.visibility = "visible";

}


function veranderachtergrond (){

    document.body.style.backgroundImage = "url('images/achtergrond-voor-app.png')";

}



eten.addEventListener("click", function() {
  if (giraf.src.includes("honger-giraf.png")) {
    giraf.src = "images/giraf-eten.png";

  } else {
    giraf.src = "images/giraf-bes.png";
  }
});


bes.addEventListener("click", function() {
    if (giraf.src.includes("giraf-eten.png")) {
      giraf.src = "images/giraf-bes.png";
  
    } else {
      giraf.src = "images/honger-giraf.png";
    }
  });
  

plant.addEventListener("click", function() {
    if (giraf.src.includes("giraf-bes.png")) {
      giraf.src = "images/giraf-plant.png";
  
    } else {
      giraf.src = "images/honger-giraf.png";
    }
  });
  





// Pak de progress bar 
const etenbar = document.getElementById('etenbar');


etenbar.value = 0;
etenbar.max = 100;

// Pak alle afbeeldingen binnen eten-container 
const etenItems = document.querySelectorAll('.eten-container img');

console.log('startwaarde', etenbar.value);



//bron: https://chatgpt.com/c/68345f9e-c458-800a-a39c-8a18c11a772b
etenItems.forEach(item => {
  item.addEventListener('click', () => {
   
    if (etenbar.value < etenbar.max) {
      etenbar.value = Math.min(etenbar.value + 33.33, etenbar.max);
      
    }
  });
});

