/* eslint-disable no-undef */
const { Bolos } = require('../Bolos.js')

test('should calc the score', () => {
  const pinsDown = [
    [1, 4],
    [4, 5],
    [6, 4],
    [5, 5],
    [10, 0],
    [0, 1],
    [7, 3],
    [6, 4],
    [10, 0],
    [2, 8, 6],
    [0, 0, 0]]
  const bolos = new Bolos(pinsDown)
  bolos.calcPoints()
  expect(bolos.calcScore()[9]).toBe(133)
})

test('should calc the score, the score should be 0', () => {
  const pinsDown = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0]]
  const bolos = new Bolos(pinsDown)
  bolos.calcPoints()
  expect(bolos.calcScore()[9]).toBe(0)
})

test('max puntuation on all strikes should be 300', () => {
  const pinsDown = [
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 10, 10]]
  const bolos = new Bolos(pinsDown)
  bolos.calcPoints()
  bolos.calcScore()
  console.log(bolos.score)
  expect(bolos.score[9]).toBe(300)
})
