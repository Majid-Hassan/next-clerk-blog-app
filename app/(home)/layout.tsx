import { Navbar } from "@/components/home/header/navbar";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {

    const user = await currentUser();
    if (!user) {
        redirect('/sign-in');
    }
    const loggedInUser = await prisma.user.findUnique({
        where: { clerkUserId: user.id },
    });
    if (!loggedInUser) {
        await prisma.user.create({
            data: {
                name: `${user.fullName} ${user.lastName}`,
                clerkUserId: user.id,
                email: user.emailAddresses[0].emailAddress,
                imageUrl: user.imageUrl,
            },
        });
    }
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default layout;
