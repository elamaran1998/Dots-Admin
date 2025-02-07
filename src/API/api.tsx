import axios from 'axios';
import store from '../Redux/store';

export const BASE_URL = 'http://15.207.56.61:8080/api/';
// export const Bearer_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6IjIwYWI5NTExLTExMjAtNDBjZS1hMDRlLTM3NTc3NDEyMDk3OCIsInJvbGVfaWQiOjIsImlhdCI6MTczODU4NDUzOSwiZXhwIjoxNzM4NjcwOTM5fQ.fa7gDhHHITXv3yQhKlDwqyuTI_xKOOwVeSBFFUwBr_8';



export const Bearer_Token = () => {
    const tokenFromLocalStorage = localStorage.getItem("authToken")
    if(tokenFromLocalStorage){
      return tokenFromLocalStorage
    }
  
    return store.getState().token.value
  }

console.log("Previous Token:", Bearer_Token())


// Login

export const LoginUser = async(data:any) => {

    const API_URL = `${BASE_URL}v1/admin/login`;

    const Payload = {
        "email":data?.email,
        "password":data?.password
    }

    try{
        const response = await axios.post(API_URL,Payload)
        return response.data
    }
    catch(error){
        throw error
    }
}





// Users List

 export const FetchUsers = async () => {

    const API_URL = `${BASE_URL}v1/admin/getUserList`;

    try{
        const response = await axios.get(API_URL,{ headers : {
            Authorization: `Bearer ${Bearer_Token()}`,
        }}
    )
    console.log("DATAFORIUserList",response.data)
    return response.data

    }
    catch(error){
        throw error  
    }
};



// Category List
export const FetchCategory = async () => {

    const API_URL = `${BASE_URL}v1/admin/getCategory`;

    try{
        const response = await axios.get(API_URL,{ headers : {
            Authorization: `Bearer ${Bearer_Token()}`,
        }}
    )
    console.log("DATAFORCategoryList22",Bearer_Token(), response.data)
    return response.data

    }
    catch(error){
        throw error  
    }
};

// SubCategory List
export const FetchSubCategory = async () => {

    const API_URL = `${BASE_URL}v1/admin/getSubCategory`;

    try{
        const response = await axios.get(API_URL,{ headers : {
            Authorization: `Bearer ${Bearer_Token()}`,
        }}
    )
    console.log("DATAFORSubCategoryList",response.data)
    return response.data

    }
    catch(error){
        throw error  
    }
};

console.log(Bearer_Token(),"TOKENCheck")


// Create or Add Category

// export const AddCategory = async (data:any) => {

//     console.log(data,"kkjnjn")

//     const API_URL = `${BASE_URL}v1/admin/createCategory`;

//     const payload = {
//         "category_name": data.formData.categoryName,
//         "upload_image": "",
//         "description": data.formData.description,
//         "isActive": true,
//         "created_by": ""
//     }

//     try{
//         const response = await axios.post(API_URL, payload, { 
//             headers : {
//                 Authorization: `Bearer ${Bearer_Token()}`,
//             }
//         }
//     )

//         console.log("AddCategory",Bearer_Token(),response.data)
//         return response.data

//     }
//     catch(error){
//         throw error  
//     }
// };


export const AddCategory = async (data: any) => {

    console.log(data,"RoundTripPayload")
  
    const API_URL = `${BASE_URL}v1/admin/createCategory`;
      
      const payload = {
        "category_name": data.formData.categoryName,
        "upload_image": "",
        "description": data.formData.description,
        "isActive": true,
        "created_by": ""
    }
  
    try {
      const response = await axios.post(API_URL,payload, {
        headers: {
         Authorization: `Bearer ${Bearer_Token()}`
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error posting booking data:", error);
      throw error;
    }
  };
  


