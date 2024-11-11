const fs = require('fs');
const path = require('path');

// Specify the folder path
const folderPath = './src/icons';

// Function to recursively process files
function processFiles(folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading folder:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }

                if (stats.isDirectory()) {
                    // Recursively process subdirectories
                    processFiles(filePath);
                } else if (stats.isFile()) {
                    // Process files
                    if (path.extname(file) === '.tsx') {
                        // Replace '#000' with 'currentColor'
                        fs.readFile(filePath, 'utf8', (err, data) => {
                            if (err) {
                                console.error('Error reading file:', err);
                                return;
                            }

                            const updatedData = data.replace(/#000/g, 'currentColor');

                            fs.writeFile(filePath, updatedData, 'utf8', err => {
                                if (err) {
                                    console.error('Error writing to file:', err);
                                } else {
                                    console.log(`Processed file: ${filePath}`);
                                }
                            });
                        });
                    }
                }
            });
        });
    });
}

// Call the function to start processing the files in the folder
processFiles(folderPath);