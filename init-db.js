const advertisementsList = require('../model/ads.js')
const data = require('../data/ads.json')

async function main() {
    const question = await securityQuestion('Are you sure you want to delete de DataBase? Yes or no')
    if (!question) {
        process.exit();
    }
    const connection = require('../conn/dbconn.js')
    await init();
    connection.close();
}

function securityQuestion(texto) {
    return new Promise((resolve, reject) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(texto, answer => {
            interface.close();
            if (answer.toLowerCase() === 'yes') {
                resolve(true);
                return;
        }
        resolve(false);
        })
    })
}

async function init() {
connection.dropCollection('advertisementsList').then(() => {
    data['ads'].forEach(advertisementsList => {
        console.log(advertisementsList)
			advertisementsList.create(advertisementsList, function (err) {
				if (err) return handleError(err);
			})
		})
	})
}