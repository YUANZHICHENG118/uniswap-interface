import { Web3Provider } from '@ethersproject/providers'

export default function getLibrary(provider: any): Web3Provider {
  debugger
  const library = new Web3Provider(provider)
  library.pollingInterval = 15000
  return library
}
