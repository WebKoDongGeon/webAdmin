import instance from ".."

export const homeList = async(data) => {
    const resultData = await instance({method: 'get', url: '/home', data: data})

    return resultData;
}