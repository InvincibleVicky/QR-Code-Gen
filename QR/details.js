function clearText(){

  let input1 = document.getElementById("name");
    input1.value = "";

  let input2 = document.getElementById("Age");
    input2.value = "";

  let input3 = document.getElementById("skills");
    input3.value = "";

  let input4 = document.getElementById("Exp");
    input4.value = "";
}

function showQRCode(event) {

    event.preventDefault(); 
            
    const name = document.getElementById("name").value;
    
      console.log(name);

    const age = document.getElementById("Age").value;
      console.log(age);

    const skill = document.getElementById("skills").value;
      console.log(skill);

    const experience = document.getElementById("Exp").value;
      console.log(experience);

    const getData2 = "Name: " + name + " " + "Age: " + age + " " + "Skill: " + skill + " " + "Experience: " + experience;

    let qrCodeDiv = document.getElementById("qr-code");

      qrCodeDiv.style.display = "block"; 

     let qrcode = new QRCode(qrCodeDiv, getData2);

    }



    //   const data = window.location.search;

// const  params = new URLSearchParams(data);

// console.log(params.get("username"));
// console.log(params.get("age"));
// console.log(params.get("skill"));

// const name = params.get("username");
// const age = params.get("age");
// const skill = params.get("skill");

// const getData = "Name: "+ name + "<br>"
// + "Age: " + age + "<br>"
// + "Skill: " + skill;

// const getData2 = "Name: "+ name +" "+ "Age: " + age + " " + "Skill: " + skill;

// const getData3 =  name +" "+ age +" "+ skill;
      
// // document.getElementById("content").innerHTML = getData;

// let show = document.getElementById("content").addEventListener("click",event => {

//   if(show.style.display === "none"){
//     show.style.display = "block";
//   }else{
//     show.style.display = "none";
//   }
// })

// let qrcode = new QRCode("content",getData2); 