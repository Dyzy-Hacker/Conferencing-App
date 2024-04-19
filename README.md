
# Conferencing-App

This application is for meetings & communication

## Run Locally

Clone the project

```bash
  git clone https://github.com/Dyzy-Hacker/Conferencing-App.git
```

Go to the project directory

```bash
  cd my-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file witch you need to create in my-app folder

Go to the website Clerk to get Auth key

```bash
  https://dashboard.clerk.com/
```

`EXT_PUBLIC_CLERK_PUBLISHABLE_KEY=`

`CLERK_SECRET_KEY=`

`NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`

`NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`

Go to the website GetStream to get video API key

```bash
  https://getstream.io/
```

`NEXT_PUBLIC_STREAM_API_KEY=`

`STREAM_SECRET_KEY=`

This `NEXT_PUBLIC_BASE_URL= ` is for route menagment to run this on local we can do like this:

`NEXT_PUBLIC_BASE_URL=http://localhost:3000/`


## Deployment


We are deploying on Vercel you can read Vercel docs

https://vercel.com/docs/deployments/git


## Screenshot of Website

<img width="1800" alt="Screenshot 2024-04-19 at 12 44 41" src="https://github.com/Dyzy-Hacker/Conferencing-App/assets/69049191/39a5901d-1d4b-47f3-a3b6-956f8c461456">

## 🔗 Link of the site
https://conferencing-app-nine.vercel.app/




