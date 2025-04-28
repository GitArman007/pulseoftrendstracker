
import CategoryPage from "@/components/category/CategoryPage";
import Layout from "@/components/layout/Layout";

const BooksPage = () => {
  return (
    <Layout title="Books">
      <CategoryPage category="books" title="Books" />
    </Layout>
  );
};

export default BooksPage;
