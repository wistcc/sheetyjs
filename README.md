# sheety.js
## NPM package for [sheety.co](https://sheety.co/)

Turn any Google sheet into an API instantly, for free.
Power websites, apps, or whatever you like, all from a spreadsheet. Changes to your spreadsheet update your API in realtime. Neat.

**Important note:** The Google Sheet URL to use must be a valid Google Sheet CSV URL. Just follow these 3 simple steps as explained [here](https://sheety.co/).

## Quick Start

Install the package like this:

`npm i sheetyjs` or `yarn add sheety`

And then use it like this:

```js
import { getJsonUrl, getJsonObject } from 'sheetjs'

// this must be a valid Google Sheet CSV URL as mentioned above
const googleSheetUrl = ''

// you can get the json file url
const jsonUrl = await getJsonUrl(googleSheetUrl)

// or the json object right away
const jsonObject = await getJsonObject(googleSheetUrl)
```

Magic :sparkles:

## Special thanks

Special thanks to [@phillipcaudell](https://twitter.com/phillipcaudell) for creating [sheety.co](https://sheety.co/)