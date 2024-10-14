import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-fc688","appId":"1:379341666627:web:8d0e15dff7b7106180d7f6","storageBucket":"simple-crm-fc688.appspot.com","apiKey":"AIzaSyDSeD1EK_rdIr2fFcyuKSRxBmaGkUEamhE","authDomain":"simple-crm-fc688.firebaseapp.com","messagingSenderId":"379341666627"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-fc688","appId":"1:379341666627:web:8d0e15dff7b7106180d7f6","storageBucket":"simple-crm-fc688.appspot.com","apiKey":"AIzaSyDSeD1EK_rdIr2fFcyuKSRxBmaGkUEamhE","authDomain":"simple-crm-fc688.firebaseapp.com","messagingSenderId":"379341666627"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};

const firebaseConfig = {
  apiKey: "AIzaSyDSeD1EK_rdIr2fFcyuKSRxBmaGkUEamhE",
  authDomain: "simple-crm-fc688.firebaseapp.com",
  projectId: "simple-crm-fc688",
  storageBucket: "simple-crm-fc688.appspot.com",
  messagingSenderId: "379341666627",
  appId: "1:379341666627:web:8d0e15dff7b7106180d7f6"
};
