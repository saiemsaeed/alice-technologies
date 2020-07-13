export const sendEmail = data => {
  return fetch('/salesforce-api/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
}
