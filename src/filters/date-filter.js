import moment from 'moment'

export default (vue) => {
    vue.filter('date', (val) => {
        if (val) {
            return moment(String(val)).format('MM/DD/YYY hh:mm');
        }
    });
};