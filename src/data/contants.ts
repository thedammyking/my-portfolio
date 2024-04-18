import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, XIcon } from '@/assets';

import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
  LINKEDIN_PROFILE,
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
    label: 'X',
    url: X_PROFILE
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    url: INSTAGRAM_PROFILE
  }
];
