import BookOverview from "@/components/BookOverview";
import BooksList from "@/components/BooksList";
import { sampleBooks } from "@/constants";


const Home = async () => {
  
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BooksList
        title='Latest Books'
        books={sampleBooks}
        containerClassName='mt-28'
      />
    </>
  );
};

export default Home;
