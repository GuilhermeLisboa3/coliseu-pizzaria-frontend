import { LocalStorageAdapter } from '@/infra/cache'

import 'jest-localstorage-mock'
import faker from 'faker'

describe('LocalStorageAdapter', () => {
  let sut: LocalStorageAdapter

  let key: string
  let value: object

  beforeAll(() => {
    key = faker.database.column()
    value = { any: faker.random.word() }
  })

  beforeEach(() => {
    sut = new LocalStorageAdapter()

    localStorage.clear()
  })

  describe('set()', () => {
    it('should call localStorage.setItem with correct values', async () => {
      sut.set({ key, value })

      expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
    })
  })
})
