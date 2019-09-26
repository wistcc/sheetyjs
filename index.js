const getSheetyRoute = async (sheetUrl) => {
  const getSheetyRoute = await fetch('https://api.sheety.co/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sheet_url: sheetUrl,
    })
  })
  
  const routeJson = await getSheetyRoute.json()
  return routeJson.route
}

export const getJsonUrl = async sheetUrl => `https://api.sheety.co/${await getSheetyRoute(sheetUrl)}`

export const getJsonObject = async sheetUrl => {
  const getSheetAsJson = await fetch(await getJsonUrl(sheetUrl))
  return await getSheetAsJson.json()
}

export default {
  getJsonUrl,
  getJsonObject,
};