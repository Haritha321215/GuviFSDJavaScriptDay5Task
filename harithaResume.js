
//1. For the given JSON iterate over all for loops(for, for in,for of, forEach)
//since JSON file is not available using the harithaResume.json file

const resume = require('./harithaResume.json');
//console.log(typeof(resume));
//console.log(resume.Projects);
console.log("============Projects======================================================")
for (const iterator of resume.Projects) {
    console.log(`${iterator.projectName} -> ${iterator.BriefDescription}`);
}
console.log("=============Skills count=====================================================")
for (const key in resume.skills) {
    let count=0;
    resume.skills[key].forEach(element => {
        count++;
    });
    console.log(`known ${key} count is ${count}`);
    
}
console.log("==========Cerifications========================================================")
for (let index = 0; index < resume.Certifications.length; index++) {
    const element = resume.Certifications[index];
    console.log(`${element.course} FROM ${element.Platform}, IN THE YEAR ${element.Year}`);
}

console.log("==================================================================")