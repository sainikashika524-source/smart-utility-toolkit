const fs = require("fs");

const fileName = "test.txt";
const initialContent = "Hello Node.js";
const updatedContent = "\nLearning FS Module";

console.log("Creating File...");

fs.writeFile(fileName, initialContent, (err) => {
    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File Created");

    console.log("Reading File...");

    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log(data);

        console.log("Updating File...");

        fs.appendFile(fileName, updatedContent, (err) => {
            if (err) {
                console.log("Error updating file:", err.message);
                return;
            }

            console.log("File Updated");

            fs.readFile(fileName, "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading updated file:", err.message);
                    return;
                }

                console.log(data);

                console.log("Deleting File...");

                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err.message);
                        return;
                    }

                    console.log("File Deleted");
                });
            });
        });
    });
});
