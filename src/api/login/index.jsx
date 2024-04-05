import instance from ".."

export const login = async(data) => {
    const resultData = await instance({method: 'post', headers: {'Content-Type': 'application/x-www-form-urlencoded'}, url: '/login', data: data})

    return resultData;
}