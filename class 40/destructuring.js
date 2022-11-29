const product = { id: 10, name: 'tshirt', price: 500, phone: '01796458768', address: 'danmon' }

/* 
const name = product.name;
const phone = product.phone;
const address = product.address; */

// const { price, phone, name } = product;
// console.log('line 9', price, phone, name);


// const { framework } = company.web;
// const { food, name } = company.ceo;
// const { fourth, first } = company.web.tech;
// // console.log(framework);

const [p] = [45, 21, 36, 56];
const [best] = ['belal', 'habib'];
// console.log(best);

const company = {  // company =>  web => tech>
    name: 'web developerE',
    ceo: {
        id: 1,
        name: "Ali Shorif",
        food: 'Bola jabena'
    },
    web: {
        work: 'web development and design',
        employee: 15,
        framework: 'React js',
        third: 45,
        tech: {
            name: 'html',
            second: 'css',
            third: 'bootstrap',
            fourth: 'js'
        }
    }
}

// console.log(company?.web?.third);
console.log(company?.web?.tech?.third);

