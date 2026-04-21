import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started and experimenting.',
    features: [
      'Access to 5 basic templates',
      'Mobile responsive design',
      'Community support',
      'Standard performance',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$29',
    description: 'Advanced features for production-ready websites.',
    features: [
      'Access to all 50+ templates',
      'Priority premium support',
      'Advanced scroll animations',
      'SEO optimization tools',
      'Custom domain integration',
      'High-performance codebase',
    ],
    cta: 'Go Premium',
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that best fits your needs. Scale your web presence with our premium scroll-driven templates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
              tier.highlight
                ? 'bg-white/[0.03] border-white/20 shadow-2xl shadow-white/5 ring-1 ring-white/10'
                : 'bg-transparent border-white/10 hover:border-white/20'
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="mt-4 text-muted-foreground">{tier.description}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-white/70" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className={`w-full rounded-xl font-semibold transition-all duration-300 ${
                tier.highlight
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]'
                  : 'variant-outline border-white/20 hover:bg-white/5'
              }`}
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
