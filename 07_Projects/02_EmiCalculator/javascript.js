const form = document.querySelector("form")

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const results = document.querySelector("#results");
    const results1 = document.querySelector("#results1");

    let bmi =0;
    if(height == '' || height <0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`
    }else if(weight == '' || weight <0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`
    }else{
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`; 
    }
    
    if(bmi < 18.6){
        results1.innerHTML = `<h3>BMI Weight Guide:- Under Weight</h3>`
    }else if(bmi > 18.6 && bmi < 24.9){
        results1.innerHTML = `<h3>BMI Weight Guide:- Normal Range</h3>`
    }else{
        results1.innerHTML = `<h3>BMI Weight Guide:- Overweight</h3>`
    }
});