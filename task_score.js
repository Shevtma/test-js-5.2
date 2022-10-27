let scoreModuleIntro = 100;
let scoreModuleGit = 115;
let scoreModuleJs = 120;
let studentName = 'Иван'
let studentSurname = 'Иванов'
let averageScore = (scoreModuleIntro+scoreModuleGit+scoreModuleJs)/3;
console.log(`Средний балл студента ${studentName.slice(0,1)}. ${studentSurname} равен ${Math.round(averageScore)} баллов.`);