// <<<<<<< malik-1
// // import {
// //     CATEGORIES_FETCH_SUCCESS,
// //     CATEGORY_FETCH_SUCCESS,
// //     PRODUCTS_FETCH_SUCCESS,
// //     PRODUCT_FETCH_SUCCESS,
// // } from "./actionType";

// const baseUrl = 'http://localhost:3000'

// // TODO get all parking space
// function fetchParkingSpaces() {
//     return (dispatch) => {
//         fetch(baseUrl + "/parkingSpace", {})
//             .then((response) => {
//                 if (!response.ok) throw new Error("Internal Server Error");
//                 return response.json();
//             })
//             .then((data) => dispatch(parkingSpacesFetchSucces(data)))
//             .catch((err) => console.log(err));
//     };
// }

// function parkingSpacesFetchSucces(payload) {
//     return {
//         type: "parkingSpace/getAll",
//         payload,
//     };
// }

// // TODO get one parking space

// function fetchParkingSpace(productId) {
//     return (dispatch) => {
//         fetch(
//             `${baseUrl}/parkingSpace/${productId}`,
//             {
//             }
//         )
//             .then((response) => {
//                 if (!response.ok) throw new Error("Internal Server Error");
//                 return response.json();
//             })
//             .then((data) => dispatch(parkingSpaceFetchSucces(data)))
//             .catch((err) => console.log(err));
//     };
// }

// function parkingSpaceFetchSucces(payload) {
//     return {
//         type: "parkingSpace/getOne",
//         payload,
//     };
// }


// // TODO get all review
// function fetchReviews() {
//     return (dispatch) => {
//         fetch(baseUrl + "/parkingSpace", {})
//             .then((response) => {
//                 if (!response.ok) throw new Error("Internal Server Error");
//                 return response.json();
//             })
//             .then((data) => dispatch(reviewFetchSuccess(data)))
//             .catch((err) => console.log(err));
//     };
// }

// function reviewFetchSuccess(payload) {
//     return {
//         type: "review/getAll",
//         payload,
//     };
// }


// // TODO create review
// function createReview(reviewInput) {
//     return (dispatch) => {
//         fetch(`${baseUrl}/review`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 access_token: localStorage.getItem("access_token"),
//             },
//             body: JSON.stringify(reviewInput),
//         })
//             .then((response) => {
//                 if (!response.ok) throw new Error("Internal Server Error");
//             })
//             .then(() => dispatch(fetchReviews()))
//             .catch((err) => console.log(err));
//     };
// }
// // function fetchProducts() {
// //     return (dispatch) => {
// //         fetch(baseUrl + "/products", {
// //             headers: {
// //                 access_token: localStorage.getItem("access_token"),
// //             },
// //         })
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //                 return response.json();
// //             })
// //             .then((data) => dispatch(productsFetchSuccess(data)))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // function productsFetchSuccess(payload) {
// //     return {
// //         type: PRODUCTS_FETCH_SUCCESS,
// //         payload,
// //     };
// // }

// // function fetchProduct(productId) {
// //     return (dispatch) => {
// //         fetch(
// //             `${baseUrl}/products/${productId}`,
// //             {
// //                 headers: {
// //                     access_token: localStorage.getItem("access_token"),
// //                 },
// //             }
// //         )
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //                 return response.json();
// //             })
// //             .then((data) => dispatch(productFetchSuccess(data)))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // function productFetchSuccess(payload) {
// //     return {
// //         type: PRODUCT_FETCH_SUCCESS,
// //         payload,
// //     };
// // }

// // function createProduct(productInput) {
// //     return (dispatch) => {
// //         fetch(`${baseUrl}/products`, {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json",
// //                 Accept: "application/json",
// //                 access_token: localStorage.getItem("access_token"),
// //             },
// //             body: JSON.stringify(productInput),
// //         })
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //             })
// //             .then(() => dispatch(fetchProducts()))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // function updateProduct(productInput, productId) {
// //     return (dispatch) => {
// //         fetch(
// //             `${baseUrl}/products/${productId}`,
// //             {
// //                 method: "PUT",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                     Accept: "application/json",
// //                     access_token: localStorage.getItem("access_token"),
// //                 },
// //                 body: JSON.stringify(productInput),
// //             }
// //         )
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //             })
// //             .then(() => dispatch(fetchProducts()))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // function deleteProduct(productId) {
// //     return (dispatch) => {
// //         fetch(
// //             `${baseUrl}/products/${productId}`,
// //             {
// //                 method: "DELETE",
// //                 headers: {
// //                     access_token: localStorage.getItem("access_token"),
// //                 },
// //             }
// //         )
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //             })
// //             .then(() => dispatch(fetchProducts()))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // function fetchCategories() {
// //     return (dispatch) => {
// //         fetch(`${baseUrl}/categories`, {
// //             headers: {
// //                 access_token: localStorage.getItem("access_token"),
// //             },
// //         })
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //                 return response.json();
// //             })
// //             .then((data) => dispatch(CategoriesFetchSuccess(data)))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // function CategoriesFetchSuccess(payload) {
// //     return {
// //         type: CATEGORIES_FETCH_SUCCESS,
// //         payload,
// //     };
// // }

