
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KonkanRailwayLivePositionSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await KonkanRailwayLivePositionSDK.test()
    equal(null !== testsdk, true)
  })

})
