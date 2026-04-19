// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   //persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// //import storage from 'redux-persist/lib/storage';

// import feedbackApi from '../services/api/feedbackApi';

// // import { authReducer } from './auth/slice';
// import { reviewsReducer } from './reviews/slice';
// // import { tasksReducer } from './tasks/slice';

// // const authPersistConfig = {
// //   key: 'auth',
// //   storage,
// //   whitelist: ['token'],
// // };

// export const store = configureStore({
//   reducer: {
//     // auth: persistReducer(authPersistConfig, authReducer),
//     // tasks: tasksReducer,
//     reviews: reviewsReducer,
//     [feedbackApi.reducerPath]: feedbackApi.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
      
//     }),
//   ],
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);



import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import feedbackApi from '../services/api/feedbackApi';
import { reviewsReducer } from './reviews/slice';

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,

    // RTK Query reducer
    [feedbackApi.reducerPath]: feedbackApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(
      // RTK Query middleware 
      feedbackApi.middleware
    ),

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);