
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const ordersRef = db.collection('orders');
class ResponseJson {
    speech: string;
    displayText: string;
    constructor() {
        this.speech = '';
        this.displayText = '';
    }
}

export const fullfilment = functions.https.onRequest((request, response) => {
    console.log('Request headers: ' + JSON.stringify(request.headers));
    console.log('Request body: ' + JSON.stringify(request.body));

    const action = request.body.result.action;
    const parameters = request.body.result.parameters;
    const responseText = request.body.result.fulfillment.speech;
    const responseJson = new ResponseJson();
    if (action === 'order.pizza') {
        ordersRef.add({...parameters, status: 'ordered'}).then ( ref => console.log('Added Ordered with ID: ', ref.id));
        responseJson.speech = responseText;
        responseJson.displayText = responseText;

    } else {
    responseJson.speech = 'You are not supposed to see this plz let the admin know';
    responseJson.displayText = 'You are not supposed to see this plz let the admin know';
    }
    response.json(responseJson);

});
