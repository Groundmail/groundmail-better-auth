/**
 * Public entry for the Better Auth + Groundmail integration.
 * Implementation lives in the core SDK; this package exists for discoverability
 * (npm/GitHub search: better-auth + transactional email).
 */
export {
  createBetterAuthEmail,
  type BetterAuthEmailOptions,
  type BetterAuthEmailHelpers,
  type BetterAuthEmailUser,
  type BetterAuthEmailContext,
  type BetterAuthMagicLinkContext,
  type BetterAuthEmailOtpContext,
  type BetterAuthEmailOtpType,
  type BetterAuthInvitationContext,
} from 'groundmail/better-auth'
