import { generate } from '@genql/cli'
import 'dotenv/config'
import path from 'path'

generate({
  endpoint: process.env.AWELL_API_URL,
  output: path.join(__dirname, 'generated'),
  headers: {
    apiKey: process.env.AWELL_API_KEY ?? '',
  },
}).catch(console.error)
