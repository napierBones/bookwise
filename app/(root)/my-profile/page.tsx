import BooksList from "@/components/BooksList";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import { signOut } from "@/auth";
import React from "react";

const page = () => {
  return (
   <>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
          className='mb-10'
        >
            <Button>Logout</Button>
        </form>
        <BooksList title="Borrowed Books" books={sampleBooks} />
   </>
  );
};

export default page;
