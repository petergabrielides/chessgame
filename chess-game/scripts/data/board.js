const files = [{
  name: 'a',
  number: 1
}, {
  name: 'b',
  number: 2
}, {
  name: 'c',
  number: 3
}, {
  name: 'd',
  number: 4
}, {
  name: 'e',
  number: 5
}, {
  name: 'f',
  number: 6
}, {
  name: 'g',
  number: 7
}, {
  name: 'h',
  number: 8
},]

const ranks = [{
  name: '1',
  number: 1
}, {
  name: '2',
  number: 2
}, {
  name: '3',
  number: 3
}, {
  name: '4',
  number: 4
}, {
  name: '5',
  number: 5
}, {
  name: '6',
  number: 6
}, {
  name: '7',
  number: 7
}, {
  name: '8',
  number: 8
},]

export const squares = [];

files.forEach(file => {
  ranks.forEach(rank => {
    squares.push({
      name: `${file.name}${rank.name}`,
      fileName: file.name,
      fileNumber: file.number,
      rankName: rank.name, 
      rankNumber: rank.number,
      color: whichColor(file.number, rank.number)
    }
    )
  })
})

function whichColor(a, b) {
  if (a % 2 === 1) {
    if (b % 2 === 1) {
      return 'dark';
    } else {
      return 'light';
    }
  }

  if (a % 2 === 0) {
    if (b % 2 === 1) {
      return 'light';
    } else {
      return 'dark';
    }
  }
}