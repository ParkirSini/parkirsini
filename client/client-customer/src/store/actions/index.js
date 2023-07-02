export const fetchParkingSpaces = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/parkingSpaces')
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

export const fetchParkingSpacesDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/parkingSpaces/' + id)
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

export const addParkingSpaces = (name,
                                 subtitle,
                                 description,
                                 city,
                                 stock,
                                 mapLong,
                                 mapLat) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/parkingSpaces/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          subtitle,
          description,
          city,
          stock,
          mapLong,
          mapLat
        }),
      })

      dispatch(fetchParkingSpaces())

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


export const newLandlord = (email, password, name, phoneNumber, address) => {

  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/landlords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
          phoneNumber,
          address
        }),
      })

      dispatch(fetchLandlords())

    } catch (error) {
      console.log(error)
    }
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/landlords');
      const landlords = await response.json();

      const user = landlords.find(
        (landlord) => landlord.email === email && landlord.password === password
      );

      if (user) {
        const access_token = 'berhasilmasuk';
        localStorage.setItem('access_token', access_token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid email or password' });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

