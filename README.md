
# Form Generator

## Overview

Form Generator is a Next.js project designed to dynamically generate HTML forms based on a single user input. This project leverages the power of React and Next.js to create an interactive and user-friendly experience for generating customized forms. Users can specify the desired fields and types, and the application will generate the corresponding HTML form code.

## Features

- **Dynamic Form Generation**: Create forms dynamically based on user input.
- **Customizable Fields**: Specify different types of form fields (text, email, number, etc.).
- **Responsive Design**: Ensure forms look great on all devices.
- **Easy to Use**: Simple and intuitive user interface.
- **Next.js Framework**: Utilizes the robust features of Next.js for server-side rendering and static site generation.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MrVineetRaj/Ai-Form-Builder
    cd Ai-Form-Builder
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Setting Up Environment Variables

Create a `.env.local` file in the root directory of the project and add the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_clerk_sign_in_url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_clerk_sign_up_url

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

Replace the placeholder values with your actual keys and URLs.

### Running the Project

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Building for Production

To build the project for production:

```bash
npm run build
npm run start
```

The application will be optimized and ready for deployment.

## Usage

1. Navigate to the homepage.
2. Enter the desired form fields and their types in the provided input area.
3. Click the "Generate Form" button.
4. The generated HTML form will be displayed, and you can copy the code for use in your project.

## Project Structure

- `pages/`: Contains the main pages of the application.
- `components/`: Contains reusable React components.
- `styles/`: Contains the styling for the application.
- `public/`: Static assets such as images and fonts.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Open a pull request to the main repository.

## Contact

For any questions or feedback, please open an issue or reach out to me at 

- Author : Vineet Raj
- Linked In : [Vineet Raj](https://www.linkedin.com/in/vineet-raj-b96381257/).
- Github : [MrVineetRaj](https://github.com/MrVineetRaj/Ai-Form-Builder)


---

Thank you for using Form Generator! Happy coding!
