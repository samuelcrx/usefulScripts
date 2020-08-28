const data = [
    { instituicao: 'Mamão', ano: 2011 },
    { instituicao: 'Banana', ano: 2011 },
    { instituicao: 'Abacate', ano: 2011 },
    { instituicao: 'Mamão', ano: 2013 },
    { instituicao: 'Banana', ano: 2013 },
    { instituicao: 'Abacate', ano: 2013 },
    { instituicao: 'Mamão', ano: 2010 },
    { instituicao: 'Banana', ano: 2010 },
    { instituicao: 'Abacate', ano: 2010 }
]

const sortByYear =  (a, b) => a.ano < b.ano ? -1 : 1
const sortByInstitution = (a, b) => a.instituicao < b.instituicao ? -1 : 1

const groupByYear = list => Object.values(list.sort(sortByYear).reduce((acc, item) => {
    return acc[item.ano] ? { ...acc, [item.ano]: [...acc[item.ano], item] } : { ...acc, [item.ano]: [item] }
}, {}))


const sortByYearAndInstitution = list => groupByYear(list).reduce((acc, value) => {
    return [...acc, ...value.sort(sortByInstitution)]
}, [])

sortByYearAndInstitution(data)
