function insulinDose(carbs, glicemia) {
    // Insulin sensitivity factor (ISF)
    const ISF = 10;
    
    // Correction factor
    const ratio = 35;

    // Goal
    const goal = 90
    
    // Calculate the insulin dose
    const insulinDose = ((carbs/ISF)+((glicemia-goal)/ratio)) ;
    
    return insulinDose;
  }
  
  const form = document.querySelector("form");
  const result = document.querySelector("#result");
  
  form.addEventListener("submit", event => {
    event.preventDefault();
    
    const carbs = parseFloat(document.querySelector("#carbs").value);
    const glicemia = parseFloat(document.querySelector("#glicemia").value);
    
    const dose = insulinDose(carbs, glicemia);
    result.textContent = `Sofia, inyectate: ${dose} units`;
  });
  