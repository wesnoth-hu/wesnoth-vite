# Magyar Wesnoth Közösségi Portál

## Tech Stack

1. Vite
2. React
3. Typescript
4. Firebase Auth
5. Cloud Firestore
6. Zustand
7. React Hook Form
8. Zod
9. MDI Icons + Social Media Icons

## Firebase setup

Create a local `.env.local` from `.env.example` and fill it with the web app configuration from the Firebase console. The Firebase web configuration is safe to expose in a client application; access is controlled by Firebase Authentication and Firestore Security Rules.

This project has no separate application server. Use Firebase Auth for identity and Cloud Firestore for application data. Keep privileged operations out of the client or move them to Firebase Cloud Functions when they are needed.
