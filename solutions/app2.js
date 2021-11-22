
let HU = {
    date(date) {
        return new Intl.DateTimeFormat('hu-HU').format(date)
    },

    curreny(number) {return new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'HUF'
    }).format(number)},

    list(array ='') {return `${array[0]}, ${array[1]} és ${array[2]}`}
}




 export default HU
