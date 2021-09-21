const SomeApp = {
    data() {
      return {
        result: {},
      }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.result.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods: {
        fetchUserData() {
            //Method 1:
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then((json) => {
               // console.log("Got json back:", json);
                this.result = json.results[0];
                // console.log("C");
            })
            .catch( (error) => {
                console.error(error);
            });
        }
    },
    created() {
        this.fetchUserData();
    }

  }
  
  Vue.createApp(SomeApp).mount('#userData');
//code from my amazing msis professors Tom G github: https://github.com/tag/msis-in-class-2021
//data from randomuser api https://randomuser.me
//date time formating from dayjs: https://day.js.org/