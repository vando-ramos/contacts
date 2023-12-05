const app = Vue.createApp({
    data() {
        return {
            firstName: 'Vando',
            lastName: 'Ramos',
            email: 'vando@email.com',
            city: 'Rio de Janeiro',
            // picture: 'https://randomuser.me/api/?results=5',

            listContacts: ['Vando', 'Alice', 'Jo']
        }
    },
    methods:{
        changeData(){
            this.firstName = 'Ramos',
            this.lastName = 'Vando',
            this.email = 'vando@email.com',
            this.city = 'Rio de Janeiro'
            // this.picture = 'https://randomuser.me/api/?results=5'
        },

        async getData(){

            let response = await fetch('https://randomuser.me/api/?results=5');

            // console.log(response.json());

            let data = await response.json();

            console.log(data);

            this.listContacts = [];

            data.results.forEach(item =>{

                var contact = new Object();

                contact.picture = item.picture.large;
                contact.firstName = item.name.first;
                contact.lastName = item.name.last;
                contact.email = item.email;
                contact.city = item.location.city;
                

                this.listContacts.push(contact)

            });
        }
    }
})

app.mount('#app');