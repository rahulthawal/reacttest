import csvFile from '../assets/gladiators.csv'
import Papa from 'papaparse';

var records = ""
Papa.parse(csvFile, {
    download: true,
    header: true,
    complete: function (input) {
         records = input.data;
    }
});

const GladiatorService = {

    get: function() {
        return records;
    },
};

export default GladiatorService;