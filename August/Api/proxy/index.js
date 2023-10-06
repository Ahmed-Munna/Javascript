const target = {
    name: 'Ahmed Munna',
    age: 'Bolbo Na',
    activity: 'Kichu kori na',
};

const handlerObj = {
    get(target, prop, reciver) {

       if (prop === 'name') {
        return target.name;
       }

       return Reflect.get(...arguments);
    }
};

const ShowTheInformation = new Proxy(target, handlerObj);

console.log(ShowTheInformation.name1);
