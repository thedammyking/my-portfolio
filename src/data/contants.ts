import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  StackOverflowIcon,
  XIcon
} from '@/assets';

import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
  LINKEDIN_PROFILE,
  STACKOVERFLOW_PROFILE,
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
    icon: StackOverflowIcon,
    label: 'Stack Overflow',
    url: STACKOVERFLOW_PROFILE
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

export const EMPLOYMENT_TYPES = {
  'full-time': 'Full Type',
  freelance: 'Freelance'
};

export const DATE_FORMAT = 'MMM yyyy';
