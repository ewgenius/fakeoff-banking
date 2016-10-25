import * as Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCMWTM1Q4UP9lSe5XXewxmtKlhFg6PZYDM",
  authDomain: "fakeoff-banking.firebaseapp.com",
  databaseURL: "https://fakeoff-banking.firebaseio.com",
  storageBucket: "fakeoff-banking.appspot.com",
  messagingSenderId: "621740508092"
}

let firebaseInstance: FirebaseService | null = null

export class FirebaseService {
  static getInstanse() {
    if (!firebaseInstance) {
      firebaseInstance = new FirebaseService()
    }
    return firebaseInstance
  }

  private _firebase: Firebase.app.App | null

  constructor() {
    this._firebase = Firebase.initializeApp(config)
  }

  public get firebase() {
    return this._firebase
  }
}