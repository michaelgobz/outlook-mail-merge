import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';


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
// obtain the list of file attachments from the directory
function getEmailAttachmentsFromDirectory(dirPath) {
    // Placeholder function to simulate getting email attachments from a directory
    //Todo: obtain the list of files from the directory
    const attachments = fs.readdirSync(dirPath).filter(file => {
        return file.endsWith('.pdf') || file.endsWith('.jpg');
    });
    console.log(`Getting email attachments from directory: ${dirPath}`);
    return attachments;
}

function addDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function customizeEmailBody(template, placeholders) {
    let customizedBody = template;
    for (const key in placeholders) {
        const value = placeholders[key];
        customizedBody = customizedBody.replace(new RegExp(`{{${key}}}`, 'g'), value);
    }
    return customizedBody;
}

function addFileDownloadLink(body, filePath) {
    const fileName = path.basename(filePath);
    const downloadLink = `<a href="file://${filePath}" download>${fileName}</a>`;
    return `${body}\n\n${downloadLink}`;
}

module.exports = 
{ readEmailDetails, 
    sendEmail, 
    getEmailAddressesFromExcel, 
    getEmailAttachmentsFromDirectory, 
    addDelay, 
    customizeEmailBody, 
    addFileDownloadLink };