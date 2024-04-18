import instance from ".."

export const findNoticeList = async(data) => {
    const resultData = await instance({method: 'get', url: '/notice', data: data})

    return resultData;
}