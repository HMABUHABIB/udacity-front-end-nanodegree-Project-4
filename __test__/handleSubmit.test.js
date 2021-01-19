import { testLink } from "../src/client/js/formHandler"


describe('check the URL link', () => {
 test('Testing URL http://www.google.com/', () => {
  const url = 'http://www.google.com/'
  expect(testLink(url)).toBe(true)
 })
 test('Testing URL https://www.google.com/', () => {
  const url = 'https://www.google.com/'
  expect(testLink(url)).toBe(true)
 })
 test('Testing URL google.com', () => {
  const url = 'google.com'
  expect(testLink(url)).toBe(true)
 })
 test('Testing URL 123', () => {
  const url = '123/'
  expect(testLink(url)).toBe(false)
 })
})