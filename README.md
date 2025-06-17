# Outlook Mail Merge

A simple tool to automate personalized email sending using Microsoft Outlook and data from CSV files.

## Features

- Merge email templates with CSV data
- Send personalized emails via Outlook
- Supports attachments
- Easy configuration

## Requirements

- Windows OS
- Microsoft Outlook installed
- Node.js 18.8.0+
- Microsoft 365 subscription (required for Outlook integration)
- `csv-parse`, `nodemailer`, and `dotenv` packages

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/michaelgobz/outlook-mail-merge.git
    cd outlook-mail-merge
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Prepare your CSV file with columns for personalization (e.g., `Name`, `Email`).
2. Edit the email template in `template.html` or `template.txt`.
3. Run the script:
    ```bash
    node mail_merge.js --csv data.csv --template template.html
    ```

## Configuration

- Update `.env` or `config.json` for default settings (sender, subject, etc.).
- Place attachments in the `attachments/` folder if needed.

## License

MIT License

## Disclaimer

This project is not affiliated with Microsoft. Use responsibly and comply with email sending policies.
