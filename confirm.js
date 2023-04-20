console.log('confirm')

const verify = async () => {
  try {
    const res = await fetch('http://localhost:9000/api/v1/subscribe/test')
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

verify()
