import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './baseUrl';

const feedbackApi = createApi({
    reducerPath: 'feedbackApi',

    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api`,
    }),

    endpoints: builder => ({
        getAllFeedbacks: builder.query({
            query: () => '/reviews',

            // приводим ответ backend к нормальному массиву
            transformResponse: response => response.data.result,
        }),
    }),
});

// хук для компонента
export const { useGetAllFeedbacksQuery } = feedbackApi;

export default feedbackApi;