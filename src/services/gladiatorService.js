import csvFile from '../assets/gladiators.csv'
import Papa from 'papaparse';



const GladiatorService = {

    get: function () {
        const myRecords = new Promise((resolve, reject) => {
            var records = "";
            Papa.parse(csvFile, {
                download: true,
                header: true,
                complete: function (input) {
                    records = input.data;
                    resolve(records);
                }
            });
        });
        return myRecords;
    },
};

export default GladiatorService;