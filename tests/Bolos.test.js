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

test('the score should be 20 if only downs 1 per launch', () => {
  const pinsDown = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1, 0]
  ]

  const bolos = new Bolos(pinsDown)
  bolos.calcPoints()
  bolos.calcScore()
  console.log(bolos.score)
  expect(bolos.score[9]).toBe(20)
})

test('if the first 2 launchs are 4 and 6 the match should be a spare', () => {
  const pinsDown = [
    [4, 6],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0]
  ]

  const bolos = new Bolos(pinsDown)
  bolos.calcPoints()
  bolos.calcScore()
  console.log(bolos.score)
  expect(bolos.score[0]).toBe(10)
})

test('should return a matrix with lenght 10', () => {
  let bolos = new Bolos();
  const matrix = bolos.calcMatriz();
  expect(matrix.length).toBe(10)
})

test('should return values between 0 and 10 until 9 turn', () => {
  let bolos = new Bolos();
  bolos.calcMatriz();
  const matrix = bolos.calcPoints()
  for (let index = 0; index < matrix.length-1; index++) {
    expect(matrix[index]<=10).toBeTruthy()
  }
})

test('if the last turn is perfect the points should be 30 ', () => {
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
    [10, 10, 10]
  ]
  const bolos = new Bolos(pinsDown)
  const points = bolos.calcPoints()
  expect(points[9]).toBe(30)
})