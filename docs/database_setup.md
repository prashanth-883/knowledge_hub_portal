# Database Setup Guide (MongoDB)

The **Knowledge Hub Portal** uses **MongoDB** as its database. Since the application is configured to connect to a local instance (`mongodb://localhost:27017/knowledge_hub`), you need to install MongoDB locally.

## Step 1: Download MongoDB Community Server

1.  Go to the official MongoDB download page: [MongoDB Community Server Download](https://www.mongodb.com/try/download/community).
2.  Select the following options (usually auto-detected):
    -   **Version**: Latest (Current Stable)
    -   **Platform**: Windows
    -   **Package**: msi
3.  Click **Download**.

## Step 2: Install MongoDB

1.  Run the downloaded `.msi` installer.
2.  Follow the installation wizard:
    -   Choose **Complete** setup type.
    -   **Important**: Ensure "Install MongoDB as a Service" is **checked**.
        -   Service Name: `MongoDB`
        -   Data Directory: Default (e.g., `C:\Program Files\MongoDB\Server\X.X\data\`)
        -   Log Directory: Default
    -   (Optional) Check "Install MongoDB Compass" (a useful GUI tool to view your data).
3.  Finish the installation.

## Step 3: Verify Installation

1.  Open a new terminal (PowerShell or Command Prompt).
2.  Type `mongod --version`.
    -   *Note*: If command is not found, you may need to add the bin folder (e.g., `C:\Program Files\MongoDB\Server\X.X\bin`) to your system PATH environment variable.
3.  Alternatively, open **Task Manager** -> **Services** and look for `MongoDB`. It should be `Running`.

## Step 4: The Application Connection

-   The server is already configured to connect automatically.
-   **Configuration File**: `server/src/config/db.ts`
-   **Connection String**: `mongodb://localhost:27017/knowledge_hub` (defined in `server/.env`)

Once MongoDB is running, simply restart the backend server:

```bash
cd server
npm run dev
```

The console should show: `MongoDB Connected: localhost`.
