# Data storage

Application data is stored in Cloud Firestore. The browser connects through the Firebase SDK; there is no MongoDB client or separate application server in this project.

Protect every collection with Firestore Security Rules and require authentication for data that is not public.
