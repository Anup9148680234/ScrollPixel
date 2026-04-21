import { Button } from '@/components/ui/button'

function GoogleIcon() {
  return (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

export default function Auth() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2 font-display">Welcome back</h1>
              <p className="text-muted-foreground">Join the elite world of premium templates.</p>
            </div>

            <Button variant="outline" className="w-full h-12 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center mb-6">
              <GoogleIcon />
              Continue with Google
            </Button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#050505] px-4 text-muted-foreground tracking-widest">Or continue with</span>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5 ml-1">Email address</label>
                <input
                  type="email"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 ml-1">Password</label>
                <input
                  type="password"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>

              <Button className="w-full h-12 rounded-xl font-semibold bg-white text-black hover:bg-white/90 transition-all mt-4">
                Sign In
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Don't have an account?{' '}
              <a href="#" className="text-white hover:underline transition-all">
                Create one for free
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
