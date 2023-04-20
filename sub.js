const form = document.querySelector('form')
const nameDOM = document.querySelector('.name')
const emailDOM = document.querySelector('.email')

form.onsubmit = async (e) => {
  e.preventDefault()
  const opt = {
    name: nameDOM.value,
    email: emailDOM.value,
  }

  try {
    const data = await axios.post(
      'http://localhost:9000/api/v1/subscribe/sendemail',
      opt,
      {
        withCredentials: true,
      }
    )
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
