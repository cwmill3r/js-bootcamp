// student's score, total possible score
// 15/20 -> You got a C (75%)!
// A 90- 100, B 80-89, C 70 - 79, D 60 - 69, F 0 - 59

// let letterGrade = function(studScore, possibleScore) {
//     let gradePercent = (studScore / possibleScore)
//     let letter
//     if (gradePercent >= .90 && gradePercent <= 1) {
//         letter = 'A'
//     } else if (gradePercent < .90 && gradePercent >= .80) {
//         letter = 'B'
//     } else if (gradePercent < .80 && gradePercent >= .70) {
//         letter = 'C'
//     } else if (gradePercent < .70 && gradePercent >= .60) {
//         letter = 'D'
//     } else if (gradePercent < .60 && gradePercent >= 0) {
//         letter = 'F'
//     }
//     return letter
// }
// var percentGrade = function(studScore, possibleScore) {
//     return (studScore / possibleScore) * 100
// }

// console.log(`You got a ${letterGrade(15,20)} (${percentGrade(15, 20)}%)`)

let gradeCalc = function(score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if(percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B';
    } else if (percent >= 70) {
        letterGrade = 'C';
    } else if (percent >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

let result = gradeCalc(15, 20)
console.log(result)