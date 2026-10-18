# groundmail-better-auth

**Transactional email for [Better Auth](https://www.better-auth.com)** — verification, password reset, [magic link](https://www.better-auth.com/docs/plugins/magic-link), [email OTP](https://better-auth.com/docs/plugins/email-otp), and organization invites — delivered on [Groundmail](https://groundmail.dev).

Better Auth does not ship an email provider plugin. You supply callbacks. This package is those callbacks, wired to Groundmail.

## Install

```bash
npm install groundmail-better-auth groundmail better-auth
```

```bash
GROUNDMAIL_API_KEY=gm_your_key_here
```

## Usage

```ts
import { betterAuth } from 'better-auth'
import { magicLink, emailOTP, organization } from 'better-auth/plugins'
import { createBetterAuthEmail } from 'groundmail-better-auth'

const email = createBetterAuthEmail({
  from: 'noreply@yourdomain.com',
  apiKey: process.env.GROUNDMAIL_API_KEY!,
  appUrl: process.env.BETTER_AUTH_URL,
})

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: email.sendVerificationEmail,
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: email.sendResetPassword,
  },
  plugins: [
    magicLink({ sendMagicLink: email.sendMagicLink }),
    emailOTP({ sendVerificationOTP: email.sendVerificationOTP }),
    organization({ sendInvitationEmail: email.sendInvitationEmail }),
  ],
})
```

## Docs

https://docs.groundmail.dev/guides/better-auth

## License

MIT
