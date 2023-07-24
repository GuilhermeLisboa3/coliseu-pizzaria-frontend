import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => AddAddress
type Input = { zipCode: string, surname: string, neighborhood: string, street: string, number: number, complement: string }
type Output = void
export type AddAddress = (input: Input) => Promise<Output>

export const addAddressUseCase: Setup = (url, httpClient) => async (input) => {
  const { statusCode } = await httpClient.request({ url, method: 'post', body: input })
  switch (statusCode) {
    case 401: throw new UnauthorizedError()
    default: return undefined
  }
}
