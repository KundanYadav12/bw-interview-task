I have created multiple pages for the application, including:
Registration Page
Instruction Page
Test Page
Submit Review Page
Report Page

✨ Key Features Implemented:
Designed clean and responsive UI using Bootstrap, fully optimized for mobile and tablet devices.
Used custom JSON data for dynamic question rendering and display.
On the Registration Page, implemented real-time form validation:
If the user misses any input field, an error message is displayed in red below the field.
On the Instruction Page, if the user clicks "OK" without selecting the confirmation radio button, a styled Bootstrap Toast alert appears with a warning message.
On the Test Page:
A timer is displayed at the top showing the current date and time.
Only one question is shown at a time, along with its options.
"Next" and "Previous" buttons are provided to navigate between questions.
All responses are stored for later review.
On the Submit Review Page, users can review all their answers:
Unanswered questions are clearly marked.
On the Report Page, after submitting the test:
It displays right and wrong answers with styled color-coded cards (green for correct, red for wrong).

Implemented using Bootstrap cards with responsive layout (col-12, col-md-6, col-lg-4).

📍 Route Paths Used:
/exam/registration/my-theme – Registration Page
/exam/instructions/my-theme – Instruction Page
/exam/test/my-theme – Test Page
/exam/submit-preview – Submit Review Page
/exam/report – Report Page
