// Verified against GitHub Releases on 2026-10-09. /latest excludes prereleases.
export const releaseUrl = import.meta.env.VITE_WINDOWS_RELEASE_URL || 'https://github.com/alfredcho91-ux/trade-journal-free/releases/latest/download/Trade-Journal-Windows.zip';

export const releaseInfo = {
  version: 'v1.0.26',
  platform: 'Windows 10/11 · x64',
  size: '53.9 MB',
} as const;

export const previewRelease = {
  url: 'https://github.com/alfredcho91-ux/trade-journal-free/releases/tag/v1.0.28',
} as const;
