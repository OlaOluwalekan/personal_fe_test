console.log('confirm')

const verify = async () => {
  try {
    const data = await axios('http://localhost:9000/api/v1/subscribe/verify', {
      withCredentials: true,
    })
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

verify()
