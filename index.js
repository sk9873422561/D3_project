const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const costInput = document.querySelector('#cost');


form.addEventListener('submit',(e)=>{
  e.preventDefault();

  if(nameInput.value === '' || costInput.value === '' || isNaN(costInput.value)){
    alert("Please enter correct values");
  }else{

    let item = {name: nameInput.value , cost: parseInt(costInput.value)};
    db.collection('investments').add(item).then((res)=>{
      console.log("added data to firebase");
      nameInput.value = '';
      costInput.value = '';
    })

  }


})

console.log(db);







// const group = svg.append("g");

// const rect = group
//   .append("rect")
//   .attr("height", 200)
//   .attr("width", 400)
//   .attr("fill", "pink")
//   .attr("x", 100);

// const cir = group
//   .append("circle")
//   .attr("r", 50)
//   .attr("cx", 100)
//   .attr("cy", 100)
//   .attr("fill", "green");

//   let i = 1;



//   setTimeout(() => {
//     group.attr("transform", `translate(0,${i * 100})`);
    
//   }, 1000);

//   i++;
//   setTimeout(() => {
//     group.attr("transform", `translate(0,${i * 100})`);
//     i++;
//   }, 2000);
//   i++;
//   setTimeout(() => {
//     group.attr("transform", `translate(0,${i * 100})`);
//     i++;
//   }, 3000);
//   i++;
//   setTimeout(() => {
//     group.attr("transform", `translate(0,${i * 100})`);
//     i++;
//   }, 4000);