// // function fetchCategory(categoryId) {
// //     return (dispatch) => {
// //         fetch(
// //             `${baseUrl}/categories/${categoryId}`,
// //             {
// //                 headers: {
// //                     access_token: localStorage.getItem("access_token"),
// //                 },
// //             }
// //         )
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //                 return response.json();
// //             })
// //             .then((data) => dispatch(CategoryFetchSuccess(data)))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // function CategoryFetchSuccess(payload) {
// //     return {
// //         type: CATEGORY_FETCH_SUCCESS,
// //         payload,
// //     };
// // }

// // function createCategory(name) {
// //     return (dispatch) => {
// //         fetch(`${baseUrl}/categories`, {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json",
// //                 Accept: "application/json",
// //                 access_token: localStorage.getItem("access_token"),
// //             },
// //             body: JSON.stringify({ name }),
// //         })
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //             })
// //             .then(() => dispatch(fetchCategories()))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // function updateCategory(name, categoryId) {
// //     return (dispatch) => {
// //         fetch(
// //             `${baseUrl}/categories/${categoryId}`,
// //             {
// //                 method: "PUT",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                     Accept: "application/json",
// //                     access_token: localStorage.getItem("access_token"),
// //                 },
// //                 body: JSON.stringify({ name }),
// //             }
// //         )
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //             })
// //             .then(() => dispatch(fetchCategories()))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // function deleteCategory(categoryId) {
// //     return (dispatch) => {
// //         fetch(
// //             `${baseUrl}/categories/${categoryId}`,
// //             {
// //                 method: "DELETE",
// //                 headers: {
// //                     access_token: localStorage.getItem("access_token"),
// //                 },
// //             }
// //         )
// //             .then((response) => {
// //                 if (!response.ok) throw new Error("Internal Server Error");
// //             })
// //             .then(() => dispatch(fetchCategories()))
// //             .catch((err) => console.log(err));
// //     };
// // }

// // export {
// //     fetchProducts,
// //     fetchProduct,
// //     createProduct,
// //     updateProduct,
// //     deleteProduct,
// //     fetchCategories,
// //     fetchCategory,
// //     createCategory,
// //     updateCategory,
// //     deleteCategory,
// // };

// export {
//     fetchParkingSpaces,
//     fetchParkingSpace
// }
// =======
export const fetchParkingSpaces = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/parkingSpace')
      const data = await response.json()
      const action = {
        type: "parkingSpace/fetch",
        payload: data
      }
      dispatch(action)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

export const fetchCustomers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/pub/customers')
      const data = await response.json()
      const action = {
        type: "customers/fetch",
        payload: data
      }
      dispatch(action)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

export const fetchReviewDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/review/' + id)
      const data = await response.json()
      const action = {
        type: "reviewDetail/fetch",
        payload: data
      }
      dispatch(action)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

export const fetchFacilityDetail = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/owner/facility/')
      const data = await response.json()
      const action = {
        type: "facilityDetail/fetch",
        payload: data
      }
      dispatch(action)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

export const fetchParkingSpaceRelation = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/pub/spaces/' + id)
      const data = await response.json()
      const action = {
        type: "facilityParkingSpaceRelation/fetch",
        payload: data
      }
      dispatch(action)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

export const fetchParkingSpacesByLandlord = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch('http://localhost:3000/owner/spaces', {
        headers: {
          'Content-Type': 'application/json',
          'access_token': `${token}`
        },
      });

      const data = await response.json();
      const action = {
        type: "parkingSpaceByLandlord/fetch",
        payload: data,
      };

      console.log(response);
      dispatch(action);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};


export const fetchParkingSpacesDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/parkingSpace/' + id)
      const data = await response.json()
      const action = {
        type: "parkingSpaceDetail/fetch",
        payload: data
      }
      dispatch(action)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

