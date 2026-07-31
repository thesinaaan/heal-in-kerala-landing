// Social Sharing Utilities
export const shareData = {
  title: 'Heal in Kerala | Authentic Ayurvedic Care',
  text: 'Explore authentic Ayurvedic treatments, Panchakarma packages, and expert doctors in Kerala.',
  url: window.location.href
}

export function shareToWhatsApp() {
  const text = encodeURIComponent(`${shareData.title}\n${shareData.text}\n${shareData.url}`)
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank')
}

export function shareToFacebook() {
  const url = encodeURIComponent(shareData.url)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

export function shareToTwitter() {
  const text = encodeURIComponent(shareData.title)
  const url = encodeURIComponent(shareData.url)
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
}

export function copyLinkToClipboard(): Promise<boolean> {
  return navigator.clipboard.writeText(shareData.url)
    .then(() => true)
    .catch(() => false)
}
