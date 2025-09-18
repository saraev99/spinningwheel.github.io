async function loadQuestions() {
  const response = await fetch("questions.json");
  const data = await response.json();
  console.log(data); // test output in browser console
}
loadQuestions();
