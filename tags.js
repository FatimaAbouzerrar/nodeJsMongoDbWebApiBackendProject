let mandatoryTags = ['tech', 'services', 'house', 'seconhand']
let advertisementsTags = ['tech', 'services', 'house', 'seconhand']
let intersection = mandatoryTags.filter(x => advertisementsTags.includes(x))
if(intersection.length > advertisementsTags.length) {
    throw new Error('IndexOutOfBound')
}
console.log(intersection)