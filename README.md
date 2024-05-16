This is an example for uploading/downloading files using Next.js (app router), Prisma, and SQLite. 

Highlights:
- uses server components primarily
- uses server actions for file upload and file deletion
- for the delete button, I needed to listen to the click event. To provide this type of interactivity, it has to be a client component (note the 'use client' directive at the top of the Button.tsx file). I pass the server action to delete the file into the `Button` component as the `clickHandler` prop. 
- I use a native HTML download link to fetch the file download from a route handler

Caveats:
- This project does not include auth. If you want to a user to login and save files that only they can view and retrieve, you will need to add a user ID to the file schema in prisma and then save and query files by user ID. 
- This project does not do any error handling. You will want to catch errors from save or delete file actions and handle those (as in displaying a user friendly message). 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
