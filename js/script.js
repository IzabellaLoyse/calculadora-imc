function calculatingImc() {
	const personWeight = document.querySelector(".person-weight").value;

	const personHeight = document.querySelector(".person-height").value;

	const imcText = document.querySelector(".c-calculator__result");

	let imcCalculation = Number(
		personWeight / (personHeight * personHeight)
	).toFixed(2);

	if (imcCalculation >= 25.0 && imcCalculation <= 29.9) {
		imcText.insertAdjacentHTML(
			"beforeend",
			` Resultado do IMC : ${imcCalculation}
     <br>Acima do peso`
		);
	} else if (imcCalculation < 18.5) {
		imcText.insertAdjacentHTML(
			"beforeend",
			` Resultado do IMC: ${imcCalculation} 
    <br>Abaixo do peso`
		);
	} else if (imcCalculation >= 18.5 && imcCalculation <= 24.9) {
		imcText.insertAdjacentHTML(
			"beforeend",
			` Resultado do IMC: ${imcCalculation} 
    <br>Peso ideal`
		);
	} else if (imcCalculation >= 30.0 && imcCalculation <= 34.9) {
		imcText.insertAdjacentHTML(
			"beforeend",
			` Resultado do IMC: ${imcCalculation} 
    <br>Obesidade grau |`
		);
	} else if (imcCalculation >= 35.0 && imcCalculation <= 39.9) {
		imcText.insertAdjacentHTML(
			"beforeend",
			` Resultado do IMC: ${imcCalculation} 
    <br>Obesidade grau || (severa)`
		);
	} else if (imcCalculation >= 40.0) {
		imcText.insertAdjacentHTML(
			"beforeend",
			` Resultado do IMC: ${imcCalculation} 
    <br>Obesidade grau ||| (mórbida)`
		);
	}
}

document
	.querySelector(".c-calculator__button")
	.addEventListener("click", () => calculatingImc());
