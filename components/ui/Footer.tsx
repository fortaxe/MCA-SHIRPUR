"use client";

import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand/Logo Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Logo GPT</h3>
            <p className="text-muted-foreground mb-4">
              Generate, store, and download logos with DALL-E 3 and Supabase. 
              Perfect for building your own logo marketplace.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium">One-time payment, lifetime access</p>
              <p className="text-sm text-muted-foreground">One-time payment, 1 year of updates</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>DALL-E 2 & 3 Integration</li>
              <li>Supabase Storage</li>
              <li>Credit System</li>
              <li>Secure Authentication</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#supabase" className="text-muted-foreground hover:text-foreground transition-colors">
                  Setup Guide
                </Link>
              </li>
              <li>
                <Link href="https://supabase.com/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Supabase Dashboard
                </Link>
              </li>
              <li>
                <Link href="https://platform.openai.com/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  OpenAI Docs
                </Link>
              </li>
              <li>
                <Link href="https://vercel.com/new" className="text-muted-foreground hover:text-foreground transition-colors">
                  Deploy on Vercel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Logo GPT. All rights reserved.</p>
            <Link href="https://x.com/nolansym" className="hover:text-foreground transition-colors">
              Support
            </Link>
          </div>
          
          <button
            onClick={scrollToTop}
            className="text-primary hover:text-primary/80 font-bold text-sm transition-colors flex items-center gap-1"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Scroll to top
          </button>
        </div>
      </div>
    </footer>
  )
}

