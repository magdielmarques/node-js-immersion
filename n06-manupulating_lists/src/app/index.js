// listing with higher order functions
// test of performance
const funcFor = require('../utils/for.js')
const funcForIn = require('../utils/forIn.js')
const funcForOf = require('../utils/forOf.js')
const funcForEach = require('../utils/forEach.js')
const funcMap = require('../utils/map.js')
const funcMyMap = require('../utils/myMap.js')
const funcFilter = require('../utils/filter.js')
const funcMyFilter = require('../utils/myFilter.js')

funcFor.main()
funcForIn.main()
funcForOf.main()
funcForEach.main()
funcMap.main()
funcMyMap.main()
funcFilter.main()
funcMyFilter.main()