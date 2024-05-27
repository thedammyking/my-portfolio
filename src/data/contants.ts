import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  ResumeGitHubIcon,
  ResumeLinkedInIcon,
  ResumeLinkIcon,
  ResumeLocationIcon,
  ResumeMailIcon,
  ResumePhoneIcon,
  XIcon
} from '@/assets';

import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
  LINKEDIN_PROFILE,
  LOCATION,
  PHONE_NUMBER,
  WEBSITE_URL,
  X_PROFILE
} from './env';

export const THEME_MODE_KEY = 'theme-mode';

export const CONTACT_LINKS = [
  {
    icon: GitHubIcon,
    label: 'GitHub',
    url: GITHUB_PROFILE
  },
  {
    icon: MailIcon,
    label: 'Gmail',
    url: `mailto:${EMAIL_ADDRESS}`
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    url: LINKEDIN_PROFILE
  },
  {
    icon: XIcon,
    label: 'X(Twitter)',
    url: X_PROFILE
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    url: INSTAGRAM_PROFILE
  }
];
export const RESUME_CONTACT_LINKS = [
  {
    icon: ResumeMailIcon,
    label: EMAIL_ADDRESS,
    url: `mailto:${EMAIL_ADDRESS}`
  },
  {
    icon: ResumeLocationIcon,
    label: LOCATION,
    url: ''
  },
  {
    icon: ResumePhoneIcon,
    label: PHONE_NUMBER,
    url: `tel:${PHONE_NUMBER}`
  },
  {
    icon: ResumeLinkIcon,
    label: WEBSITE_URL?.split('//')[1],
    url: WEBSITE_URL
  },
  {
    icon: ResumeGitHubIcon,
    label: GITHUB_PROFILE?.split('//')[1],
    url: GITHUB_PROFILE
  },
  {
    icon: ResumeLinkedInIcon,
    label: LINKEDIN_PROFILE?.split('//')[1],
    url: LINKEDIN_PROFILE
  }
];

export const EMPLOYMENT_TYPES = {
  'full-time': 'Full Type',
  freelance: 'Freelance'
};

export const DATE_FORMAT = 'MMM yyyy';
