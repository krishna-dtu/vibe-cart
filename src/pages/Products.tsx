import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
            Your Vibe. Your Tech.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Premium minimal tech accessories designed for the modern lifestyle
          </p>
        </section>

        {/* Products Grid */}
        <section>
          <h2 className="mb-8 text-3xl font-bold tracking-tight">Shop All</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
