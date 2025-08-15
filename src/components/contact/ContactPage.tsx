import React from 'react'
import ContactHeader from './ContactHeader'
import ContactCategories from './ContactCategories'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-background to-muted/30" />
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl -z-10" />
      
      {/* Header with AInvest Logo */}
      <header className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <a 
            href="https://www.ainvest.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/074ede7b-5b53-4965-9d80-bdb17d2d0cb9.png" 
              alt="AInvest Logo" 
              className="h-12 w-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          </a>
        </div>
      </header>
      
      <main className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <ContactHeader />
        <ContactCategories />
      </main>
    </div>
  )
}

export default ContactPage