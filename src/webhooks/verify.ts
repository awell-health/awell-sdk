import { createVerify } from 'crypto'

/**
 * Verify that the incoming webhook has been sent by Awell and has not been tampered with.
 * @param {any} body the JSON body of the webhook.
 * @param {string} signature the base64 encoded signature taken from the `x-awell-signature` header.
 * @param {string} publicKey your public signing key available in Awell Studio.
 * @returns true if the signature is valid
 */
export const verify = (
  body: any,
  signature: string,
  publicKey: string,
): boolean => {
  const verify = createVerify('sha256').update(JSON.stringify(body)).end()
  return verify.verify(publicKey, Buffer.from(signature, 'base64'))
}
