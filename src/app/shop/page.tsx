const products = [
  { id: 1, name: "Pro Plan", price: 29, description: "Unlimited projects, priority support" },
  { id: 2, name: "Team Plan", price: 79, description: "Up to 10 seats, team collaboration" },
  { id: 3, name: "Enterprise", price: 199, description: "Custom SLA, dedicated account manager" },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Store</h1>
        <p className="text-gray-400 text-sm mt-1">Choose a plan that works for you</p>
      </header>
      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p) => (
          <div key={p.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500 transition">
            <div>
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-gray-400 text-sm mt-1">{p.description}</p>
            </div>
            <div className="mt-auto">
              <span className="text-3xl font-bold">${p.price}</span>
              <span className="text-gray-400 text-sm">/mo</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 text-sm font-medium transition">
              Get Started
            </button>
          </div>
        ))}
      </section>
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center text-gray-500 text-sm">
          Cart is empty — add a plan above to get started.
        </div>
      </section>
    </main>
  );
}
