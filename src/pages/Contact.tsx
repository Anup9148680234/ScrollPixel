import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID 
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

type SubmitState = 'idle' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const isConfigured = Boolean(serviceId && templateId && publicKey)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formRef.current) {
      return
    }

    if (!isConfigured) {
      setSubmitState('error')
      setStatusMessage('Email service is not configured yet. Add your EmailJS keys to the Vite environment variables.')
      return
    }

    setIsSubmitting(true)
    setSubmitState('idle')
    setStatusMessage('')

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })

      formRef.current.reset()
      setSubmitState('success')
      setStatusMessage("Message sent successfully. I'll be in touch soon.")
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setSubmitState('error')
      setStatusMessage('Something went wrong while sending your message. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="contact_time" value={new Date().toLocaleString()} />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
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
                name="user_email"
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

            {statusMessage ? (
              <p
                className={
                  submitState === 'success'
                    ? 'rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200'
                    : 'rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200'
                }
              >
                {statusMessage}
              </p>
            ) : null}

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full rounded-xl font-semibold bg-white text-black hover:bg-white/90 transition-all"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
