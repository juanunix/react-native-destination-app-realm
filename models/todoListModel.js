'use strict';

import Realm from 'realm';

class Destination extends Realm.Object {}
Destination.schema = {
    name: 'Destination',
    properties: {
        title: 'string',
        place: 'string',
        day: 'string',
    },
};

class DestinationList extends Realm.Object {}
DestinationList.schema = {
    name: 'DestinationList',
    properties: {
        title: 'string',
        place: 'string',
        day: 'string',
        image: 'string',
        creationDate: 'date'
    },
};

export default new Realm({schema: [Destination, DestinationList]});