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
]

export default async (): Promise<unknown[]> => {
  const imagesP = filesToPreload.map((image) => {
    return new Promise((resolve, reject) => {
      const imageEl = new Image()
      imageEl.src = `/images/${image}`

      imageEl.addEventListener('load', resolve)
      imageEl.addEventListener('error', reject)
    })
  })

  return Promise.all([...imagesP])
}
