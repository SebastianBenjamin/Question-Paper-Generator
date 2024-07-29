# Question Paper Generator

Welcome to the Question Paper Generator! This web application allows users to create and print custom question papers with sections for Science, Math, and General Knowledge (GK).

## Features

- **Customizable Sections**: Choose from Science, Math, and GK sections.
- **Question Bank**: Pre-loaded with a diverse set of questions in Science, Math, and GK.
- **Random Generation**: Generates question papers with randomly selected questions from the question bank.
- **Printable Format**: Generates question papers in a format that's easy to print.

## Files Included

- `index.html`: The main HTML file containing the structure of the application.
- `style.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file containing the logic for generating the question paper.

## Questions Included

### Science Questions
```javascript
const scienceQuestions = [
    "What is the powerhouse of the cell?",
    "What is the process by which plants make their own food?",
    // Add more questions here
];
```

### Math Questions
```javascript
const mathQuestions = [
    "What is the value of pi?",
    "What is the Pythagorean theorem?",
    // Add more questions here
];
```

### General Knowledge Questions
```javascript
const gkQuestions = [
    "Who was the first President of the United States?",
    "What is the capital of France?",
    // Add more questions here
];
```

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/question-paper-generator.git
    ```
2. Open the `index.html` file in your web browser.

### Usage

1. **Add Questions**: Update the `scienceQuestions`, `mathQuestions`, and `gkQuestions` arrays in `script.js` to add your own questions.
2. **Generate Question Paper**: Open the application, enter the number of questions you want from each section, add a heading and subheading, and click "GENERATE".
3. **Print**: Click "PRINT" to print the generated question paper.

## How It Works

1. Enter the number of questions for Science, Math, and GK sections.
2. Provide a heading and subheading for the question paper.
3. Click the "GENERATE" button to create the question paper.
4. The questions are selected randomly from the predefined question banks.
5. The total marks are calculated and displayed.
6. Click the "PRINT" button to print the generated question paper.
7. Use the "CLEAR" button to reset the form and start over.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://en.wikipedia.org/wiki/MIT_License) file for details.

## Contact

For any questions or suggestions, please contact me .
