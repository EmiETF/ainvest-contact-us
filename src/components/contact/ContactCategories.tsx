import React from 'react'
import ContactCategory from './ContactCategory'
import {
  HeadphonesIcon,
  NewspaperIcon,
  BarChart2Icon,
  HandshakeIcon,
} from 'lucide-react'

const contactData = [
  {
    id: 1,
    title: 'Client Support',
    description: 'Get help with your account, platform, or general inquiries.',
    icon: <HeadphonesIcon className="h-8 w-8 icon-primary" />,
    channels: [
      {
        type: 'Online Form',
        value: 'Submit a ticket',
        available: 'Response within 24 hours',
      },
      {
        type: 'Email',
        value: 'support@ainvest.com',
        available: 'Response within 24 hours',
      },
      {
        type: 'AIME Chat',
        value: 'Available on platform',
        available: 'Mon-Fri, 9AM-5PM EST',
      },
      {
        type: 'Social Channels',
        value: 'Discord & Telegram',
        available: 'Response within 12 hours',
        platforms: ['Discord', 'Telegram'],
      },
      {
        type: 'Phone',
        value: '+1 (888) 123-4567',
        available: 'Mon-Fri 8AM - 5PM ET',
      },
    ],
  },
  {
    id: 2,
    title: 'Content Inquiry',
    description:
      'Questions about our articles, research, or educational materials.',
    icon: <NewspaperIcon className="h-8 w-8 icon-primary" />,
    channels: [
      {
        type: 'Online Form',
        value: 'Submit content request',
        available: 'Response within 72 hours',
      },
      {
        type: 'Email',
        value: 'content@ainvest.com',
        available: 'Response within 48 hours',
      },
    ],
  },
  {
    id: 3,
    title: 'Marketing/Advertisement',
    description:
      'Inquiries about advertising opportunities and marketing collaborations.',
    icon: <BarChart2Icon className="h-8 w-8 icon-primary" />,
    channels: [
      {
        type: 'Online Form',
        value: 'Submit marketing inquiry',
        available: 'Response within 72 hours',
      },
      {
        type: 'Email',
        value: 'marketing@ainvest.com',
        available: 'Response within 48 hours',
      },
      {
        type: 'AIME Chat',
        value: 'Available on platform',
        available: 'Mon-Fri, 9AM-5PM EST',
      },
      {
        type: 'Social Channels',
        value: 'Discord & Telegram',
        available: 'Response within 24 hours',
        platforms: ['Discord', 'Telegram'],
      },
    ],
  },
  {
    id: 4,
    title: 'Business Partnership',
    description:
      'Explore strategic partnerships and business development opportunities.',
    icon: <HandshakeIcon className="h-8 w-8 icon-primary" />,
    channels: [
      {
        type: 'Online Form',
        value: 'Submit partnership proposal',
        available: 'Response within 5 business days',
      },
      {
        type: 'Email',
        value: 'partnerships@ainvest.com',
        available: 'Response within 48 hours',
      },
      {
        type: 'Social Channels',
        value: 'Discord & Telegram',
        available: 'Response within 24 hours',
        platforms: ['Discord', 'Telegram'],
      },
    ],
  },
]

const ContactCategories = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-up">
      {contactData.map((category, index) => (
        <div 
          key={category.id} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ContactCategory category={category} />
        </div>
      ))}
    </div>
  )
}

export default ContactCategories