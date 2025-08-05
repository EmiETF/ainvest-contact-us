import React, { useState } from 'react'
import ContactForm from './ContactForm'
import {
  PhoneIcon,
  MailIcon,
  MessageSquareIcon,
  FileTextIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'lucide-react'

interface Channel {
  type: string
  value: string
  available: string
  platforms?: string[]
}

interface Category {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  channels: Channel[]
}

interface ContactCategoryProps {
  category: Category
}

const getChannelIcon = (type: string) => {
  switch (type) {
    case 'Phone':
      return <PhoneIcon className="h-5 w-5 icon-primary" />
    case 'Email':
      return <MailIcon className="h-5 w-5 icon-primary" />
    case 'AIME Chat':
      return <MessageSquareIcon className="h-5 w-5 icon-primary" />
    case 'Online Form':
      return <FileTextIcon className="h-5 w-5 icon-primary" />
    case 'Social Channels':
      return <MessageSquareIcon className="h-5 w-5 icon-primary" />
    default:
      return null
  }
}

// Discord icon component
const DiscordIcon = () => (
  <svg
    className="h-5 w-5 icon-primary"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="12" r="1"></circle>
    <circle cx="15" cy="12" r="1"></circle>
    <path d="M7.5 7.5c3.5-1 5.5-1 9 0"></path>
    <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
    <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"></path>
    <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"></path>
  </svg>
)

// Telegram icon component
const TelegramIcon = () => (
  <svg
    className="h-5 w-5 icon-primary"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.73 2.27a2 2 0 0 0-2.83 0L4.06 17.1a2 2 0 0 0 0 2.83 2 2 0 0 0 2.83 0L21.73 5.1a2 2 0 0 0 0-2.83z"></path>
    <path d="m4.1 17.1 15.8-15.8"></path>
    <path d="M21 21H3"></path>
    <path d="M21 16H16"></path>
    <path d="M16 21v-5"></path>
    <path d="M3 8h5"></path>
    <path d="M8 3v5"></path>
  </svg>
)

const ContactCategory = ({ category }: ContactCategoryProps) => {
  const [showForm, setShowForm] = useState(false)
  const [activeChannel, setActiveChannel] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleChannelClick = (channel: Channel) => {
    if (channel.type === 'Online Form') {
      setShowForm(true)
      setActiveChannel(category.title)
    }
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="contact-card overflow-hidden">
      <div
        className="p-8 cursor-pointer transition-colors duration-300 hover:bg-primary-light/20"
        onClick={toggleExpand}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
              {category.icon}
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              {category.title}
            </h2>
          </div>
          <div className="icon-primary transition-transform duration-300" style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>
            <ChevronDownIcon className="h-5 w-5" />
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{category.description}</p>
      </div>
      
      {isExpanded && (
        <div className="px-8 pb-8 pt-0 space-y-3 animate-fade-in">
          {category.channels.map((channel, idx) => (
            <div
              key={idx}
              className="contact-channel cursor-pointer group"
              onClick={() => handleChannelClick(channel)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  {getChannelIcon(channel.type)}
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {channel.type}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    {channel.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    24/7
                  </p>
                </div>
                {channel.platforms && (
                  <div className="flex space-x-3 ml-4">
                    {channel.platforms.includes('Discord') && <DiscordIcon />}
                    {channel.platforms.includes('Telegram') && <TelegramIcon />}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {showForm && activeChannel === category.title && (
        <div className="p-8 border-t border-border bg-muted/30 animate-scale-in">
          <ContactForm
            category={category.title}
            onClose={() => setShowForm(false)}
          />
        </div>
      )}
    </div>
  )
}

export default ContactCategory