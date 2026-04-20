export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const googleUrl = "https://script.google.com/macros/s/AKfycbwIE8pik9aucktKPRXcFRwAX0vMSfaP-eEvaCS8ceLdw5xNkpxE4w8-XWozFN19cgZa/exec"

  try {
    const response = await $fetch(googleUrl, {
      method: 'POST',
      body: body,
      redirect: 'follow'
    })
    return response
  } catch (error) {
    return { result: 'error', error: error.message }
  }
})