// export const addParkingSpaces = (name,
//                                  subtitle,
//                                  description,
//                                  city,
//                                  stock,
//                                  mapLong,
//                                  mapLat,
//                                  price,
//                                  mainImg,
//                                  images,
//                                  facilities,
// ) => {
//   return async (dispatch) => {
//     try {
//       const token = localStorage.getItem("access_token");
//       const response = await fetch('http://localhost:3000/admin/parking-space-transaction', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'access_token': `${token}`
//         },
//         body: JSON.stringify({
//           name,
//           subtitle,
//           description,
//           city,
//           stock,
//           mapLong,
//           mapLat,
//           price,
//           mainImg,
//           images,
//           facilities
//         }),
//       })
//       console.log(response)
//       const data = await response.json();
//       console.log(data);
//
//       dispatch(fetchParkingSpaces())
//
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

// export const addParkingSpaces = (name, subtitle, description, city, stock, mapLong, mapLat, price, mainImg, images, facilities) => {
export const addParkingSpaces = (name, subtitle, description, city, stock, mapLong, mapLat, price, images, facilities) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("access_token");
      // console.log('---> ini di actions 491', name, subtitle, description, city, stock, mapLong, mapLat, price, images, facilities)

      const formData = new FormData();
      formData.append('name', name);
      formData.append('subtitle', subtitle);
      formData.append('description', description);
      formData.append('city', city);
      formData.append('stock', stock);
      formData.append('mapLong', mapLong);
      formData.append('mapLat', mapLat);
      formData.append('price', price);

      images.forEach((image) => {
        formData.append('images', image);
      });

      facilities.forEach((facility) => {
        formData.append('facilities', facility);
      });


      // formData.append('facilities', JSON.stringify(facilities));


      // console.log('---> ini di actions 510', formData)

      const response = await fetch('http://localhost:3000/admin/parking-space-transaction', {
        method: 'POST',
        headers: {
          'access_token': `${token}`
        },
        body: formData
        // body: formData,
      });

      // console.log('---> ini di actions 518', formData)
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ', ' + pair[1]);
      // }

      console.log(response);
      const data = await response.json();
      console.log(data);

      dispatch(fetchParkingSpacesByLandlord());

    } catch (error) {
      console.log(error);
    }
  };
};


export const addParkingSpaceReview = (parkingSpaceId, review, rating) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch('http://localhost:3000/review/' + parkingSpaceId, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': `${token}`
        },
        body: JSON.stringify({
          review, rating
        }),
      })
      console.log(response)
      const data = await response.json();
      console.log(data);

      dispatch(fetchReviewDetail(parkingSpaceId))

    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchLandlords = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/landlords')
      const data = await response.json()
      const action = {
        type: "landlords/fetch",
        payload: data
      }
      dispatch(action)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

export const fetchLandlordDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/landlords/' + id)
      const data = await response.json()
      const action = {
        type: "landlordDetail/fetch",
        payload: data
      }
      dispatch(action)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

export const updateParkingSpace = (landlordId, parkingSpaceId, customerId, newStatus, phoneNumber) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/landlords/${landlordId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parkingSpaces: {
            [parkingSpaceId]: {
              status: newStatus
            }
          },
          phoneNumber
        })
      });

      // Assuming you have a fetchLandlords() action to update the landlords data
      dispatch(fetchLandlords());
    } catch (error) {
      console.log(error);
    }
  };
};


export const newLandlord = (email, password, username, phoneNumber, address) => {

  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username,
          phoneNumber,
          address
        }),
      })
      if (!response.ok)
        console.log(response)
      dispatch(fetchLandlords())

    } catch (error) {
      console.log(error)
    }
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        const access_token = data.access_token;
        localStorage.setItem('access_token', access_token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid email or password' });
      }

    } catch (error) {
      console.log(error);
    }
  };
};

export const loginCustomer = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/pub/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        const access_token = data.access_token;
        localStorage.setItem('access_token', access_token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid email or password' });
      }

    } catch (error) {
      console.log(error);
    }
  };
};


export const registerCustomer = (email, password, username, phoneNumber, address) => {

  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/pub/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username,
          phoneNumber,
          address
        }),
      })
      if (response.ok) {
        const data = await response.json();
        console.log(data, "<<<<<<<< new customer")

      } else {
        throw new Error("Internal Server Error");
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export const getBookingByCustomerId = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/booking/bookingByCustomerId', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data, "<<<<<<<< bookingss")
        // const access_token = data.access_token;
        // localStorage.setItem('access_token', access_token);
        dispatch({ type: 'booking/fetch', payload: data.bookings });
      } else {
        throw new Error("Internal Server Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchParkingSpacesImages = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/admin/parking-space/' + id)
      const data = await response.json()
      const action = {
        type: "parkingSpaceImages/fetch",
        payload: data
      }
      dispatch(action)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

