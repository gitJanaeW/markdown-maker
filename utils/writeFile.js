const fs = require('fs');

// parameters are the file name, file data and err catch
const writeFile = fileData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileData, err => {
            // catch err or resolve
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created.'
            });
        });
    });
};

module.exports = {writeFile};