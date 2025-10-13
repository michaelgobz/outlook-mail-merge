import fs from 'fs';
import path from 'path';


function readEmailDetails(email) {
    const subject = email.subject || '';
    const addresses = email.addresses || [];
    const body = email.body || '';
    return { subject, addresses, body };
}

function  sendEmail(details) {
    // Placeholder function to simulate sending an email
    console.log(`Sending email to: ${details.addresses.join(', ')}`);
    console.log(`Subject: ${details.subject}`);
    console.log(`Body: ${details.body}`);
}

// get addresses from excel file
function getEmailAddressesFromExcel(filePath) {
    // Placeholder function to simulate reading email addresses from an Excel file
    //todo: read the files from path
    // read from sheet 1 and develop a df from it 

    console.log(`Reading email addresses from Excel file: ${filePath}`);
    return ['example1@example.com', 'example2@example.com'];
}

module.exports = { readEmailDetails, sendEmail };