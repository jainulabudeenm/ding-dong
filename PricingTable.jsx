const plans = [
  {
    name: "Starter",
    price: 9,
    description: "Perfect for individuals and small projects.",
    features: [
      "5 Projects",
      "10 GB Storage",
      "Basic Analytics",
      "Email Support",
      "API Access",
    ],
    unavailable: ["Custom Domain", "Priority Support", "Team Collaboration"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: 29,
    description: "Best for growing teams and businesses.",
    features: [
      "Unlimited Projects",
      "100 GB Storage",
      "Advanced Analytics",
      "Priority Support",
      "API Access",
      "Custom Domain",
      "Team Collaboration",
    ],
    unavailable: [],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: 79,
    description: "For large-scale operations and enterprises.",
    features: [
      "Unlimited Projects",
      "1 TB Storage",
      "Advanced Analytics",
      "24/7 Dedicated Support",
      "API Access",
      "Custom Domain",
      "Team Collaboration",
    ],
    unavailable: [],
    cta: "Contact Sales",
    highlight: false,
  },
];

function CheckIcon({ highlight }) {
  return (
    <svg
      className={`w-5 h-5 flex-shrink-0 ${highlight ? "text-[#e0e7ff]" : "text-[#15803d]"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function PricingCard({ plan }) {
  const { name, price, description, features, unavailable, cta, highlight } = plan;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
        highlight
          ? "bg-[#15803d] text-white shadow-2xl scale-105 z-10 hover:-translate-y-2 hover:scale-110"
          : "bg-white text-gray-900 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2"
      }`}
      style={highlight ? { boxShadow: "0 25px 50px -12px rgba(99,102,241,0.4)" } : {}}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-1 ${highlight ? "text-white" : "text-[#111827]"}`}>
          {name}
        </h3>
        <p className={`text-sm ${highlight ? "text-[#c7d2fe]" : "text-[#6b7280]"}`}>
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8 flex items-end gap-1">
        <span className={`text-5xl font-extrabold tracking-tight ${highlight ? "text-white" : "text-[#111827]"}`}>
          ${price}
        </span>
        <span className={`text-sm mb-2 ${highlight ? "text-[#a5b4fc]" : "text-[#9ca3af]"}`}>
          / month
        </span>
      </div>

      {/* CTA Button */}
      <button
        className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 shadow ${
          highlight
            ? "bg-white text-[#15803d] hover:bg-gray-50 shadow-md hover:shadow-lg"
            : "bg-[#15803d] text-white hover:bg-green-800 hover:shadow-md"
        }`}
      >
        {cta}
      </button>

      {/* Divider */}
      <div className={`h-px mb-6 ${highlight ? "bg-[#fdfdff]" : "bg-[#f3f4f6]"}`} />

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm">
            <CheckIcon highlight={highlight} />
            <span className={highlight ? "text-[#e0e7ff]" : "text-[#374151]"}>{f}</span>
          </li>
        ))}
        {unavailable.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm opacity-40">
            <XIcon />
            <span className="text-[#9ca3af] line-through">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingTable() {
  return (
    <section
      className="min-h-screen py-20 px-4"
      style={{ background: "linear-gradient(148.46deg, #f8fafc 0%, #eef2ff 50%, #f1f5f9 100%)" }}
    >
      {/* Heading */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="inline-block bg-[rgba(21,128,61,0.1)] text-[#15803d] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Pricing
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111827] leading-tight mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-[#6b7280]">
          Choose the plan that fits your needs. Upgrade or downgrade at any time.
        </p>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="text-sm font-medium text-[#111827]">Monthly</span>
          <button className="relative w-12 h-6 bg-[#d1d5db] rounded-full transition-colors">
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform" />
          </button>
          <span className="text-sm font-medium text-[#9ca3af]">
            Annual
            <span className="ml-2 bg-[#dcfce7] text-[#15803d] text-xs font-semibold px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-sm text-[#9ca3af] mt-12">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </section>
  );
}
