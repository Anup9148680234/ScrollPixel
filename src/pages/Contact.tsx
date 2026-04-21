import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have questions about our templates or need a custom solution? Drop us a message and we'll get back to you.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <Button size="lg" className="w-full rounded-xl font-semibold bg-white text-black hover:bg-white/90 transition-all">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
