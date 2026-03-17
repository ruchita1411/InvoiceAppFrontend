### Project Overview
This project was completed as part of the technical assessment for Thinkbridge. The goal was to debug a pre-existing codebase, ensure local execution, and deploy the application.

### Key Accomplishments
*   **Debugging:** Identified and resolved several syntax errors and typos in the source files to ensure the application could compile and run.
*   **API Implementation:** Successfully configured and verified the **http://localhost:5219/api/Invoice** locally. 
*   **Frontend Deployment:** The frontend application is live and accessible https://invoice-app-frontend-lac.vercel.app/.
*   **Data Strategy:** Implemented dummy data to ensure the UI and API endpoints remained functional.

### Technical Notes & Challenges
*   **Data Integration:** While the Swagger API is functional locally, the deployed frontend currently shows an empty state. This is because the frontend is configured to fetch from the backend service, which isn't live currently.
*   **Mock Data Strategy:** I implemented mock JSON data in the backend to verify the API logic locally, ensuring the "business logic" was sound even without a persistent DB.

### How to Run Locally
1. Clone the repository.
2. Run `npm install` (or your specific command).
3. Execute `npm start` to view the frontend and API endpoints.
