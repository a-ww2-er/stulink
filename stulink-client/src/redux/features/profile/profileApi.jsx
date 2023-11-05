import { apiSlice } from "../api/apiSlice";
import { userAccountDetails } from "./profileSlice";

export const profileApi = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        //endponits here, mutation for things like POST AND PUT request and query for GET request
       //This is a request to create user
        fetchAccountDetails:builder.query({
            //query is simply what we're sending
            query:(data)=>({
                //this will go to our .env server route + /registration
                url:"profile",
                method:"GET",
                //An endpoint definition that alters data on the server or will possibly invalidate the cache.
                credentials:"include"
            }),
            //we are making request to our server here and storing the response in the Slices reducers i.e slices actions
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userAccountDetails({
                            accountDetails:result.data.activationToken
                        })
                    )
                } catch (error) {
                    console.log(error)
                }
            }
        })
    })
})

export const {useFetchAccountDetailsQuery} = profileApi;