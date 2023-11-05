import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userLoggedOut, userRegistration } from "./authSlice";

//we can easily do this in the apiSlice.jsx directly but itd
//make the file big if we have multiple endpoints..so what we're doing 
//here is still the same thing,, we're simply injecting endpoints into the apiSlice.jsx
//only that we arent doing it in the same file.
export const authApi = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        //endponits here, mutation for things like POST AND PUT request and query for GET request
       //This is a request to create user
        register:builder.mutation({
            //query is simply what we're sending
            query:(data)=>({
                //this will go to our .env server route + /registration
                url:"registration",
                method:"POST",
                body:data,
                //An endpoint definition that alters data on the server or will possibly invalidate the cache.
                credentials:"include"
            }),
            //we are making request to our server here and storing the response in the Slices reducers i.e slices actions
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userRegistration({
                            token:result.data.activationToken
                        })
                    )
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        //This is for our activation of email requests
        activation: builder.mutation({
            query:({activation_token,activation_code})=>({
                url:"activate-user",
                method:"POST",
                body:{
                    activation_token,
                    activation_code
                },
            })
        }),
        login: builder.mutation({
            query:(data)=>({
                url:"login",
                method:"POST",
                body:{ 
                    email:data.email,
                    password:data.password
                    },
                credentials:"include",
            }),
               //we are making request to our server here and storing the response in the Slices reducers i.e slices actions
               async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken:result.data.activationToken,
                            user:result.data.user
                        })
                    )
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        oauth: builder.mutation({
            query:({ email, username, profilePhoto})=>({
                url:"oauth",
                method:"POST",
                body:{
                    email, username, profilePhoto
                },
                credentials:"include",
            }),
               //we are making request to our server here and storing the response in the Slices reducers i.e slices actions
               async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken:result.data.activationToken,
                            user:result.data.user
                        })
                    )
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        logout: builder.query({
            query:()=>({
                url:"logout",
                method:"GET",
                credentials:"include",
            }),
               //we are making request to our server here and storing the response in the Slices reducers i.e slices actions
               async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    dispatch(
                        userLoggedOut()
                    )
                } catch (error) {
                    console.log(error)
                }
            }
        }),
    })
})

export const {useRegisterMutation,useActivationMutation,useLoginMutation,useLogoutQuery,useOauthMutation} = authApi;