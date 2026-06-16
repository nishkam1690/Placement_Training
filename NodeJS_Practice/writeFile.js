//writing in the file
const fs = require('fs');
const student = "Name: Max Verstappen\nLeague: Formula 1\nTeam: Red Bull Racing\n";
fs.writeFile('student.txt', student, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File Created Successfully");
});