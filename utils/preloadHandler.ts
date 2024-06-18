const filesToPreload: Array<string> = [
  'lol.webp',
  'me.webp',

  'skills-base.webp',
  'skills-js.webp',
  'skills-rust.webp',
  'skills-ts.webp',
  'skills-vue.webp',

  'draft-olumni.webp',
  'draft-platinum.webp',
  'draft-pp.webp',
  'draft-r52.webp',
  'draft-sms.webp',
  'draft-travelask.webp',

  'base.mp4',
  'js.mp4',
  'rust.mp4',
  'ts.mp4',
  'vue.mp4',
]

const images = filesToPreload.filter(file => {
  return file.split('.')[1] === 'webp'
})

const videos = filesToPreload.filter(file => {
  return file.split('.')[1] === 'mp4'
})

export default async (preloadVideo: boolean = true) => {
  const imagesP = images.map(image => {
    return new Promise((resolve, reject) => {
      const imageEl = new Image()
      imageEl.src = `/images/${image}`

      imageEl.addEventListener('load', resolve)
      imageEl.addEventListener('error', reject)
    })
  })
  
  const videosP = videos.map(video => {
    return new Promise((resolve, reject) => {
      const videoEl = document.createElement('video')
      videoEl.src = `/videos/${video}`
      
      videoEl.addEventListener('canplaythrough', resolve)      
      videoEl.addEventListener('error', reject)      
    })
  })

  return preloadVideo ? Promise.all([...imagesP, ...videosP]) : Promise.all([...imagesP])
}