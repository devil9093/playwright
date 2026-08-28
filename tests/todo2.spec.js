const { test, expect, request } = require('@playwright/test');
import { payload } from '../utility/apiData';

test.describe('API in Playwright', () => {

  test('Api test', async({ request }) =>{
    const response = await request.post('http://localhost:8080',{
      data:payload,
      headers: { "Accept":"application/json"}
    });
    console.log( response )
    expect(response.status()).toBe(404)
  })


});