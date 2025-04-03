![image](https://github.com/user-attachments/assets/01df54da-72cd-4163-a440-7d80097b83ef)# Next Clerk Blog App (Wisdom App): Share, Learn, and Connect  

This application is designed for users to publish and explore articles on various aspects of life. Share your insights, leave comments, and engage with a community eager to learn and grow!  

## Features  
- **User Authentication**: Secure login and signup using [Clerk](https://clerk.dev).  
- **Content Creation**: Upload and manage articles on diverse topics.  
- **Comments and Likes**: Users can leave comments and like posts to foster interaction.  
- **Database Management**: Utilize PostgreSQL with Prisma ORM for seamless data management.  
- **File Uploads**: Store images and media efficiently using [Cloudinary](https://cloudinary.com).  
- **Responsive Design**: Beautifully designed with Tailwind CSS and shadcn-ui for an optimal user experience.  
- **Form Validation**: Ensure data integrity with ZOD validation.

## Installation  
To get a local copy up and running follow these steps:  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/Majid-Hassan/next-clerk-blog-app.git

2. Navigate into the project directory:

   ```bash  
   cd next-clerk-blog-app.git
   
3. Install the required packages:

   ```bash
   
   npm install
   #OR
   pnpm install
   #OR
   yarn install

4. Set up environment variables: Create a .env file in the root directory and add your configurations:
   
    ```bash

    DATABASE_URL=your_database_url  
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publish_key
    CLERK_SECRET_KEY=your_clerk_api_key

    CLOUDINARY_CLOUD_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

5. Run the development server:
   
    ```bash

         npm run dev
         #OR
         pnpm run dev


### 4. **Usage**  
Provide a brief guide on how to use the app after installation, along with screenshots or a demo.  

## Usage  

   Visit `http://localhost:3000` in your browser. You can create an account, log in, and start exploring articles. Here's how to create a new post:  
        
   1. Click on "Create Article".  
   2. Fill in the article title, content, and upload images.  
   3. Publish your article and engage with other users in the comments section.  
        
)

## Tech Stack  
- **Next.js**: For building server-side rendered React applications.  
- **TypeScript**: For type safety and reliability.  
- **PostgreSQL**: Database management for storing articles and user data.  
- **Prisma**: ORM for seamless data interactions.  
- **Cloudinary**: For image and media uploads.  
- **Tailwind CSS**: For styling with utility-first CSS.  
- **shadcn-ui**: For accessible, reusable UI components.  
- **ZOD**: For form validation.

## Contributing  
Contributions are welcome! Please follow these steps:  

1. Fork the repository.  
2. Create your feature branch:  
   ```bash  
   git checkout -b feature/YourFeature

## Demo

![image](https://github.com/user-attachments/assets/01df54da-72cd-4163-a440-7d80097b83ef)
![image](https://github.com/user-attachments/assets/5ce6a545-03d2-48c5-9344-c09bd73d6d67)
![image](https://github.com/user-attachments/assets/9ebd7cd9-c642-4c54-aafc-354622713f48)
![image](https://github.com/user-attachments/assets/1f456568-8195-4a0a-8b41-afffafb389c4)
![image](https://github.com/user-attachments/assets/547d8c1a-b164-41de-83c4-6171dfa71350)


Project Link: [https://github.com/Majid-Hassan/next-clerk-blog-app/](https://github.com/Majid-Hassan/next-clerk-blog-app/)


