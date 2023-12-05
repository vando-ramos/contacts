const app = Vue.createApp({
    data() {
        return {
            searchText: '',            

            listContacts: []
        }
    },

    computed:{
        listResult(){

            if(this.searchText){

                return this.listContacts.filter(contact => {

                    return contact.firstName.toLowerCase().includes(this.searchText.toLowerCase());
                });
            }else{

                return this.listContacts;
            }
        }
    },

    async mounted(){
        this.listResult = await this.getData();
    },

    methods:{
        changeData(){
            this.firstName = 'Ramos',
            this.lastName = 'Vando',
            this.email = 'vando@email.com',
            this.city = 'Rio de Janeiro'
            this.picture = 'https://randomuser.me/api/?results=5'
        },

        removeContact(index){
            this.listContacts.splice(index, 1);
        },

        async getData(){

            let response = await fetch('https://randomuser.me/api/?results=25');

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