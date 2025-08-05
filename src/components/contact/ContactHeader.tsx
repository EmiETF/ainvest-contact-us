import React from 'react'

const ContactHeader = () => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.3.16.67.16.96 0L20 8M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
        Get in <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Touch</span>
      </h1>
      
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
        We're here to help you succeed. Choose the department below that best matches your
        needs and get personalized support from our expert team.
      </p>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>Available 24/7</span>
        </div>
        <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Quick response time</span>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader