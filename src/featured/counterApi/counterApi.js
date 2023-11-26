import { apiSlice } from "../api/apiSlice";

const counterApi = apiSlice.injectEndpoints({
  tagTypes: ["appointment", "message", "subscriber"],
  endpoints: (builder) => ({
    // get total appointment
    getAppointment: builder.query({
      query: () => `/AppointmentRequest`,
      providesTags: ["appointment"],
    }),

    // delete appointment

    deleteAppointment: builder.mutation({
      query: (id) => ({ url: `/AppointmentRequest/${id}`, method: "DELETE" }),
      invalidatesTags: ["appointment"],
    }),

    // get total message
    getMessage: builder.query({
      query: () => `/contactMessage`,
      providesTags: ["message"],
    }),

    // delete message
    deleteMessage: builder.mutation({
      query: (id) => ({ url: `/contactMessage/${id}`, method: "DELETE" }),
      invalidatesTags: ["message"],
    }),

    // get subscriber list
    getSubscriber: builder.query({
      query: () => `/subscribeEmail`,
      providesTags: ["subscriber"],
    }),

    // delete subscriber
    deleteSubscriber: builder.mutation({
      query: (id) => ({ url: `/subscribeEmail/${id}`, method: "DELETE" }),
      invalidatesTags: ["subscriber"],
    }),
  }),
});

export const {
  useGetAppointmentQuery,
  useGetMessageQuery,
  useGetSubscriberQuery,
  useDeleteAppointmentMutation,
  useDeleteMessageMutation,
  useDeleteSubscriberMutation,
} = counterApi;
